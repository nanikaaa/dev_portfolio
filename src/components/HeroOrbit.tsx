import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      {/* Outer container for orbiting animation */}
      <div
        className={twMerge(shouldOrbit && "animate-spin")}
        style={{ animationDuration: orbitDuration }}
      >
        {/* Rotated container for positioning */}
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {/* Inner container for spinning animation */}
          <div
            className={twMerge(shouldSpin && "animate-spin")}
            style={{ animationDuration: spinDuration }}
          >
            {/* Child content */}
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`, // Counter-rotate to keep content upright
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
