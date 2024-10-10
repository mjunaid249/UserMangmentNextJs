import mongoose from "mongoose";

const URI = process.env.URI;
export const connectDb = () => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      message: err.message;
    });
};
