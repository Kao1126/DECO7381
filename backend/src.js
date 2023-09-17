const api = require("./api");

const times = 100
const temperture_url = `https://www.data.qld.gov.au/api/3/action/datastore_search?resource_id=2bbef99e-9974-49b9-a316-57402b00609c&limit=${times}`
const reef_data_path = "./data/reef.json"
const reef_bleaching_data_path = "./data/reef_bleaching.json"
const ph_value = [8.2, 8.1]

// https://research-repository.griffith.edu.au/bitstream/handle/10072/349523/AnduttaPUB2463.pdf;jsessionid=270BC842CEAD19C7FDF1220BDF697C61?sequence=1#:~:text=ABSTRACT-,The%20coastal%20waters%20of%20the%20Great%20Barrier%20Reef%20(GBR)%20are,the%20coast%20preventing%20rapid%20flushing.
const salinity = [35.5, 35.6, 35.7, 35.8, 35.9, 36, 36.1, 36.2, 36.3, 36.4, 36.5]
const all_reef = api.getData_file(reef_data_path)
const reef_bleaching = api.getData_file(reef_bleaching_data_path)

const all_SST = []
let data = api.getData_url(temperture_url);
data.then((record) => {
    for (let i = 0; i < 100; i++ ){
    let SST = record.result.records[i].SST;
    all_SST.push(SST);
    }
})



module.exports = {ph_value, times, temperture_url, ph_value, salinity, all_reef, all_SST, reef_bleaching};