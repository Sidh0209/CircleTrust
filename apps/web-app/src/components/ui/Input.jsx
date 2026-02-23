import React from "react";
import { cn } from "../../utils/cn";

export const Input = ({ className, ...props }) => (
    <input
        className={cn(
            "w-full bg-accent/30 border border-accent rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
            className
        )}
        {...props}
    />
);
