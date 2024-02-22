//Using express

import express from 'express';
import path from 'path';

const port = process.env.port || 3000;
const app = express();

//this is a response to a get request
app.get('/', (req,res) => {
    app.use('/',express.static(path.join('home.html','reaction')))
    //display static objects, express.static('directory_name')
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});
