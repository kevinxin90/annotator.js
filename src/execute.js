const parse = require("./parse");

/**
 * Execute an array of promises sequentially
 * @param {array} promisesArray - an array of promises to be executed sequentially
 * @param {object} mapping - mapping between CURIE and its semantic type
 */
module.exports = async (promisesArray) => {
    let result = {};
    for (let promises of promisesArray) {
        let res = await Promise.allSettled(promises.map(item => {
            return item.promise
                .then(response => {
                    let parser = new parse(response, item.semanticType, item.prefix);
                    let res = parser.parse();
                    return res;
                })
        }));
        res.map(item => {
            if (item.status === "fulfilled") {
                result = { ...result, ...item.value }
            }
        })
    }
    return result;
}