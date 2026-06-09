"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop",
    alt: "Friends hanging out",
    label: "SOCIAL GATHERING",
  },
  {
    src: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=500&auto=format&fit=crop",
    alt: "Nightlife event",
    label: "NIGHTLIFE",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop",
    alt: "Study group",
    label: "STUDY GROUP",
  },
  {
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&auto=format&fit=crop",
    alt: "Outdoor meetup",
    label: "OUTDOOR MEETUP",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="border-b border-black px-6 md:px-12 py-3 flex items-center justify-between">
        <span className="font-display font-semibold text-xs uppercase text-black tracking-widest">
          GROUP THREE
        </span>
        <span className="font-display font-semibold text-xs uppercase text-black tracking-widest">
          COMING SOON
        </span>
        <a
          href="#rsvp"
          className="font-display font-bold text-xs uppercase text-black border border-black px-4 py-1.5 hover:bg-black hover:text-white transition-colors duration-200"
        >
          RSVP NOW
        </a>
      </div>

      <div className="px-6 md:px-12 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display font-black leading-none text-5xl md:text-8xl lg:text-9xl uppercase">
            <span className="text-black">MEET </span>
            <span className="text-[#FF0090] italic">&ldquo;GROUPTEA&rdquo;</span>
          </h2>
        </motion.div>
        <p className="font-display font-semibold text-base md:text-xl text-black uppercase tracking-[0.25em] mt-4">
          YOUR COMMUNITY STARTS HERE.
        </p>
      </div>

      <div className="px-6 md:px-12 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative overflow-hidden border-l-4 border-[#FF0090]"
            >
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="font-display font-black text-xs uppercase text-[#FF0090] mt-2 tracking-widest">
                {photo.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
