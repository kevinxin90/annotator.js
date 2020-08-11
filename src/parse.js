const config = require("./config");
const _ = require('lodash');
const jp = require("jsonpath");
const { method } = require("lodash");

module.exports = class {
    constructor(response, semanticType, prefix) {
        this.response = response;
        this.semanticType = semanticType;
        this.prefix = prefix;
    }

    parse() {
        let result = {}
        if (_.isEmpty(this.response.data)) return result;
        let mapping = config.APIMETA[this.semanticType]['mapping'];
        let curie;
        this.response.data.filter(rec => {
            if (_.isEmpty(rec) || 'notfound' in rec || _.difference(Object.keys(rec), ['query', "_score", "_id"]).length === 0) {
                return false
            };
            return true;
        }).map(rec => {
            if (config.CURIE.ALWAYS_PREFIXED.includes(this.prefix)) {
                curie = rec['query'];
            } else {
                curie = this.prefix + ':' + rec['query'];
            }
            if (!(curie in result)) {
                result[curie] = {};
            }
            for (let [mapped_field, fields] of Object.entries(mapping)) {
                for (let field of fields.fields) {
                    let path = "$." + field;
                    let tmp = [];
                    try {
                        tmp = jp.query(rec, path);
                    } catch (e) {
                        console.log(e)
                    }

                    if (tmp.length !== 0) {
                        result[curie][mapped_field] = tmp;
                        break;
                    }
                }
            }
        });
        return result;
    }
}