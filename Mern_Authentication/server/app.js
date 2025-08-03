import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connection } from "./database/dbconnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import { removeUnverifiedAccounts } from "./automation/removeUnverifiedAccounts.js";

const app = express();
config({ path: "./config.env" });
const allowedOrigins = [
  "https://mern-authenticaction-frontend.onrender.com",
  "http://localhost:5000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log("Incoming origin:", origin);
      // allow requests with no origin (like Postman or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

removeUnverifiedAccounts();
connection();

app.use(errorMiddleware);
export default app;
