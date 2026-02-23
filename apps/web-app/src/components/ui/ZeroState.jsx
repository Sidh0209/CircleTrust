import React from "react";
import { cn } from "../../utils/cn";

export const ZeroState = ({ icon: Icon, title, message, action }) => (
    <div className="flex flex-col items-center justify-center py-10 text-center">
        {Icon && <Icon className="w-12 h-12 text-gray-500 mb-4" />}
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-gray-400 max-w-xs mb-6">{message}</p>
        {action}
    </div>
);
