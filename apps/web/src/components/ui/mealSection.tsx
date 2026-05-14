"use client";

import { useState } from "react";
import { FoodLogItem } from "./foodLogitem";

interface FoodEntry {
  id: number;
  name: string;
  serving: string;
  weight: string;
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

const INITIAL_ITEMS: FoodEntry[] = [
  {
    id: 1,
    name: "Scrambled eggs (3 large)",
    serving: "1 serving",
    weight: "210 g",
    calories: 270,
    protein: "18g",
    carbs: "2g",
    fat: "14g",
  },
  {
    id: 2,
    name: "Whole wheat toast",
    serving: "2 slices",
    weight: "60 g",
    calories: 160,
    protein: "6g",
    carbs: "26g",
    fat: "2g",
  },
  {
    id: 3,
    name: "Black coffee",
    serving: "1 cup",
    weight: "240 ml",
    calories: 5,
    protein: "0g",
    carbs: "0g",
    fat: "0g",
  },
];

interface MealSectionProps {
  label?: string;
  initialItems?: FoodEntry[];
  onAddFood?: () => void;
}

export const MealSection = ({
  label = "Breakfast",
  initialItems = INITIAL_ITEMS,
  onAddFood,
}: MealSectionProps) => {
  const [items, setItems] = useState<FoodEntry[]>(initialItems);

  const totalCals = items.reduce((sum, item) => sum + item.calories, 0);

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="flex  flex-col mb-4">
        {items.map((item) => (
          <FoodLogItem
            key={item.id}
            {...item}
            onRemove={() => removeItem(item.id)}
          />
        ))}
      </div>
    </>
  );
};
