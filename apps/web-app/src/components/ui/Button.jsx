import React from "react";
import { cn } from "../../utils/cn";

export const Button = ({
    children,
    variant = "primary",
    className,
    ...props
}) => {
    const variants = {
        primary: "bg-primary text-white hover:opacity-90",
        secondary: "bg-secondary text-white hover:bg-secondary/80",
        outline: "border border-accent text-white hover:bg-accent/50",
        ghost: "text-gray-400 hover:text-white hover:bg-accent/50",
    };

    return (
        <button
            className={cn(
                "px-4 py-2 rounded-lg font-medium transition-all active:scale-95 disabled:opacity-50",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
