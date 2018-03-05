/******************************************************
* PLEASE DO NOT EDIT THIS FILE
* the verification process may break
* ***************************************************/

'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.get('/',(request,response)=>{

  response.send("test",request.query.id);

});

app.listen(process.env.PORT, function (err,data) {
  if (err){
    throw err
  }
 console.log('Node.js listening on  ... ',process.env.PORT);
});
