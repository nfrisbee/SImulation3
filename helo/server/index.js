const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config({path: '../.env'}); 


let {
    DATABASE_CONNECTION
} = process.env;

massive(DATABASE_CONNECTION, {scripts: '../db'}).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Connected!')
}).catch(error => {
    console.log(DATABASE_CONNECTION)
    console.log('Db not connected:', error);
});


//Listening to port 5000
app.listen(5000, function (){
    console.log('Listening on port 5000');
});