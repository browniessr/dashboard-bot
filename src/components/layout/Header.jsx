import { useState } from "react";

export default function Tabs() {
    const [active, setActive] = useState("Peserta");
    const tabs = ["Peserta", "Penyelenggara"];

    return (
        <div className="inline-flex items-center gap-1 bg-transparent">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    type="button"
                    onClick={() => setActive(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium leading-none transition ${active === tab
                        ? "bg-white text-navy shadow-sm"
                        : "text-gray-400 hover:text-gray-600"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}