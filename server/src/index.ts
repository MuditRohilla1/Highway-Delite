import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import noteRoutes from "./routes/noteRoutes";
import userRoutes from "./routes/userRoutes"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/user", userRoutes)

mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
        app.listen(5000, () => console.log("Server running on http://localhost:5000"));
    })
    .catch((err) => console.error("DB Error", err));
