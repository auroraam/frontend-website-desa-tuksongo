// components/FlipCard.jsx
import { useState } from "react";

export default function FlipCard({ title, description, color = "var(--biru)" }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="group [perspective:1000px] w-56 h-40">
      <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-black shadow-lg/40 p-6 flex flex-col justify-center items-center [backface-visibility:hidden]" style={{ color: color }}>
          <h2 className="font-semibold text-md text-center">{title}</h2>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-xl shadow-black shadow-lg/40 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center text-center" style={{ backgroundColor: color }}>
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
