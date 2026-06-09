"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="rsvp" className="bg-black py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display font-semibold text-xs uppercase text-[#FF0090] tracking-[0.3em] mb-4">
            Your community starts here
          </p>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase text-white leading-none mb-6">
            READY TO FIND YOUR PEOPLE?
          </h2>
          <p className="font-body text-base text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
            Join thousands of people finding genuine connections through shared
            activities.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#CCFF00] p-6"
          >
            <p className="font-display font-black text-2xl uppercase text-black">
              You&apos;re on the list! 🎉
            </p>
            <p className="font-body text-sm text-black/70 mt-2">
              We&apos;ll reach out when GroupTea launches.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/30 text-white placeholder-white/40 px-5 py-3 font-body text-sm focus:outline-none focus:border-[#FF0090] transition-colors duration-200 w-full"
                aria-label="Email address"
              />
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto font-display font-black text-sm uppercase tracking-widest bg-[#FF0090] text-white px-8 py-3 hover:bg-[#CCFF00] hover:text-black transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                RSVP NOW
              </button>
            </div>
            <p className="font-body text-xs text-white/30 mt-4">
              No spam. Just your next great group.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
