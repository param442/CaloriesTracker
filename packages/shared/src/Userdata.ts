import { WeeklyDataType, BreakdownDataType, TodayDataType } from "./schemas";

const weeklyData: WeeklyDataType = [
  { day: "Monday", calories: 1800, maintenance: 2200 },
  { day: "Tuesday", calories: 2000, maintenance: 2200 },
  { day: "Wednesday", calories: 1900, maintenance: 2200 },
  { day: "Thursday", calories: 2100, maintenance: 2200 },
  { day: "Friday", calories: 1700, maintenance: 2200 },
  { day: "Saturday", calories: 2300, maintenance: 2200 },
  { day: "Sunday", calories: 2000, maintenance: 2200 },
];
const MEAL_COLORS: Record<string, string> = {
  breakfast: "#facc15", // yellow
  lunch: "#22c55e", // green
  dinner: "#3b82f6", // blue
  snacks: "#ef4444", // red
};
const todayData: TodayDataType = {
  goal: 2000,
  calories: 1500,
};

const BreakdownData: BreakdownDataType[] = [
  {
    meal: "breakfast",
    calories: 500,
    date: "2024-06-01",
  },
  {
    meal: "lunch",
    calories: 700,
    date: "2024-06-01",
  },
  {
    meal: "dinner",
    calories: 300,
    date: "2024-06-01",
  },
];

export { todayData };
export { weeklyData };
export { BreakdownData };
export { MEAL_COLORS };
