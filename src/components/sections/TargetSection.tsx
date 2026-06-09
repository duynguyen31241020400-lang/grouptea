"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const occupations = ["University students", "Office workers", "Freelancers"];
const characteristics = [
  "Active social media users",
  "Want to expand their social circle",
  "Looking for meaningful friendships",
];
const willPay = [
  "Safe and verified communities",
  "Quality social experiences",
  "Opportunities for networking and friendship",
];

export default function TargetSection() {
  return (
    <section className="bg-[#FF0090] py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-black text-3xl md:text-5xl uppercase text-white leading-none mb-10"
        >
          WHO ARE OUR TARGET CUSTOMERS?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <p className="font-display font-bold text-xs uppercase text-[#CCFF00] tracking-widest mb-3">
              Target Audience
            </p>
            <span className="inline-block border-2 border-[#CCFF00] text-[#CCFF00] font-display font-semibold text-sm px-4 py-2 mb-6">
              Age: 18–28 years old
            </span>
            <p className="font-display font-bold text-xs uppercase text-[#CCFF00] tracking-widest mb-2">
              Occupation
            </p>
            <div className="bg-white/10 border border-white/20 p-4">
              {occupations.map((o) => (
                <p
                  key={o}
                  className="font-body text-sm text-white leading-relaxed py-1"
                >
                  {o}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <p className="font-display font-bold text-xs uppercase text-[#CCFF00] tracking-widest mb-2">
                Characteristics
              </p>
              <div className="bg-white/10 border border-white/20 p-4">
                {characteristics.map((c) => (
                  <p
                    key={c}
                    className="font-body text-sm text-white leading-relaxed py-1"
                  >
                    {c}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="font-display font-bold text-xs uppercase text-[#CCFF00] tracking-widest mb-2">
                What Are They Willing to Pay For?
              </p>
              <div className="bg-white/10 border border-white/20 p-4">
                {willPay.map((w) => (
                  <p
                    key={w}
                    className="font-body text-sm text-white leading-relaxed py-1"
                  >
                    {w}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-64 md:h-80 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
              alt="Young friends hanging out"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-black italic text-6xl md:text-9xl text-[#CCFF00] text-center mt-12 leading-none"
        >
          &ldquo;GROUPTEA&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
