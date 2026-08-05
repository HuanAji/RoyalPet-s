import React from 'react';

interface CurvedTitleProps {
  className?: string;
}

export const CurvedTitle: React.FC<CurvedTitleProps> = ({ className = '' }) => {
  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <svg
        viewBox="0 0 1000 250"
        className="w-full max-w-4xl h-auto overflow-visible select-none"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        <defs>
          {/* Top curve path: pronounced upward arch, shifted higher up */}
          <path id="topArchCurve" d="M 10 170 Q 500 -80 990 170" fill="none" />
          {/* Bottom curve path: follows the top arch tightly, shifted higher up */}
          <path id="bottomArchCurve" d="M 10 238 Q 500 -12 990 238" fill="none" />
        </defs>

        {/* Top Line: Premium Nutrition for */}
        <text
          fill="#1a3d1a"
          fontWeight="400"
          className="text-[64px] tracking-tight"
        >
          <textPath
            href="#topArchCurve"
            startOffset="50%"
            textAnchor="middle"
          >
            Premium Nutrition for
          </textPath>
        </text>

        {/* Bottom Line: Healthier, Happier Pets */}
        <text
          fill="#1a3d1a"
          fontWeight="400"
          className="text-[68px] tracking-tight"
        >
          <textPath
            href="#bottomArchCurve"
            startOffset="50%"
            textAnchor="middle"
          >
            Healthier, Happier Pets
          </textPath>
        </text>
      </svg>
    </div>
  );
};
