import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/mongodb";

// App config
const PORT = process.env.PORT || 4000;
const app = express();

connectDB();

// Initialize middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API Routes
app.get("/api/test", (req: Request, res: Response) => {
	res.json({
		message: "API Test responded OK!",
		success: true,
	});
});

app.listen(PORT, () => {
	console.log(`App started on http://localhost:${PORT}`);
});
