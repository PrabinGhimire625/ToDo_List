import express from "express";
import dotenv from "dotenv";
import router from "./routes/ToDoRoutes.js";
import sequelize from "./database/sequelize.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Default port if PORT is not set in .env

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", router);

sequelize
  .sync() // Create tables if they don't exist
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing sequelize:", error);
  });
