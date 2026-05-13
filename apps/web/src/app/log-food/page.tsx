"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";

import NutritionLog from "@/components/dashboard/NutritionLog";
import { Input } from "@/components/ui/input";
import { Minimize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const date = new Date();
const LogFood = () => {
  const [dataDetails, setDateDetails] = useState(() => ({
    Day: "Today,",
    date: date,
  }));
  const [addFoodModalOpen, setAddFoodModalOpen] = useState<{
    open: boolean;
    mealType: string;
  }>({
    open: false,
    mealType: "",
  });

  const updateDataDetails = (date: Date | undefined) => {
    if (!date) return;

    setDateDetails({
      Day: "",
      date,
    });
  };

  const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  return (
    <>
      <div className="min-h-full">
        <div className="flex p-10 w-full justify-between items-center">
          <span className=" ">
            <h1 className="text-2xl font-bold">Log Food</h1>
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-4 cursor-pointer">
                {`${dataDetails.Day} ${dataDetails.date.toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                  },
                )} `}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Calendar
                mode="single"
                selected={dataDetails.date}
                onSelect={updateDataDetails}
                disabled={(date) => date > new Date()}
                className="rounded-lg border"
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <NutritionLog />
        <div className="flex h-full mb-3  flex-col   p-10">
          {meals.map((meal) => (
            <section key={meal}>
              <h1>{meal}</h1>
              <hr className="w-full border-0 h-px bg-gray-800" />
              <Button
                variant="link"
                onClick={() =>
                  setAddFoodModalOpen({ open: true, mealType: meal })
                }
                className="ml-4 cursor-pointer mt-4">
                Add Food to {meal}
              </Button>
            </section>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {addFoodModalOpen.open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center bg-black/50">
              <motion.div
                initial={{ scale: 0.7, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.7, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gray-200 rounded-xl w-1/2 h-[70%]">
                <section className="p-10 flex items-center justify-center">
                  <Input
                    placeholder="Search for food"
                    className="w-full bg-white"
                  />

                  <Button
                    variant="close"
                    onClick={() =>
                      setAddFoodModalOpen({ open: false, mealType: "" })
                    }
                    className="ml-4 cursor-pointer">
                    <Minimize />
                  </Button>
                </section>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LogFood;
