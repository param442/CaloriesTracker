"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
function ChartCard({
  title,
  description,
  children,
  className,
  footer,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}) {
  return (
    <Card className={cn("flex w-full border-none flex-col", className)}>
      <CardHeader className="pb-0">
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className="flex-1">{children}</CardContent>
      {footer ? (
        <CardFooter className="flex-col gap-2 text-sm">{footer}</CardFooter>
      ) : null}
    </Card>
  );
}

export default ChartCard;
