const src = require("./src");
const get_api = require("./api");


const all_SST = []
const data = get_api.getData(src.temperture_url);
data.then((record) => {
    console.log(record)
    for (let i = 0; i < 100; i++ ){
    let SST = record.result.records[i].SST;
    all_SST.push(SST);
    }
    console.log(all_SST);
})
