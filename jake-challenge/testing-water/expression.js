//Using express

import express from 'express';
import path from 'path';

const port = process.env.port || 3001;
const app = express();

//this is a response to a get request
app.get('/', (req,res) => {
    app.use('/home',express.static(path.join('app.js','reaction')))
    //display static objects, express.static('directory_name')
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});
