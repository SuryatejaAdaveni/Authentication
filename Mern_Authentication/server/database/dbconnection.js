import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_AUTHENTICATION",
    })
    .then(() => {
      console.log("mongo Connected");
    })
    .catch((err) => {
      console.log(`failed to connect because ${err}`);
    });
};
