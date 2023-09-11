
const times = 100
const temperture_url = `https://www.data.qld.gov.au/api/3/action/datastore_search?resource_id=2bbef99e-9974-49b9-a316-57402b00609c&limit=${times}`
const ph_value = [8.2, 8.1]
// https://research-repository.griffith.edu.au/bitstream/handle/10072/349523/AnduttaPUB2463.pdf;jsessionid=270BC842CEAD19C7FDF1220BDF697C61?sequence=1#:~:text=ABSTRACT-,The%20coastal%20waters%20of%20the%20Great%20Barrier%20Reef%20(GBR)%20are,the%20coast%20preventing%20rapid%20flushing.
const salinity = [35.5, 35.6, 35.7, 35.8, 35.9, 36, 36.1, 36.2, 36.3, 36.4, 36.5]

module.exports = {ph_value, times, temperture_url, ph_value, salinity};