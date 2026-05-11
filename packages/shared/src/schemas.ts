import * as z from "zod";

export const MealTypeSchema = z.enum(["breakfast", "lunch", "dinner", "snack"]);
export type MealType = z.infer<typeof MealTypeSchema>;

interface Login {
  emailOrUsername: string;
  password: string;
}

const TodayDataSchema = z.object({
  goal: z.number().nonnegative(),
  calories: z.number().nonnegative(),
});

const weeklyDataSchema = z.array(
  z.object({
    day: z.string(), //
    calories: z.number().nonnegative(),
    maintenance: z.number().nonnegative(),
  }),
);

// this will only have data of today or fetch data from according to date and show the breakdown of calories consumed in breakfast, lunch, dinner and snacks
const BreakdownDataSchema = z.object({
  calories: z.number().nonnegative(),
  meal: MealTypeSchema,
  date: z.string(), // YYYY-MM-DD
});

type BreakdownDataType = z.infer<typeof BreakdownDataSchema>;

type WeeklyDataType = z.infer<typeof weeklyDataSchema>;
type TodayDataType = z.infer<typeof TodayDataSchema>;

export const FoodSchema = z.object({
  id: z.string(),
  name: z.string(),
  caloriesPer100g: z.number().nonnegative(),
  proteinPer100g: z.number().nonnegative(),
  carbsPer100g: z.number().nonnegative(),
  fatPer100g: z.number().nonnegative(),
  source: z.enum(["custom", "openfoodfacts", "usda"]).default("custom"),
});
export type Food = z.infer<typeof FoodSchema>;

export const LogEntrySchema = z.object({
  id: z.string(),
  date: z.string(), // YYYY-MM-DD
  meal: MealTypeSchema,
  foodId: z.string(),
  grams: z.number().positive(),
});
export type LogEntry = z.infer<typeof LogEntrySchema>;

export {
  Login,
  TodayDataType,
  TodayDataSchema,
  weeklyDataSchema,
  WeeklyDataType,
  BreakdownDataType,
  BreakdownDataSchema,
};
