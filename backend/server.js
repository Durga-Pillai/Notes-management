import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import authRoutes from "./routes/auth.js"
import NoteRoutes from "./routes/noteRoute.js"

import dotenv from"dotenv"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/note',NoteRoutes)


mongoose.connect(process.env.MONGODB_URI,)
.then(()=>{
    console.log('Database connected');

    app.listen(PORT ,()=>{
         console.log(`server running on ${PORT} `);
})
})
.catch((err) => {
    console.log('Database not connected:',err.message);
})
