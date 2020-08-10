const meta = require("./config");

module.exports = class {
    constructor(semantic, ids) {
        this.semantic = semantic;
        this.rank = meta.APIMETA[semantic].id.rank;
        this.ids = ids;
        this.mapping = {};
    }

    groupIDs() {
        this.grouped_ids = {};
        Object.values(this.ids).map(rec => {
            for (let prefix of this.rank) {
                if (prefix in rec.db_ids) {
                    if (!(prefix in this.grouped_ids)) {
                        this.grouped_ids[prefix] = [];
                    }
                    this.grouped_ids[prefix].push(rec.db_ids[prefix][0]);
                    this.mapping[rec.id.identifier] = rec.db_ids[prefix][0];
                    break;
                }
            }
        })
    }
}