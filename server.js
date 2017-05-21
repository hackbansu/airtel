/**
 * Created by hackbansu on 20/5/17.
 */

const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    // res.send('shopping');
    res.send('restaurant');
    // res.send('pharmacy');
})

app.listen(3000, function () {
    console.log("server successfully started at 3000");
})