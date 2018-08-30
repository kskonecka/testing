const express = require('express');
const http = require('http');
const bodyBarser = require('body-parser');
const morgan = require('morgan'); //logging framework, for debugging

const app = express();
const router = require('./router')
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true })

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyBarser.json({ type: '*/*' }));
router(app)

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on', port);
