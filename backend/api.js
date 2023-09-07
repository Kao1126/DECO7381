const fetch = require("node-fetch");

async function getData(url){
    try{
      const res = await fetch(url)
      const data = await res.json();
      return data
  
    }catch(e){
      console.log("error!", e)
  
    }
  }
  

module.exports = {getData};