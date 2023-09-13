const express = require('express');
const src = require('./src');
const temp = require('./temperture');

const app = express();
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend"));
app.use(express.static('../frontend'))

app.get('/index', (req, res) => {
  res.render('index.ejs');
})


app.get('/explore', (req, res) => {
  res.render('explore.ejs');
})

app.get('/data_visual', (req, res) => {
  var temps = temp.all_SST;
  var rand = Math.floor(Math.random() * src.times);
  var rand_sal = Math.floor(Math.random() * src.salinity.length)
  var ph_index = rand%2;
  
  res.render('data_visual.ejs', {temp: temps[rand], ph: src.ph_value[ph_index], salinity: src.salinity[rand_sal]});
})

app.get('/interaction', (req, res) => {
  res.render('interaction.ejs');
})


app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
  });
  
  