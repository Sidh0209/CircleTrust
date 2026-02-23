import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Compass, MessageSquare, User } from "lucide-react";
import { cn } from "../utils/cn";

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Discover", href: "/discover", icon: Compass },
    { name: "Chat", href: "/chat", icon: MessageSquare },
    { name: "Profile", href: "/profile", icon: User },
];

const MainLayout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background flex flex-col md:flex-row">
            {/* Sidebar for Desktop */}
            <aside className="hidden md:flex flex-col w-64 border-r border-accent p-6 fixed h-full">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-bold text-xl">C</div>
                    <span className="text-xl font-bold tracking-tight">CircleTrust</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                                    isActive
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-gray-400 hover:text-white hover:bg-accent/50"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 md:ml-64 p-6 pb-24 md:pb-6">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>

            {/* Bottom Nav for Mobile */}
            <nav className="md:hidden fixed bottom-6 left-6 right-6 h-16 glass rounded-2xl flex items-center justify-around px-4 z-50 shadow-2xl">
                {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1",
                                isActive ? "text-primary" : "text-gray-400"
                            )}
                        >
                            <item.icon className={cn("w-6 h-6", isActive && "scale-110 transition-transform")} />
                            <span className="text-[10px] font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default MainLayout;
