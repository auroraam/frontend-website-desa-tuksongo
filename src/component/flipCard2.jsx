// components/FlipCard.jsx
import { useState } from "react";

export default function FlipCard2({ title, description, image, color = "var(--oren)" }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="group [perspective:1000px] w-50 h-56">
      <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 rounded-xl shadow-black shadow-lg/40 p-2 flex flex-col justify-center items-center [backface-visibility:hidden]" style={{ backgroundColor: color }}>
          <h2 className="font-semibold text-md text-white text-center">{title}</h2>
          <img 
            src={image}
            className="w-40 h-40 object-contain mt-1"
          />
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-black shadow-lg/40 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center text-center" style={{ color: color }}>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
