//Using express

import express from 'node:express';

const port = process.env.port || 3001;
const app = express();

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});
