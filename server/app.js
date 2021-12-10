const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn');
app.use(express.json());

const port = process.env.PORT;

app.use(require('./router/form'));

// //middleware
// const middleware = (req,res, next) => {
//     console.log('i am middleware.');
//     next();
// }


app.get('/', (req, res) => {
    res.send("i am from server.");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})