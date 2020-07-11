const express = require('express');
const app = express();
app.get('', (req, res) => {
    res.send('hello express');
})

app.get('/help', (req,res) => {
    res.send('Help Area')
})

app.listen(3000,()=> {
    console.log('server running on 3000');
})