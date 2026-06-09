"use client";

import { motion } from "framer-motion";

const cards = [
  {
    tag: "#GROUPTEA",
    tagColor: "bg-white text-[#FF0090]",
    bg: "bg-[#FF0090]",
    textColor: "text-white",
    body: "Our algorithm groups members based on shared goals, not social profiles or follower counts.",
  },
  {
    tag: "#SOCIAL NETWORKS",
    tagColor: "bg-[#FF0090] text-white",
    bg: "bg-white border-2 border-[#FF0090]",
    textColor: "text-black/70",
    body: "Massive, diluted groups where nobody is truly committed to engaging or meeting up.",
  },
  {
    tag: "#GROUPTEA",
    tagColor: "bg-white text-[#FF0090]",
    bg: "bg-[#FF0090]",
    textColor: "text-white",
    body: "Every user is identity-verified, fostering a trusted environment for real-world meetups.",
  },
  {
    tag: "#MEETUP",
    tagColor: "bg-[#FF0090] text-white",
    bg: "bg-white border-2 border-[#FF0090]",
    textColor: "text-black/70",
    body: "Large-scale crowds with no continuous small-group matching — mostly one-off events.",
  },
];

export default function WhyGroupteaSection() {
  return (
    <section className="bg-[#CCFF00] py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-black leading-none mb-2">
            WHY GROUPTEA?
          </h2>
          <p className="font-body text-sm text-black/60">
            A platform built for intentional connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`${card.bg} p-6 min-h-32 flex flex-col justify-between`}
            >
              <span
                className={`inline-block ${card.tagColor} font-display font-bold text-xs px-3 py-1 mb-4 self-start`}
              >
                {card.tag}
              </span>
              <p
                className={`font-body text-sm ${card.textColor} leading-relaxed`}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
