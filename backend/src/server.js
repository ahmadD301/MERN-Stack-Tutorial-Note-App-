// import express from 'express';
import express from 'express';
import notesRoutes from './routes/notesRouts.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

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