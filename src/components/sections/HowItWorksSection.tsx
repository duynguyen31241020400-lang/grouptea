"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Sign Up & Verify Identity",
    tags: ["App/Web", "ID Verification", "Terms of Service"],
    desc: "Create an account via app or web. Verify your ID and phone number to ensure all members are real — building a safe community from day one.",
  },
  {
    number: "2",
    title: "Select Purpose & Category",
    tags: ["Study", "Entertainment", "Wellness", "Work"],
    desc: "The dashboard features 4 main categories. Choose your specific goal — each path connects you with the right audience.",
  },
  {
    number: "3",
    title: "Create a Group or Join Existing Ones",
    tags: ["Auto-Matching", "Browse & Join"],
    desc: "Create a group by setting your goal, time, and location — the app auto-matches 4–10 people within 8 hours. Or browse open groups to request access, with approvals under 2 hours.",
  },
  {
    number: "4",
    title: "Meet Up & Rate Your Experience",
    tags: ["Hybrid", "1–5 Star Rating", "Achievement Badges"],
    desc: "Show up, connect in real life, and rate your experience to help the community grow stronger.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-black text-3xl md:text-5xl uppercase text-black leading-none mb-12"
        >
          4 STEPS — FROM SIGNUP TO EXPERIENCE
        </motion.h2>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-6 py-7 border-b border-black/10 last:border-b-0"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CCFF00] flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-display font-black text-xl text-black">
                  {step.number}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-display font-black text-lg md:text-xl uppercase text-[#FF0090] mb-2">
                  {step.title}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-black text-white font-display font-semibold text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-body text-sm text-black/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
