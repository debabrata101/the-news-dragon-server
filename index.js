const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const catagoris = require('./data/catagoris.json')

app.get('/', (req , res) =>{
    res.send('Dragon is runing..')
});
app.use(cors());

app.get('/catagoris', (req , res) =>{
    res.send(catagoris)
});

app.listen(port, () =>{
    console.log(`dragon is runing on port ${port}`)
})
