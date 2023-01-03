const { application, json } = require('express');
const express = require('express');
const app = express();
const { products } = require('./data')

//req => imddleware => res




app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})



