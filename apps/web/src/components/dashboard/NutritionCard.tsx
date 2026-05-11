import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import Link from "next/link";

type NutritionCardProps = {
  label: string;
  value: string;
  goal: string;
  type: "Nutrition" | "Weight" | "Activity" | "Insight";
};

function NutritionProgress({ value }: { value: number }) {
  return <Progress value={value} />;
}

export default function NutritionCard({
  label,
  value,
  goal,
  type,
}: NutritionCardProps) {
  const percentage = (Number(value) / Number(goal)) * 100;

  const redirectPath: Record<string, string> = {
    Calories: "/nutrition/calories",
    Proteins: "/nutrition/proteins",
    Carbs: "/nutrition/carbs",
    Fats: "/nutrition/fats",
    Weight: "/insight/weight",
    Expenditure: "/insight/expenditure",
  };

  const path = redirectPath[label];

  return (
    // If there’s a path, wrap the card in Link
    path ? (
      <Link href={path} className="block">
        <Card className="bg-muted cursor-pointer hover:shadow-lg transition-all">
          <CardContent className="p-4 text-center">
            {type === "Nutrition" && (
              <NutritionProgress value={Number(percentage)} />
            )}
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground">Goal: {goal}</p>
          </CardContent>
        </Card>
      </Link>
    ) : (
      <Card className="bg-muted">
        <CardContent className="p-4 text-center">
          {type === "Nutrition" && (
            <NutritionProgress value={Number(percentage)} />
          )}
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-muted-foreground">Goal: {goal}</p>
        </CardContent>
      </Card>
    )
  );
}
