import express from "express";
import morgan from "morgan";
import cors from "cors";

//Import routes here
import userRoutes from "./routes/user.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Use routes here
app.use(userRoutes);


export default app;
