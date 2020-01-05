const express = require('express')
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
const app = express();

require('dotenv').config()

// View Engine
app.set('view engine', 'ejs');

// CORs
app.use(cors());

// Logger
app.use(morgan('dev'));

// Middleware
app.use(bodyParser.json());
app.use(expressValidator());

// Public Path
app.locals.publicpath = path.join(__dirname, 'public');
app.use(express.static(app.locals.publicpath));

// Routes
app.use('/', require('./routes'));

// Start Server
app.listen(process.env.SERVER_PORT, () => console.log(`Server is listening on port ${process.env.SERVER_PORT}!`));
