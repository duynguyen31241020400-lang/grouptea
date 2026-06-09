"use client";

import { motion } from "framer-motion";

const categories = [
  {
    icon: "📚",
    name: "STUDY",
    items: ["Exam Prep Groups", "English Learning", "Book Clubs"],
  },
  {
    icon: "🎭",
    name: "ENTERTAINMENT",
    items: ["Street Photography", "Drinks", "Karaoke Night"],
  },
  {
    icon: "💪",
    name: "WELLNESS",
    items: ["Gym", "Pilates", "Yoga Sessions"],
  },
  {
    icon: "💼",
    name: "WORK",
    items: ["Networking", "Find Coworkers", "Freelance Hubs"],
  },
];

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="bg-[#CCFF00] py-16 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-black leading-none mb-3">
            OUR CATEGORIES
          </h2>
          <p className="font-body text-sm text-black/60 max-w-lg leading-relaxed">
            Each category is its own space — Choose your purpose, and the app
            matches you with the right people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/30 border-2 border-black/10 p-6 min-h-40"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <p className="font-display font-black text-lg uppercase text-[#FF0090] mb-3 tracking-wide">
                {cat.name}
              </p>
              <ul className="space-y-1">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-sm text-black/80 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
