"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="py-16 px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-normal italic text-2xl md:text-4xl lg:text-5xl text-black text-center max-w-4xl mx-auto leading-tight"
        >
          &ldquo;In a world more connected than ever, why do so many people still
          feel alone?&rdquo;
        </motion.p>
      </div>

      <div
        className="grid grid-cols-2 gap-0 w-full"
        style={{ maxHeight: "420px" }}
      >
        <div className="relative w-full h-52 md:h-96 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop"
            alt="Person alone on phone"
            fill
            className="object-cover grayscale"
            unoptimized
          />
        </div>
        <div className="relative w-full h-52 md:h-96 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555374018-13a8994ab246?w=800&auto=format&fit=crop"
            alt="Person sitting alone in empty room"
            fill
            className="object-cover grayscale"
            unoptimized
          />
        </div>
      </div>

      <div className="w-full bg-[#FF0090] py-8 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-black text-xl md:text-2xl lg:text-3xl uppercase text-center text-[#CCFF00] tracking-wide max-w-3xl mx-auto"
        >
          What if finding the right people was as easy as joining the right
          group?
        </motion.p>
      </div>
    </section>
  );
}
