
"use client";

import { useState } from "react";
import SuitViewer from "@/components/custom-suit/SuitViewer";

const colors = [
  { name: "Charcoal", hex: "#4B4B4B" },
  { name: "Navy", hex: "#1B365D" },
  { name: "Black", hex: "#111111" },
  { name: "Brown", hex: "#5C4033" },
  { name: "Beige", hex: "#C7B299" },
];

const parts = ["Jacket", "Lapel", "Buttons", "Pants"];

export default function CustomSuitPage() {
  const [selectedPart, setSelectedPart] = useState("Jacket");

  const [config, setConfig] = useState({
    jacket: colors[0],
    lapel: colors[2],
    buttons: colors[4],
    pants: colors[0],
    price: 259,
  });

  return (
    <main className="min-h-screen bg-[#f6f5f2] text-black">
      <div className="grid grid-cols-12 min-h-screen">
        {/* LEFT */}
        <aside className="col-span-3 border-r border-black/10 p-8">
          <button className="text-sm text-black/60 mb-8">
            ← Back to Home
          </button>

          <h1 className="text-6xl font-serif leading-tight mb-12">
            Craft Your
            <br />
            Suit
          </h1>

          {/* PARTS */}
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-black/50 mb-4">
              Part
            </p>

            <div className="grid grid-cols-2 gap-3">
              {parts.map((part) => (
                <button
                  key={part}
                  onClick={() => setSelectedPart(part)}
                  className={`border p-4 ${
                    selectedPart === part
                      ? "border-black"
                      : "border-black/10"
                  }`}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>

          {/* COLORS */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-black/50 mb-4">
              Fabric Color
            </p>

            <div className="grid grid-cols-3 gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() =>
                    setConfig({
                      ...config,
                      [selectedPart.toLowerCase()]: color,
                    })
                  }
                  className="h-14 border border-black/10"
                  style={{ background: color.hex }}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* CENTER */}
        <section className="col-span-6">
          <SuitViewer config={config} />
        </section>

        {/* RIGHT */}
        <aside className="col-span-3 border-l border-black/10 p-8 flex flex-col justify-end">
          <p className="text-xs tracking-[0.3em] uppercase text-black/50 mb-4">
            Total Price
          </p>

          <h2 className="text-7xl font-serif mb-8">
            €{config.price}
          </h2>

          <button className="w-full bg-black text-white py-4 text-lg">
            Place Order
          </button>
        </aside>
      </div>
    </main>
  );
}
