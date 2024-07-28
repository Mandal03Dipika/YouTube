import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
// import userRoutes from "./routes/user/userRoutes.js";
import routes from "./routes/user.js";

const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json());

const port = process.env.PORT;
const DB_URL = process.env.CONNECTION_URL;
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Db connected");
    app.listen(port, () => {
      console.log(`Server running on PORT ${port}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/user", routes);
