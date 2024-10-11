import express from "express";
import dotenv from 'dotenv';
import conn from './conn/conn.js';
import auth from './routes/auth.routes.js'
import list from './routes/list.routes.js'
import cors from 'cors'
import path from 'path';
// import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

conn();

const app = express();
app.use(cors());
app.use(express.json())
app.use("/api/v1",auth);
app.use("/api/v2",list);

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "todo-frontend", "build")));
    res.sendFile(path.resolve(__dirname, "todo-frontend", "build", "index.html"));
  });
app.listen(1000, () => {
    console.log("Server Started");

});