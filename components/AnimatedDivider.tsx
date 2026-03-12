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
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A96A]/35" />
        <div className="w-1 h-1 rounded-full bg-[#D4A96A]/35" />
        <div className="h-px w-8 bg-[#D4A96A]/35" />
        <motion.div
          className="text-sm text-[#D4A96A]/55 leading-none px-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          ✦
        </motion.div>
        <div className="h-px w-8 bg-[#D4A96A]/35" />
        <div className="w-1 h-1 rounded-full bg-[#D4A96A]/35" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A96A]/35" />
      </motion.div>
    </div>
  );
}
