import { useState } from "react";

const topics = [
    { label: "Uang saku", width: "94%", gradient: "from-pink-500 to-fuchsia-600" },
    { label: "Penandatanganan perjanjian magang", width: "85%", gradient: "from-fuchsia-600 to-purple-700" },
    { label: "Perjanjian magang belum muncul", width: "76%", gradient: "from-purple-700 to-violet-800" },
    { label: "Kapan mentor menyetujui laporan magang", width: "67%", gradient: "from-violet-800 to-indigo-900" },
    { label: "Besaran uang saku tidak sama setiap bulan", width: "58%", gradient: "from-indigo-900 to-indigo-950" },
];

const months = [
    { name: "Jan", value: 35 },
    { name: "Feb", value: 78 },
    { name: "Mar", value: 55 },
    { name: "Apr", value: 60 },
    { name: "May", value: 48 },
    { name: "Jun", value: 96, active: true },
    { name: "Jul", value: 44 },
    { name: "Aug", value: 82 },
    { name: "Sep", value: 22 },
    { name: "Oct", value: 65 },
    { name: "Nov", value: 38 },
    { name: "Dec", value: 58 },
];

const filters = ["24h", "1d", "3d", "1w", "3w", "1m"];

export default function TopicFunnelCard() {
    const [activeFilter, setActiveFilter] = useState("3d");
    const rowHeight = 44;
    const chartHeight = rowHeight * topics.length;

    return (
        <div className="bg-white rounded-3xl shadow-sm p-8 w-full">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex-1">
                    12,345 aduan diantar ke petugas
                </h2>
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                    📊
                </div>
            </div>

            {/* Subheader */}
            <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-900">Daftar aduan berdasarkan topik perkara</p>
                <span className="text-sm text-gray-400">5 aduan</span>
            </div>

            {/* Funnel chart */}
            <div className="relative mb-6" style={{ height: chartHeight }}>
                {[...topics, null].map((_, i) => (
                    <div
                        key={i}
                        className="absolute left-0 right-0 flex items-center"
                        style={{ top: i * rowHeight }}
                    >
                        <span className="text-xs text-gray-400 w-4">{topics.length - i}</span>
                        <div className="flex-1 border-t border-dashed border-gray-300 ml-2" />
                    </div>
                ))}

                {topics.map((topic, i) => (
                    <div
                        key={topic.label}
                        className={`absolute left-8 flex items-center text-white text-sm font-medium px-4 rounded-r-full bg-gradient-to-r ${topic.gradient}`}
                        style={{
                            top: i * rowHeight + 4,
                            height: rowHeight - 8,
                            width: topic.width,
                        }}
                    >
                        {topic.label}
                    </div>
                ))}
            </div>

            <p className="text-xs text-gray-400 mt-4 mb-3">Year 2021</p>

            {/* Filter pills */}
            <div className="flex gap-2 mb-8">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${activeFilter === f
                            ? "bg-fuchsia-600 text-white"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Monthly bar chart */}
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex-1 border-t-2 border-dashed border-indigo-500" />
                    <span className="text-xs font-semibold text-gray-700">MAX</span>
                </div>

                <div className="flex items-end justify-between gap-2">
                    {months.map((m) => (
                        <div key={m.name} className="flex flex-col items-center gap-2 flex-1">
                            <div className="w-full h-40 flex items-end">
                                <div
                                    className={`w-full rounded-full ${m.active ? "bg-indigo-600" : "bg-gray-200"
                                        }`}
                                    style={{ height: `${m.value}%` }}
                                />
                            </div>
                            <span className="text-xs text-gray-400">{m.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}