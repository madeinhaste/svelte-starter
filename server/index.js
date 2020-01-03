const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');
const bodyparser = require('body-parser');

const PORT = 8000;
const static_root = './public';

const app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());
//app.use(bodyparser.urlencoded({extended: true});

app.use(express.static(static_root, {extensions: ['html']}));
app.use('/api', require('./api'));

app.listen(PORT, function() {
    debug(`listening on port ${PORT}`);
});
