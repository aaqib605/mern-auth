import express from "express";
import "dotenv/config";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 8000;
const app = express();

connectDB();

app.get("/", (req, res) => res.send("Running"));

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
