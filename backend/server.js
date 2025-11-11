require ('dotenv').config()
const express = require('express');
const cors = require('cors');
const { clerkMiddleware } = require('@clerk/express');
const { connect } = require('mongoose');


const app = express()
const PORT = process.env.PORT || 5000;



// Test route
app.get("/", (req, res) => {
  res.send("Welcome to EmpowerHub Backend!");
});



app.use(clerkMiddleware());

// Server listening
app.listen(PORT, async () => {
    await connectDB();
  console.log(`Server running on http://localhost:${PORT}`)
})