"use client";
import { Button } from "@/components/ui/button";
import { todayData } from "@calorie-tracker/shared";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";

import NutritionLog from "@/components/dashboard/NutritionLog";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const LogFood = () => {
  const [dataDetails, setDateDetails] = useState({
    Day: "Today,",
    date: new Date(),
  });

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
        <div className="flex p-10 w-screen justify-between items-center">
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
        <div className="flex items-center justify-between p-10">
          <Field>
            <FieldLabel htmlFor="input-field-username">Search Food</FieldLabel>
            <Input
              id="input-field-username"
              type="text"
              placeholder="Enter food name"
            />
          </Field>
        </div>
      </div>
    </>
  );
};

export default LogFood;
