const config = require("./config");
const _ = require('lodash');
const jp = require("jsonpath");

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
            if (_.isEmpty(rec) || 'notfound' in rec) {
                return false
            };
            return true;
        }).map(rec => {
            curie = this.prefix + ':' + rec['query'];
            result[curie] = {};
            for (let [mapped_field, fields] of Object.entries(mapping)) {
                for (let field of fields.fields) {
                    let path = "$." + field;
                    let tmp = jp.query(rec, path);
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