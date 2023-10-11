const fetch = require("node-fetch");
const fs = require('fs');

async function getData_url(url){
    try{
      const res = await fetch(url)
      const data = await res.json();
      return data
  
    }catch(e){
      console.log("error!", e)
  
    }
  }

function getData_file(path){
  let jsonData = fs.readFileSync(path);
  let data = JSON.parse(jsonData);
  return data;
}
  

module.exports = {getData_url, getData_file};