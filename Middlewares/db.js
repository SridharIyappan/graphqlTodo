import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.LOCAL_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return console.log("DB Connected Successfully");
  } catch (error) {
    return res.json({ success: false, msg: "Db connect error", error });
  }
};
export default connectDb;
