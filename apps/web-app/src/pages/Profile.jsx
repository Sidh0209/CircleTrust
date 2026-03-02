import React from "react";
import {
    User as UserIcon,
    Settings as SettingsIcon,
    TrendingUp,
    DollarSign,
    ArrowDownLeft,
    ArrowUpRight,
    Shield,
    Bell,
    Moon,
    LogOut,
    History
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
    const { user, profile, signOut } = useAuth();

    const handleLogout = async () => {
        await signOut();
    };

    const getInitials = (name) => {
        if (!name) return "U";
        return name.split(" ").map(n => n[0]).join("").toUpperCase();
    };

    const colors = [
        'from-blue-500 to-indigo-600',
        'from-purple-500 to-pink-600',
        'from-emerald-500 to-teal-600',
        'from-orange-500 to-red-600',
        'from-cyan-500 to-blue-600'
    ];

    const getBgColor = (name) => {
        if (!name) return colors[0];
        const index = name.length % colors.length;
        return colors[index];
    };

    return (
        <div className="space-y-8 pb-12">
            <header className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl bg-accent/10 border border-accent/20">
                <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${getBgColor(profile?.full_name)} flex items-center justify-center text-5xl font-extrabold text-white shadow-2xl ring-4 ring-background animate-in zoom-in duration-500`}>
                    {getInitials(profile?.full_name || user?.email)}
                </div>
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-4xl font-black text-white tracking-tight">
                        {profile?.full_name || "New Explorer"}
                    </h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
                        <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full border border-accent/30 text-sm text-gray-300">
                            <UserIcon className="w-4 h-4 text-primary" />
                            {user?.email}
                        </div>
                        <span className="flex items-center gap-2 bg-primary/20 px-3 py-1.5 rounded-full text-primary text-xs font-bold uppercase tracking-wider">
                            <Shield className="w-3.5 h-3.5" />
                            Verified Identity
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Account ID</span>
                    <code className="text-[10px] bg-accent/30 px-2 py-1 rounded text-gray-400">
                        {user?.id?.substring(0, 16)}...
                    </code>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Statistics & Overview */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Financial Overview */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-green-500" />
                            Financial Overview
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-gray-400">Total Money Flow</p>
                                    <p className="text-3xl font-bold text-white">$0.00</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-2 mb-1">
                                        <ArrowDownLeft className="w-4 h-4 text-green-500" />
                                        <p className="text-sm text-gray-400">Incoming</p>
                                    </div>
                                    <p className="text-2xl font-bold text-white">$0.00</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-2 mb-1">
                                        <ArrowUpRight className="w-4 h-4 text-red-500" />
                                        <p className="text-sm text-gray-400">Outgoing</p>
                                    </div>
                                    <p className="text-2xl font-bold text-white">$0.00</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Trust Analytics */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            Trust Analytics
                        </h2>
                        <Card className="h-64 flex items-center justify-center border-dashed">
                            <div className="text-center">
                                <TrendingUp className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-400">Trust score history will appear here once you join circles.</p>
                            </div>
                        </Card>
                    </section>

                    {/* Platform Capabilities */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" />
                            Platform Capabilities
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "Trust Circles",
                                    desc: "Create and join community-based lending circles.",
                                    icon: "🤝"
                                },
                                {
                                    title: "P2P Lending",
                                    desc: "Lend funds securely within your trusted network.",
                                    icon: "💸"
                                },
                                {
                                    title: "Smart Borrowing",
                                    desc: "Access instant liquidity based on your trust score.",
                                    icon: "🚀"
                                },
                                {
                                    title: "Trust Analytics",
                                    desc: "Monitor and grow your financial reputation.",
                                    icon: "📈"
                                }
                            ].map((func, i) => (
                                <Card key={i} className="group hover:border-primary/50 transition-all cursor-default overflow-hidden">
                                    <CardContent className="p-4 flex gap-4">
                                        <div className="text-2xl pt-1">{func.icon}</div>
                                        <div>
                                            <h3 className="font-bold text-white group-hover:text-primary transition-colors">{func.title}</h3>
                                            <p className="text-xs text-gray-400 mt-1">{func.desc}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Settings Sidebar */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <SettingsIcon className="w-5 h-5" />
                                Settings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 p-2">
                            {[
                                { icon: Moon, label: "Theme", sub: "Auto / Dark" },
                                { icon: Bell, label: "Notifications", sub: "Enabled" },
                                { icon: History, label: "History Cost", sub: "$0.00" },
                            ].map((item, i) => (
                                <button
                                    key={i}
                                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-accent/50 transition-colors group text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-accent/30 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">{item.label}</p>
                                            <p className="text-[10px] text-gray-500 uppercase font-bold">{item.sub}</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-600">→</div>
                                </button>
                            ))}

                            <div className="pt-4 mt-4 border-t border-accent/30">
                                <p className="px-3 text-[10px] font-bold text-gray-500 uppercase mb-3">Privacy Options</p>
                                {[
                                    "Public Profile",
                                    "Show Trust Score",
                                    "Transaction Visibility"
                                ].map((option, i) => (
                                    <div key={i} className="flex items-center justify-between p-3">
                                        <span className="text-sm font-medium">{option}</span>
                                        <div className="w-10 h-6 bg-primary rounded-full relative flex items-center px-1">
                                            <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant="ghost"
                                onClick={handleLogout}
                                className="w-full mt-6 text-red-500 hover:bg-red-500/10 hover:text-red-500 justify-start gap-3 pl-3"
                            >
                                <LogOut className="w-5 h-5" />
                                Logout
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;
