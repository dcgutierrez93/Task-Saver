// Dependencies
// =============================================================================
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));


// Setup mysql connection
// =============================================================================
const mysql = require('mysql');
