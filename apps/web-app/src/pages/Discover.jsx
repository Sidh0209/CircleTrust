import React, { useState } from "react";
import { Search, Plus, Globe, Building2, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Tabs } from "../components/ui/Tabs";
import { ZeroState } from "../components/ui/ZeroState";
import { Button } from "../components/ui/Button";

const Discover = () => {
    const [showCreateFlow, setShowCreateFlow] = useState(false);

    const discoverTabs = [
        {
            id: "bigger",
            label: "Bigger Circles",
            content: (
                <ZeroState
                    icon={Globe}
                    title="No public circles available"
                    message="There are no public large communities available yet. Check back later or create your own."
                />
            ),
        },
        {
            id: "ngos",
            label: "NGOs",
            content: (
                <ZeroState
                    icon={Building2}
                    title="No NGOs listed yet"
                    message="Verified NGO groups will appear here once they join the platform."
                />
            ),
        },
    ];

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">Discover</h1>
                <p className="text-gray-400">Find communities to join or create your own circle.</p>
            </header>

            <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <Input
                    className="pl-12 h-14 text-lg bg-accent/20 border-accent/50 focus:border-primary/50"
                    placeholder="Search circles, NGOs, or communities..."
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Tabs tabs={discoverTabs} defaultValue="bigger" className="bg-transparent" />
                </div>

                <div className="space-y-6">
                    <Card className="bg-primary/10 border-primary/20 border-2 border-dashed">
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Plus className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle>Create Your Own Circle</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-400 text-center mb-6">
                                Start a private circle for your friends or a public one for the community.
                            </p>
                            <Button
                                onClick={() => setShowCreateFlow(true)}
                                className="w-full h-12 flex items-center justify-center gap-2"
                            >
                                Create Circle
                            </Button>
                        </CardContent>
                    </Card>

                    {showCreateFlow && (
                        <Card className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <CardHeader className="flex flex-row items-center justify-between border-b border-accent/30 pb-4">
                                <CardTitle className="text-lg">New Circle</CardTitle>
                                <Button variant="ghost" onClick={() => setShowCreateFlow(false)} className="h-8 w-8 p-0 text-gray-400">×</Button>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-400 uppercase">Circle Name</label>
                                    <Input placeholder="E.g. Engineering Peers" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-400 uppercase">Category</label>
                                    <select className="w-full bg-accent/30 border border-accent rounded-lg px-4 py-2 text-white appearance-none outline-none focus:ring-2 focus:ring-primary/50">
                                        <option value="peers">Peers</option>
                                        <option value="family">Family</option>
                                        <option value="ngo">NGO</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-400 uppercase">Privacy Type</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-primary bg-primary/10 text-primary">
                                            <Globe className="w-5 h-5 mb-1" />
                                            <span className="text-xs font-bold">Public</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-accent bg-accent/10 text-gray-400">
                                            <Shield className="w-5 h-5 mb-1" />
                                            <span className="text-xs font-bold">Private</span>
                                        </button>
                                    </div>
                                </div>
                                <Button className="w-full mt-4 h-12 font-bold">Create Circle</Button>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Discover;
