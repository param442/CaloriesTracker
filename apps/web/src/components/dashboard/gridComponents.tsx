import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

type GridComponentsProps = {
  title: string;
  variant?: "default" | "ghost";
  children: React.ReactNode;
  className?: string;
};

function GridComponents({
  title,
  children,
  variant = "default",
  className,
}: GridComponentsProps) {
  return (
    <Card
      className={cn(
        "w-full p-4",
        variant === "default" && "bg-card",
        className,
      )}>
      <CardContent>
        <CardTitle className="pb-4">{title}</CardTitle>

        <div className="grid w-full gap-4 grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}

export default GridComponents;
