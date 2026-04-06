"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useReveal from "@/hooks/useReveal";

const apparelItems = [
  {
    name: "The Signature Suit",
    subtitle: "Tailored Perfection",
    price: 2400,
    image: "/images/suits/Suit 1.webp",
    link: "/custom-suit",
  },
  {
    name: "The Classic Tuxedo",
    subtitle: "Evening Elegance",
    price: 2800,
    image: "/images/suits/suit 2.webp",
    link: "/custom-suit",
  },
  {
    name: "The Formal Shirt",
    subtitle: "Impeccable Details",
    price: 280,
    image: "/images/suits/suit 3.webp",
    link: "/custom-suit",
  },
  {
    name: "The Three-Piece",
    subtitle: "Meticulous Craftsmanship",
    price: 3200,
    image: "/images/suits/suit 4.webp",
    link: "/custom-suit",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Apparel() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      id="apparel"
      ref={sectionRef}
      className="bg-gray-50 py-20 md:py-32 overflow-hidden"
    >
      <div className="w-full px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-[0.65rem] font-medium tracking-[0.35em] uppercase text-navy-300 mb-3"
          >
            Tailored Apparel
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-navy-500 leading-[1.05] mb-4"
          >
            Bespoke Suits & Shirts
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="section-divider mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="font-body text-sm text-navy-200 max-w-lg leading-relaxed"
          >
            Impeccable tailoring and master craftsmanship defined. Our formal wear collection seamlessly translates the Danny & Jones dedication to quality into exquisite suits and handcrafted shirts.
          </motion.p>
        </div>

        {/* Apparel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {apparelItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.link}
              className="block"
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                custom={i}
                className="group cursor-pointer"
              >
                <div className="img-hover-zoom aspect-[3/4] relative mb-5 overflow-hidden bg-white transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain absolute inset-0 z-0 scale-[1.2] transition-transform duration-700 ease-in-out group-hover:scale-[1.25]"
                  />

                  <div className="absolute inset-0 bg-navy-500/0 group-hover:bg-navy-500/10 transition-all duration-500 z-20" />

                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                    <span className="font-body text-[0.55rem] font-medium tracking-[0.2em] uppercase text-navy-500">
                      Customize
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-display text-xl md:text-2xl font-light text-navy-500 group-hover:text-navy-400 transition-colors duration-300">
                      {item.name}
                    </h4>

                    <p className="font-body text-[0.55rem] font-medium tracking-[0.2em] uppercase text-navy-300 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="font-body text-sm text-navy-500 mt-1">
                    £{item.price}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 group border border-navy-500/20 px-8 py-4 hover:bg-navy-500 hover:text-white transition-all duration-500"
          >
            <span className="font-body text-[0.65rem] font-medium tracking-[0.2em] uppercase">
              View Entire Collection
            </span>

            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
