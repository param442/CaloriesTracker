// app/nutrition/protein/page.tsx
"use client";
export default function ProteinPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Protein Details</h1>
      <p>
        Average protein intake in month of{" "}
        {new Date().toLocaleString("default", { month: "long" })}
      </p>
    </div>
  );
}
