import React from "react";
import {
    Users,
    MessageSquare,
    Clock,
    Send,
    MoreVertical,
    Circle
} from "lucide-react";
import { Tabs } from "../components/ui/Tabs";
import { ZeroState } from "../components/ui/ZeroState";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

const Chat = () => {
    const chatTabs = [
        {
            id: "groups",
            label: "Groups",
            content: (
                <ZeroState
                    icon={Users}
                    title="No groups yet"
                    message="Join a circle to start group conversations with other members."
                />
            ),
        },
        {
            id: "personal",
            label: "Personal",
            content: (
                <ZeroState
                    icon={Circle}
                    title="No personal conversations"
                    message="Direct messages with people you know will appear here."
                />
            ),
        },
    ];

    return (
        <div className="h-[calc(100vh-120px)] flex gap-6">
            {/* Sidebar List */}
            <div className="w-full md:w-80 flex flex-col gap-6">
                <header>
                    <h1 className="text-3xl font-bold text-white mb-2">Chat</h1>
                    <p className="text-gray-400">Your secure circle communications.</p>
                </header>

                <Card className="flex-1 p-0 overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-accent/30">
                        <Tabs tabs={chatTabs} defaultValue="groups" />
                    </div>
                </Card>
            </div>

            {/* Chat View (Empty State / Welcome) */}
            <Card className="hidden md:flex flex-1 flex-col items-center justify-center bg-accent/10 border-accent/20 border-2 border-dashed">
                <div className="text-center p-8">
                    <div className="w-20 h-20 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <MessageSquare className="w-10 h-10 text-gray-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Your Conversations</h2>
                    <p className="text-gray-400 max-w-sm mx-auto">
                        Select a group or person from the list on the left to start chatting.
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Chat;
