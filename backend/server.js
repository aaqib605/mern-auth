import express from "express";
import "dotenv/config";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
