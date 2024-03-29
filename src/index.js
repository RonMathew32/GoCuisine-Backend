import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("Server is running on port: ", process.env.PORT || 4000);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection FAILED: ", err);
    process.exit(1);
  });