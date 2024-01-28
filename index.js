const express =  require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./db.js');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

const emailRoutes = require('./routes/email.js')

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors({
    origin: process.env.FRONTEND_DOMAIN
}))

app.use('/api/v1/email', emailRoutes);

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.rvp9uqw.mongodb.net`
connectDB(uri);

app.get('/', (req, res) => {
    res.json({"message": "This is techingivo backend API 1.0.0"})
})


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("App is connected at "+port);
})