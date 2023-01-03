const express = require('express');
const app = express();
const path = require('path');

//setup static and middleware
app.use(express.static('../public'))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'../navbar-app/index.html'))
})

//error management
app.all('*',(req, res) => {
    res.status(404).send('Not Found')
})

app.listen(5000,() => {
    console.log('Server is listening on port 5000...')
})




