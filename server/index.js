//dependencies
"use strict";
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");



//handlers
const { getAppointments } = require("./handlers/GetAppointments");
const { createNewAppointment } = require("./handlers/CreateNewAppointment");
const { createAgent } = require("./handlers/CreateAgent");
const { createNewCustomer } = require("./handlers/CreateNewCustomer");
// const { register } = require("./handlers/register");
// const { login } = require("./handlers/login");


express()

    .use(express.json())
    .use(morgan("tiny"))
    .use(helmet())
    .use(cors())

    //endpoints
    .get('/appointments', getAppointments)    
    .post('/appointments', createNewAppointment)
    .post('/agents', createAgent)
    .post('/customers', createNewCustomer)
//     .post('/contact', sendEmail)
//     // user - register
//      .post("/register", register)
//   // user - login
//      .post("/login", login)
    
 
    // Node spins up our server and sets it to listen on port 8000.
.listen(8000, () => console.info(`Listening on port 8000`));