"use client";
import { BreakdownDataType, MEAL_COLORS } from "@calorietracker/shared";
import { Cell, Pie, PieChart } from "recharts";
import ChartCard from "@/components/dashboard/chart_card";
import { cn } from "@/lib/utils";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Loader from "../ui/loader";
import { CardContent } from "../ui/card";

function Breakdown({
  data,
  className,
}: {
  data?: BreakdownDataType[];
  className?: string;
}) {
  const chartConfig = {
    meal: {
      label: "meal",
      color: "var(--chart-1)",
    },
    calories: {
      label: "calories",
      color: "var(--chart-2)",
    },
    date: {
      label: "date",
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig;

  if (!data) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <ChartCard
        title="Breakdown"
        description="Today's Calorie Breakdown"
        className={cn("", className)}
        footer={
          <div className="flex gap-2 leading-none font-medium">
            <div className="text-muted-foreground">
              Total: {data.reduce((sum, d) => sum + d.calories, 0)} kcal
            </div>
          </div>
        }>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-62.5">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie data={data} dataKey="calories" nameKey="meal" stroke="0">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={MEAL_COLORS[entry.meal] || "var(--chart-1)"}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </ChartCard>
    </>
  );
}
export default Breakdown;
