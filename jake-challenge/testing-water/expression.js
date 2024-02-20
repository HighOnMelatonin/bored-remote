//Using express

import express from 'express';

const port = process.env.port || 3001;
const app = express();

app.get('/', (req,res) => {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});
