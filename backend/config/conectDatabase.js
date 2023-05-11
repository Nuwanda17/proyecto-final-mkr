import mongoose from "mongoose";

export const conectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI, {});
    const url = `${connection.host}:${connection.port}`;
    console.log(`Database connected at ${url}`);
  } catch (error) {
    console.log(error);
  }
};
