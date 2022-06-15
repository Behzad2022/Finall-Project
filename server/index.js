//dependencies
"use strict";
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const nodemailer = require("nodemailer");


require("dotenv").config();
const { GMAIL_PWD } = process.env


// //port definition
// const PORT = 8000;

//handlers
const { getAppointments } = require("./handlers/GetAppointments");
const { createNewAppointment } = require("./handlers/CreateNewAppointment");
const { createAgent } = require("./handlers/CreateAgent");
const { createNewCustomer } = require("./handlers/CreateNewCustomer");
const { sendEmail } = require("./handlers/SendEmail")
// const { register } = require("./handlers/register");
// const { login } = require("./handlers/login");

//create nodemailer transporter using gmail service
//e-mail functionality built with the help of this source:
//https://w3collective.com/react-contact-form/

contactEmail = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: "test@gmail.com",
        pass: GMAIL_PWD,
    },
}),

// //verify transporter connectivity
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("ready to send");
    }
});

// server
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
    .post('/contact', sendEmail)
    // user - register
  // .post("/register", register)
  // user - login
  // .post("/login", login)
    
  
    // Node spins up our server and sets it to listen on port 8000.
.listen(8000, () => console.info(`Listening on port 8000`));