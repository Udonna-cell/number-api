"use strict";
let express = require("express");
let app = express();

app.get('/',(req, res)=>{
  res.json({message: "welcome"})
})
let server = app.listen(8080, () => {
    console.log('localhost:8080');
});
