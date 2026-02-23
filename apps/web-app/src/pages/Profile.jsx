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

const Profile = () => {
    return (
        <div className="space-y-8">
            <header className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-4xl font-bold shadow-2xl shadow-primary/20">
                    JD
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-white">John Doe</h1>
                    <p className="text-gray-400">@johndoe_trust</p>
                    <div className="flex gap-4 mt-2">
                        <span className="text-xs bg-accent/50 px-2 py-1 rounded-md text-gray-300">Joined Feb 2026</span>
                        <span className="text-xs bg-primary/20 px-2 py-1 rounded-md text-primary font-bold">Verified User</span>
                    </div>
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
                                { icon: Shield, label: "Security", sub: "Tx Password Set" },
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

                            <Button variant="ghost" className="w-full mt-6 text-red-500 hover:bg-red-500/10 hover:text-red-500 justify-start gap-3 pl-3">
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
