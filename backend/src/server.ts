import jobRoutes from "./routes/jobRoutes";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import candidateRoutes from "./routes/candidateRoutes";
import recruiterRoutes from "./routes/recruiterRoutes";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("ShiftWise API is running!");
});

app.use("/api/users", userRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/recruiters", recruiterRoutes);
app.use("/api/jobs", jobRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

