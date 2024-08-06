import express from "express";
import bodyParser from "body-parser";
import tokenRoutes from "./routes/tokenRoutes";

const app = express();

app.use(bodyParser.json());
app.use("/api", tokenRoutes);

export default app;
