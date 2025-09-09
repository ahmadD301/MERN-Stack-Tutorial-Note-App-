// import express from 'express';
const express = require('express');
const notesRoutes = require('./routes/notesRouts');
const { connectDB } = require('./config/db');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000;
dotenv.config();

console.log(process.env.MONGO_URI);

connectDB();
const app = express();
// Middleware to parse JSON
app.use(express.json());
app.use("/api/notes", notesRoutes);


app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
})

// mongodb+srv://devdark:devdarkSS@cluster0.hgjczpi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0