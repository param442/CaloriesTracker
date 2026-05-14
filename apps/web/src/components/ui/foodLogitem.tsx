"use client";

import { useState } from "react";
import { Button } from "./button";
import { Cross, X } from "lucide-react";

type MacroType = "p" | "c" | "f";

interface MacroPillProps {
  label: string;
  value: string;
  type: MacroType;
}

const MacroPill = ({ label, value, type }: MacroPillProps) => {
  const styles: Record<MacroType, string> = {
    p: "bg-blue-50 text-blue-800",
    c: "bg-amber-50 text-amber-900",
    f: "bg-pink-50 text-pink-800",
  };

  return (
    <span
      className={`${styles[type]} text-[11px] font-medium px-2 py-0.5 rounded-full`}>
      {label} {value}
    </span>
  );
};

export interface FoodLogItemProps {
  name?: string;
  serving?: string;
  weight?: string;
  calories?: number;
  protein?: string;
  carbs?: string;
  fat?: string;
  onRemove?: () => void;
}

export const FoodLogItem = ({
  name = "Scrambled eggs (3 large)",
  serving = "1 serving",
  weight = "210 g",
  calories = 270,
  protein = "18g",
  carbs = "2g",
  fat = "14g",
  onRemove,
}: FoodLogItemProps) => {
  const [removing, setRemoving] = useState(false);

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => onRemove?.(), 200);
  };

  return (
    <div
      className={`flex items-center justify-between gap-3 py-2.5 border-b border-gray-400 transition-all duration-200 ${
        removing ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
      }`}>
      {/* Icon */}
      <div className="w-9 h-9 rounded-lg bg-gray-50 justify-content-center shrink-0 text-lg flex items-center justify-center">
        🥚
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 truncate">{name}</h4>
        <p className="text-sm text-gray-500 truncate">
          {serving} &middot; {weight}
        </p>
        <MacroPill label="P" value={protein} type="p" />
        <MacroPill label="C" value={carbs} type="c" />
        <MacroPill label="F" value={fat} type="f" />
      </div>
      <div className="flex flex-col ml-11">
        <span className="text-sm font-medium text-gray-900">
          {calories} kcal
        </span>
        <Button
          variant="close"
          size="icon"
          onClick={handleRemove}
          className="ml-2 cursor-pointer">
          <span className="text-xs">
            <X />
          </span>
        </Button>
      </div>
    </div>
  );
};
