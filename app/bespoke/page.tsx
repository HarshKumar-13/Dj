"use client";

import { useState } from "react";
import Link from "next/link";
import ShoeViewer from "@/components/bespoke/ShoeViewer";

type ColorOption = {
  name: string;
  hex: string;
};

const materials = [
  "Luxe Calf",
  "Box Calf",
  "Painted Full Grain",
];

const colors: ColorOption[] = [
  { name: "Silver Grey", hex: "#C0C0C0" },
  { name: "Burgundy", hex: "#6D001A" },
  { name: "Crimson", hex: "#B00000" },
  { name: "Royal Blue", hex: "#002F6C" },
  { name: "Teal", hex: "#006D77" },
  { name: "Dark Brown", hex: "#4B2E1E" },
  { name: "Emerald", hex: "#014421" },
];

const sizes = [
  "UK 6",
  "UK 7",
  "UK 8",
  "UK 9",
  "UK 10",
  "UK 11",
];

export default function BespokePage() {
  const [config, setConfig] = useState({
    material: "Luxe Calf",
    color: colors[5],
    size: "UK 9",
    finish: "Burnishing",
    burnishing: true,
  });

  const finalPrice =
    380 +
    (config.burnishing ? 40 : 0) +
    (config.material === "Painted Full Grain" ? 60 : 0);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid lg:grid-cols-[420px_1fr_300px] min-h-screen">

        {/* LEFT PANEL */}
        <aside className="border-r border-white/10 p-8">
          {/* BACK BUTTON */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition mb-8"
          >
            ← Back to Home
          </Link>

          <h1 className="font-display text-4xl font-thin mb-10">
            Craft Your Vision
          </h1>

          {/* MATERIAL */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
              Material
            </p>

            <div className="grid grid-cols-1 gap-3">
              {materials.map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setConfig((prev) => ({
                      ...prev,
                      material: item,
                    }))
                  }
                  className={`text-left transition ${
                    config.material === item
                      ? "text-white"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* COLOR + TOGGLE */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Color
              </p>

              <div className="flex items-center gap-3">
                <span className="text-xs text-white/50">
                  Burnishing
                </span>

                <button
                  onClick={() =>
                    setConfig((prev) => ({
                      ...prev,
                      burnishing: !prev.burnishing,
                    }))
                  }
                  className={`relative w-12 h-6 rounded-full transition ${
                    config.burnishing
                      ? "bg-cyan-500"
                      : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${
                      config.burnishing
                        ? "left-7"
                        : "left-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() =>
                    setConfig((prev) => ({
                      ...prev,
                      color,
                    }))
                  }
                  className={`w-16 h-16 border transition ${
                    config.color.name === color.name
                      ? "border-white scale-105"
                      : "border-white/20"
                  }`}
                  style={{
                    backgroundColor: color.hex,
                  }}
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
              Size
            </p>

            <div className="grid grid-cols-3 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setConfig((prev) => ({
                      ...prev,
                      size,
                    }))
                  }
                  className={`border px-4 py-3 text-sm transition ${
                    config.size === size
                      ? "border-white text-white"
                      : "border-white/20 text-white/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* CENTER SHOE */}
        <section className="flex items-center justify-center">
          <ShoeViewer config={config} />
        </section>

        {/* RIGHT PRICE */}
        <aside className="border-l border-white/10 p-8 flex flex-col justify-end">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Total Bespoke Price
          </p>

          <h2 className="font-display text-6xl font-thin my-6">
            £{finalPrice}
          </h2>

          <button className="border border-white/20 py-4 mb-4 hover:bg-white hover:text-black transition">
            View Details
          </button>

          <button className="bg-white text-black py-4 hover:scale-[1.02] transition">
            Place Order
          </button>
        </aside>
      </div>
    </main>
  );
}