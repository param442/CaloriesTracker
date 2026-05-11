"use client";

import ChartCard from "@/components/dashboard/chart_card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { cn } from "@/lib/utils";
import { WeeklyDataType } from "@calorie-tracker/shared";
import Loader from "../ui/loader";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { CardContent } from "../ui/card";

function WeekChart({
  chartData,
  className,
}: {
  chartData?: WeeklyDataType;
  className?: string | null;
}) {
  if (!chartData) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const chartConfig = {
    calories: {
      label: "calories",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  const weekCalories = chartData.reduce((sum, d) => sum + d.calories, 0);
  const weekMaintenance = chartData.reduce((sum, d) => sum + d.maintenance, 0);

  const avgCalories = weekCalories / chartData.length;
  const avgMaintenance = weekMaintenance / chartData.length;

  const weekDelta = weekCalories - weekMaintenance; // +over, -under
  const absWeekDelta = Math.abs(Math.round(weekDelta));

  return (
    <>
      <ChartCard
        title="Weekly Calories"
        description="Last 7 days"
        className={cn("w-full ", className)}
        footer={
          <>
            <div className="font-medium">
              Avg Calories {Math.round(avgCalories)} kcal/day
            </div>
            <div className="text-muted-foreground">
              Avg Maintenance {Math.round(avgMaintenance)} kcal/day
            </div>
            <div>
              {weekDelta < 0 ? (
                <span className="text-green-500">
                  {absWeekDelta} kcal under
                </span>
              ) : (
                <span className="text-rose-500">{absWeekDelta} kcal over</span>
              )}
            </div>
          </>
        }>
        <CardContent className=" w-full  ">
          <div className=" w-full  flex items-center justify-center">
            <ChartContainer
              config={chartConfig}
              className="h-64 sm:w-[50%] sm:mr-0  w-full mr-6">
              <BarChart
                data={chartData}
                barCategoryGap={"1%"}
                barGap={2}
                margin={{
                  left: 12,
                  right: 12,
                }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={8}
                  axisLine={false}
                  interval={0}
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  domain={[0, "dataMax + 50"]}
                  tickLine={false}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="calories"
                  barSize={45}
                  fill="var(--color-calories)"
                  radius={0}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </ChartCard>
    </>
  );
}

export default WeekChart;
