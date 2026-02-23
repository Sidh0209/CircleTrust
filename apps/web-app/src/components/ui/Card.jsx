import React from "react";
import { cn } from "../../utils/cn";

export const Card = ({ children, className }) => (
    <div className={cn("glass rounded-xl p-6 shadow-xl", className)}>
        {children}
    </div>
);

export const CardHeader = ({ children, className }) => (
    <div className={cn("mb-4", className)}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
    <h3 className={cn("text-lg font-semibold text-white", className)}>
        {children}
    </h3>
);

export const CardDescription = ({ children, className }) => (
    <p className={cn("text-sm text-gray-400", className)}>{children}</p>
);

export const CardContent = ({ children, className }) => (
    <div className={className}>{children}</div>
);

export const CardFooter = ({ children, className }) => (
    <div className={cn("mt-4", className)}>{children}</div>
);
