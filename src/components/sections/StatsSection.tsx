"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "4",
    label: "Categories",
    sub: "Study · Entertainment · Wellness · Work",
  },
  { number: "4–10", label: "Members", sub: "Ideal Group Size" },
  { number: "8h", label: "Fast Matching", sub: "Average Match Time" },
];

export default function StatsSection() {
  return (
    <section id="how-it-works" className="bg-[#FF0090] overflow-hidden">
      <div className="w-full px-6 md:px-12 py-8">
        <div className="grid grid-cols-3 divide-x divide-white/30">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-4 py-2"
            >
              <p className="font-display font-black text-4xl md:text-5xl text-white leading-none">
                {stat.number}
              </p>
              <p className="font-display font-semibold text-sm text-white/90 uppercase tracking-wide mt-1">
                {stat.label}
              </p>
              <p className="font-body text-xs text-white/60 mt-1 leading-tight hidden md:block">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 pb-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#categories"
          className="w-full sm:w-auto text-center font-display font-black text-base uppercase tracking-widest bg-[#CCFF00] text-black px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
        >
          CREATE A GROUP
        </a>
        <a
          href="#categories"
          className="w-full sm:w-auto text-center font-display font-black text-base uppercase tracking-widest bg-[#CCFF00] text-black px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
        >
          OPEN GROUP
        </a>
      </div>
    </section>
  );
}
