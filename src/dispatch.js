const meta = require("./config");
const _ = require("lodash");
const axios = require("axios");

module.exports = class {
    constructor(semantic, ids) {
        this.semantic = semantic;
        this.rank = meta.APIMETA[semantic].id.rank;
        this.ids = ids;
        this.mapping = {};
        this.promises = { 0: [] };
    }

    /**
     * Group ID inputs based on prefix
     */
    groupIDs() {
        this.grouped_ids = {};
        Object.values(this.ids).map(rec => {
            for (let prefix of this.rank) {
                if (prefix in rec.db_ids) {
                    if (!(prefix in this.grouped_ids)) {
                        this.grouped_ids[prefix] = new Set();
                    }
                    this.grouped_ids[prefix].add(rec.db_ids[prefix][0]);
                    this.mapping[rec.id.identifier] = rec.db_ids[prefix][0];
                    break;
                }
            }
        })
    }

    /**
 * construct a BioThings batch query using axios
 * The query aims to fetch all equivalent IDs for the inputs
 * note: the input IDs must be less than 1000;
 * The return value is an axios post query promises
 * @param {array} inputs - Input IDs
 * @param {string} prefix - The ID type of the inputs, e.g. hgnc
 * @returns - an axios post query promise
 */
    constructSingleAPIPromise(inputs, prefix) {
        let query = 'q={inputs}&scopes={scopes}&fields={fields}';
        if (_.isEmpty(inputs)) {
            return undefined;
        }
        inputs = Array.from(inputs).map(item => "'" + item + "'").join(',');
        let apimeta = meta.APIMETA[this.semantic];
        let fields = [];
        Object.values(apimeta['mapping']).map(item => {
            fields = [...fields, ...item.fields];
        });
        fields = fields.join(',');
        if (!(prefix in apimeta.id.mapping)) {
            return undefined;
        }
        let scopes = apimeta.id.mapping[prefix].join(',');
        query = query.replace('{inputs}', inputs).replace('{scopes}', scopes).replace('{fields}', fields);
        return axios({
            method: 'post',
            url: apimeta['url'],
            timeout: 10000,
            data: query,
            headers: { 'content-type': 'application/x-www-form-urlencoded' }
        })
    }

    /**
     * Generate an array of API call promises based on the input curies
     * each API call aims at fetching equivalent IDs for the inputs
     * @returns - An object, the "valid" field contains an array of API call promises, the "invalid" field contains ids which can not be transformed
     */
    generateAPIPromises() {
        this.groupIDs();
        let res = []
        for (let [prefix, ids] of Object.entries(this.grouped_ids)) {
            ids = Array.from(ids);
            // note: maximum length of inputs for BioThings APIs is 1000;
            let chunked_ids = _.chunk(ids, 1000);
            let axiosQuery;
            chunked_ids.map(chunk => {
                axiosQuery = this.constructSingleAPIPromise(chunk, prefix);
                res.push({
                    semanticType: this.semantic,
                    prefix: prefix,
                    promise: axiosQuery
                });
            })
        };
        return res;
    }

    dispatch() {
        let res = this.generateAPIPromises();
        //send maximum of 4 POST API queries at the same time;
        let chunked_promises = _.chunk(res, meta.MAX_CONCURRENT_QUERIES);
        chunked_promises.map((item, i) => {
            if (!(i in this.promises)) {
                this.promises[i] = [];
            };
            this.promises[i] = [...this.promises[i], ...item];
        })
        return this.promises;
    }
}