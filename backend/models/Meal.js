import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  day: { type: String, required: true },
  calories: Number
});

export default mongoose.model("Meal", mealSchema);
