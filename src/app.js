require('dotenv').config();
const express = require('express');
// const { use } = require('express/lib/router');
const morgan = require('morgan');
const app = express();

const mongoose = require('mongoose');


//connection
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


//settings
app.set('port', process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
//permite utilizar json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', require('./routes/products'));




app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
})