"use client";

import { motion } from "framer-motion";

export default function AnimatedDivider() {
  return (
    <div className="py-10 flex flex-col items-center gap-3 overflow-hidden">
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      >
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-burgundy/40" />
        <div className="w-1 h-1 rounded-full bg-burgundy/40" />
        <div className="h-px w-8 bg-burgundy/40" />
        <motion.div
          className="font-script text-2xl text-burgundy/60 leading-none px-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          ✦
        </motion.div>
        <div className="h-px w-8 bg-burgundy/40" />
        <div className="w-1 h-1 rounded-full bg-burgundy/40" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-burgundy/40" />
      </motion.div>
    </div>
  );
}
