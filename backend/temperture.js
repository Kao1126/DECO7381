const src = require("./src");
const get_api = require("./api");


const all_SST = []
const data = get_api.getData(src.temperture_url);
data.then((record) => {
    for (let i = 0; i < 100; i++ ){
    let SST = record.result.records[i].SST;
    all_SST.push(SST);
    }
})

module.exports = {all_SST};