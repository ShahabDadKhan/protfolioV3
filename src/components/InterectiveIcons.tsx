import React, { useState } from "react";
// import { Instagram, Code, FileCode } from "lucide-react";

interface IconData {
  id: string;
  name: string;
  icon: React.ReactNode;
  color?: string;
}

interface InteractiveIconProps {
  iconData: IconData;
  shakeDuration?: number; // in milliseconds
  size?: number;
  className?: string;
}

const InteractiveIcon: React.FC<InteractiveIconProps> = ({
  iconData,
  shakeDuration = 300,
  size = 48,
  className = "",
}) => {
  const [isShaking, setIsShaking] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setIsShaking(true);
    setShowTooltip(true);

    // Reset shake animation after specified duration
    setTimeout(() => {
      setIsShaking(false);
    }, shakeDuration);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setIsShaking(false);
  };

  return (
    <div className="relative inline-block">
      {/* Tooltip */}
      <div
        className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap transition-all duration-200 pointer-events-none z-10 ${
          showTooltip ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {iconData.name}
        {/* Tooltip arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>

      {/* Icon Container */}
      <div
        className={`
          cursor-pointer p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-lg
          ${isShaking ? "animate-bounce" : ""}
          ${className}
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          animation: isShaking
            ? `shake ${shakeDuration}ms ease-in-out`
            : "none",
          color: iconData.color || "#333",
        }}
      >
        <div
          style={{ width: size, height: size }}
          className="flex items-center justify-center"
        >
          {React.cloneElement(iconData.icon as React.ReactElement, {
            size: size * 0.7,
            className: "transition-transform duration-200 hover:scale-110",
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateX(0);
          }
          10% {
            transform: translateX(-3px) rotate(-1deg);
          }
          30% {
            transform: translateX(3px) rotate(1deg);
          }
          60% {
            transform: translateX(-2px) rotate(-0.5deg);
          }
          90% {
            transform: translateX(2px) rotate(0.5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveIcon;
