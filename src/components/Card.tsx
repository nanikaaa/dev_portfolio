import { ComponentPropsWithoutRef, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

export const Card = ({ 
    className, 
    children,
    ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
        className={twMerge("bg-white/10 backdrop-blur rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none", className)}
        {...other}
        >       
        {children}
    </div>

  );
};

