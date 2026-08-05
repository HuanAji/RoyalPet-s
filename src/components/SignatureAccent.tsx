import React from 'react';
import { motion } from 'motion/react';

interface SignatureAccentProps {
  text?: string;
  className?: string;
}

export const SignatureAccent: React.FC<SignatureAccentProps> = ({
  text = "Royal Pets Standard",
  className = "",
}) => {
  return (
    <div className={`inline-flex flex-col items-center relative ${className}`}>
      <span className="font-serif-display text-2xl sm:text-3xl italic text-[#1a3d1a] relative z-10">
        {text}
      </span>
      {/* Dynamic Animated Vector Underline Signature Stroke */}
      <svg
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-4 text-[#B8FF52] -mt-2"
      >
        <motion.path
          d="M5 12 C 40 4, 80 18, 120 8 C 150 2, 175 14, 195 9"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M10 15 C 50 18, 110 6, 185 14"
          stroke="#B8FF52"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};
