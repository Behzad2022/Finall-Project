const express = require('express');
const app = express();

app.get('/', (req, res)=>{
   res.send('Hello');
})

server = app.listen(8000);