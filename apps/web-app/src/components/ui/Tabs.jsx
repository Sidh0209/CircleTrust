import React, { useState } from "react";
import { cn } from "../../utils/cn";

export const Tabs = ({ tabs, defaultValue, className }) => {
    const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].id);

    return (
        <div className={cn("w-full", className)}>
            <div className="flex border-b border-accent mb-4 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "px-4 py-2 text-sm font-medium transition-colors border-b-2 whitespace-nowrap",
                            activeTab === tab.id
                                ? "border-primary text-primary"
                                : "border-transparent text-gray-400 hover:text-white"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};
