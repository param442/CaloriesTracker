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

const date = new Date();
const LogFood = () => {
  const [dataDetails, setDateDetails] = useState(() => ({
    Day: "Today,",
    date: date,
  }));

  const updateDataDetails = (date: Date | undefined) => {
    if (!date) return;

    setDateDetails({
      Day: "",
      date,
    });
  };

  return (
    <>
      <div className="min-h-full ">
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
        <div className="flex h-full  flex-col   p-10">
          <section className="  h-[30%]">
            <h1>Breakfast</h1>

            <hr className="w-full border-0 h-px bg-gray-800" />
            <Button variant="link" className="ml-4 cursor-pointer mt-4">
              Add Food to Breakfast
            </Button>
          </section>
          <section>
            <h1>Lunch</h1>
            <hr className="w-full border-0 h-px bg-gray-800" />
            <Button variant="link" className="ml-4 cursor-pointer mt-4">
              Add Food to Lunch
            </Button>
          </section>
          <section>
            <h1>Dinner</h1>
            <hr className="w-full border-0 h-px bg-gray-800" />
            <Button variant="link" className="ml-4 cursor-pointer mt-4">
              Add Food to Dinner
            </Button>
          </section>
          <section>
            <h1>Snacks</h1>
            <hr className="w-full border-0 h-px bg-gray-800" />
            <Button variant="link" className="ml-4 cursor-pointer mt-4">
              Add Food to Snacks
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default LogFood;
