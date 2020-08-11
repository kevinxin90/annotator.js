const dispatch = require("./dispatch");
const execute = require("./execute");

module.exports = async (semantic, ids) => {
    let result = {};
    let dp = new dispatch(semantic, ids);
    dp.dispatch();
    const res = await execute(Object.values(dp.promises));
    return res;
}
