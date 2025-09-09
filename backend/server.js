// import express from 'express';
const express = require('express');
const app = express();

app.get('/api/notes', (req, res) => {
    res.status(200).send('response 1 from backend');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})
