//Using express

<<<<<<< HEAD
import express from 'express';
import path from 'path';
=======
import express from 'node:express';
>>>>>>> parent of aa6f227 (hello express)

const port = process.env.port || 3001;
const app = express();

<<<<<<< HEAD
//this is a response to a get request
app.get('/', (req,res) => {
    app.use(express.static('reaction'))
    //display static objects, express.static('directory_name')
});

=======
>>>>>>> parent of aa6f227 (hello express)
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});
