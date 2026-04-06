"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ShoeViewer from "@/components/bespoke/ShoeViewer";

const materials = [
  "Luxe Calf",
  "Box Calf",
  "Painted Full Grain",
  "Suede",
];

const palette = [
  { name: "Black", hex: "#111111" },
  { name: "Dark Brown", hex: "#5C3A21" },
  { name: "Medium Brown", hex: "#8B5E34" },
  { name: "Light Brown", hex: "#A9784D" },
  { name: "Cognac", hex: "#B9783A" },
  { name: "Navy", hex: "#0A3A7A" },
  { name: "White", hex: "#E7E5E0" },
  { name: "Grey", hex: "#6B7280" },
];

const sizes = [
  "UK 6",
  "UK 7",
  "UK 8",
  "UK 9",
  "UK 10",
  "UK 11",
];

/**
 * INTERNAL KEYS STAY SAME
 * LABELS FIXED FOR USER
 */
const parts = [
  { key: "sole", label: "Upper" },
  { key: "toe", label: "Toe" },
  { key: "laces", label: "Laces" },
  { key: "upper", label: "Sole" },
] as const;

type PartKey =
  (typeof parts)[number]["key"];

type ColorItem = {
  name: string;
  hex: string;
};

export default function BespokePage() {
  const [selectedPart, setSelectedPart] =
    useState<PartKey>("upper");

  const [config, setConfig] = useState({
    material: "Luxe Calf",
    size: "UK 9",
    burnishing: true,
    finish: "glossy",
    colors: {
      /**
       * keep existing working logic
       */
      sole: palette[3],
      toe: palette[0],
      laces: palette[6],
      upper: palette[4],
    },
  });

  const activeColor =
    config.colors[selectedPart];

  const price = useMemo(() => {
    const base = 440;

    const materialCost =
      config.material === "Suede"
        ? 40
        : config.material ===
          "Painted Full Grain"
        ? 80
        : config.material === "Luxe Calf"
        ? 60
        : 50;

    return (
      base +
      materialCost +
      (config.burnishing ? 25 : 0)
    );
  }, [
    config.material,
    config.burnishing,
  ]);

  const updatePartColor = (
    color: ColorItem
  ) => {
    setConfig((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [selectedPart]: color,
      },
    }));
  };

  return (
    <main className="h-screen overflow-hidden bg-[#FAF9F6] text-black">
      <div className="grid grid-cols-12 h-screen">
        {/* LEFT PANEL */}
        <aside className="col-span-3 border-r border-black/10 bg-[#FCFBF8] p-8 flex flex-col justify-between">
          <div>
            <Link
              href="/"
              className="mb-8 inline-block text-sm text-black/60 hover:text-black transition-colors"
            >
              ← Back to Home
            </Link>

            <h1 className="text-5xl font-serif leading-tight mb-8">
              Craft Your Vision
            </h1>

            {/* PARTS */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.3em] text-black/50 mb-4">
                PART
              </p>

              <div className="grid grid-cols-2 gap-3">
                {parts.map((part) => (
                  <button
                    key={part.key}
                    onClick={() =>
                      setSelectedPart(
                        part.key
                      )
                    }
                    className={`border py-3 capitalize transition-all ${
                      selectedPart ===
                      part.key
                        ? "border-black"
                        : "border-black/10 text-black/60"
                    }`}
                  >
                    {part.label}
                  </button>
                ))}
              </div>
            </div>

            {/* COLORS */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.3em] text-black/50 mb-4">
                COLOR
              </p>

              <div className="grid grid-cols-4 gap-3">
                {palette.map((color) => (
                  <button
                    key={color.name}
                    onClick={() =>
                      updatePartColor(
                        color
                      )
                    }
                    className={`h-14 border transition-all ${
                      activeColor.hex ===
                      color.hex
                        ? "border-black border-2 scale-95"
                        : "border-black/10"
                    }`}
                    style={{
                      backgroundColor:
                        color.hex,
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* MATERIAL */}
            <div>
              <p className="text-xs tracking-[0.3em] text-black/50 mb-4">
                MATERIAL
              </p>

              <div className="space-y-3">
                {materials.map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setConfig((p) => ({
                        ...p,
                        material: item,
                      }))
                    }
                    className={`block transition-all ${
                      config.material ===
                      item
                        ? "font-semibold"
                        : "text-black/60"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER */}
        <section className="col-span-7 bg-[#F8F6F2] h-screen">
          <ShoeViewer
            config={{
              ...config,
              price,
            }}
          />
        </section>

        {/* RIGHT PANEL */}
        <aside className="col-span-2 border-l border-black/10 bg-[#FCFBF8] p-8 flex flex-col justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-black/50 mb-4">
              SIZE
            </p>

            <div className="grid grid-cols-2 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setConfig((p) => ({
                      ...p,
                      size,
                    }))
                  }
                  className={`border py-3 transition-all ${
                    config.size === size
                      ? "border-black"
                      : "border-black/10"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] text-black/50 mb-4">
              TOTAL PRICE
            </p>

            <h2 className="text-7xl font-serif mb-8">
              £{price}
            </h2>

            <button className="w-full bg-black text-white py-4 hover:opacity-90 transition-opacity">
              Place Order
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
