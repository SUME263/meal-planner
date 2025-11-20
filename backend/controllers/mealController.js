import Meal from "../models/Meal.js";

export const getMeals = async (req, res) => {
  const meals = await Meal.find();
  res.json(meals);
};

export const addMeal = async (req, res) => {
  const meal = await Meal.create(req.body);
  res.json(meal);
};

export const updateMeal = async (req, res) => {
  const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(meal);
};

export const deleteMeal = async (req, res) => {
  await Meal.findByIdAndDelete(req.params.id);
  res.json({ message: "Meal removed" });
};
