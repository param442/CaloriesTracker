"use client";
import { JSX, useState, useMemo } from "react";
import { Button } from "../ui/button";
import { todayData, weeklyData, BreakdownData } from "@calorietracker/shared";
import TodayChart from "./todayChart";
import WeekChart from "./weekChart";
import Breakdown from "./breakdown_chart";
import GridComponents from "./gridComponents";
import NutritionCard from "./NutritionCard";
import NutritionLog from "./NutritionLog";

type view = "today" | "week" | "breakdown";

const views: Record<view, { label: string; render: () => JSX.Element }> = {
  today: { label: "Today", render: () => <TodayChart data={todayData} /> },
  week: { label: "Week", render: () => <WeekChart chartData={weeklyData} /> },
  breakdown: {
    label: "Breakdown",
    render: () => <Breakdown data={BreakdownData} />,
  },
};

export default function Dashboard() {
  const [view, setView] = useState<view>("today");

  // Memoize chart rendering for performance
  const currentViewComponent = useMemo(() => views[view].render(), [view]);

  return (
    <>
      <div className="flex h-full w-full flex-col items-center gap-4 py-6 sm:gap-6">
        <div className="flex w-full items-stretch px-4 rounded-lg">
          {currentViewComponent}
        </div>
        <span className="flex w-full items-center justify-center gap-2 sm:w-auto ">
          <Button
            onClick={() => {
              setView("week");
            }}
            variant={`${view == "week" ? "default" : "secondary"}`}>
            Week chart
          </Button>
          <Button
            onClick={() => {
              setView("today");
            }}
            variant={`${view == "today" ? "default" : "secondary"}`}>
            Today chart
          </Button>

          <Button
            onClick={() => {
              setView("breakdown");
            }}
            variant={`${view == "breakdown" ? "default" : "secondary"}`}>
            Breakdown
          </Button>
        </span>

        {/**Nutrition */}
        <div className="w-full px-4 grid gap-4">
          {/* Nutrition - full width */}
          <NutritionLog />

          {/* Insights - new row, full width */}
          <GridComponents title="Insights and Analytics">
            <NutritionCard
              label="Expenditure"
              value="1200"
              goal="1500"
              type="Insight"
            />
            <NutritionCard label="Weight" value="98" goal="80" type="Insight" />
          </GridComponents>
        </div>
      </div>
    </>
  );
}
