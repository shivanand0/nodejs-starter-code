import mongoose from "mongoose";

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
})

export default mongoose.model("User", userSchema);