const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');


app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));



app.use(require('./routes/index')) //router



app.listen(app.get('port'), ()=>{
    console.log(`listening on port ${app.get('port')}`);
})