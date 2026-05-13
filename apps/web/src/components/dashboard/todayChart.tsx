"use client";

import ChartCard from "@/components/dashboard/chart_card";
import { RadialBarChart, RadialBar, PolarRadiusAxis, Label } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { CardContent } from "../ui/card";
import { TodayDataType } from "@calorietracker/shared";
import Loader from "../ui/loader";
import { cn } from "@/lib/utils";

function TodayChart({
  data,
  className,
}: {
  data?: TodayDataType;
  className?: string;
}) {
  if (!data) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const chartConfig = {
    consumed: { label: "Consumed", color: "var(--chart-2)" },
    remaining: { label: "Remaining", color: "var(--chart-1)" },
  } satisfies ChartConfig;
  const goal = data.goal;
  const consumed = data.calories;

  const remaining = Math.max(goal - consumed, 0);
  const leftoverCalories = goal - consumed;

  const chartData = [{ consumed, remaining, goal }];

  return (
    <ChartCard
      title="Calorie Intake"
      description="Today's Calorie Intake"
      className={cn("", className)}
      footer={
        <div className="flex gap-2  leading-none font-medium">
          <div className="text-muted-foreground">Goal: {goal} kcal</div>
          <div className="text-muted-foreground">Consumed: {consumed} kcal</div>
        </div>
      }>
      {" "}
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-55 sm:max-w-65 lg:max-w-75">
          <RadialBarChart
            data={chartData}
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={100}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox))
                    return null;
                  const cx = viewBox.cx;
                  const cy = viewBox.cy;

                  const over = leftoverCalories < 0;

                  return (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle">
                      <tspan
                        x={cx}
                        className="fill-foreground text-2xl font-bold">
                        {over
                          ? `${Math.abs(leftoverCalories)} over`
                          : `${leftoverCalories} left`}
                      </tspan>
                      <tspan
                        x={cx}
                        dy="22"
                        className="fill-muted-foreground text-sm">
                        kcal
                      </tspan>
                      <tspan
                        x={cx}
                        dy="18"
                        className="fill-muted-foreground text-xs">
                        {consumed} / {goal}
                      </tspan>
                    </text>
                  );
                }}
              />
            </PolarRadiusAxis>

            {/* IMPORTANT: stack consumed + remaining (not goal + calories) */}
            <RadialBar
              dataKey="consumed"
              stackId="a"
              cornerRadius={6}
              fill="var(--color-consumed)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="remaining"
              stackId="a"
              cornerRadius={6}
              fill="var(--color-remaining)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </ChartCard>
  );
}

export default TodayChart;
