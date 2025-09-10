// import express from 'express';
import express from 'express';
import notesRoutes from './routes/notesRouts.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import RateLimiter from './middleware/rateLimiter.js';
import rateLimiter from './middleware/rateLimiter.js';

const PORT = process.env.PORT || 3000;
dotenv.config();

console.log(process.env.MONGO_URI);

// connectDB();

const app = express();
// Middleware to parse JSON

app.use(express.json());// this middleware will parse incoming JSON requests and put the parsed data in req.body
app.use(rateLimiter);

// app.use((req, res, next)=> {// custom middleware will run for every request before reaching the route handlers
//     console.log(`requested URL: ${req.url} - Method: ${req.method}`);
//     next(); 
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
    });
});


// mongodb+srv://devdark:devdarkSS@cluster0.hgjczpi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0