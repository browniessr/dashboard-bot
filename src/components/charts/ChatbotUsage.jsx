import { useState } from "react";

const segments = [
    { label: "Pesan dijawab bot", percent: 42, color: "#2A6DF4" },
    { label: "Bot bertanya balik", percent: 38, color: "#0B1E5B" },
    { label: "Bot mengirim pertanyaan ke petugas", percent: 20, color: "#D9DEEB" },
];

function DonutSlice({ radius, strokeWidth, percent, offsetPercent, gapPercent, color }) {
    const circumference = 2 * Math.PI * radius;
    const dash = ((percent - gapPercent) / 100) * circumference;
    const gap = circumference - dash;
    const rotation = -90 + (offsetPercent / 100) * 360;

    return (
        <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${dash} ${gap}`}
            strokeLinecap="round"
            transform={`rotate(${rotation} 80 80)`}
        />
    );
}

export default function ChatbotUsageCard() {
    const radius = 60;
    const strokeWidth = 20;
    const gapPercent = 2.5; // jarak kecil antar segmen
    const [enabled, setEnabled] = useState(true);

    let cumulative = 0;
    const slices = segments.map((s) => {
        const slice = { ...s, offset: cumulative };
        cumulative += s.percent;
        return slice;
    });

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-6 mb-6">
                <div className="relative w-40 h-40 shrink-0">
                    <svg viewBox="0 0 160 160" className="w-full h-full">
                        {slices.map((s) => (
                            <DonutSlice
                                key={s.label}
                                radius={radius}
                                strokeWidth={strokeWidth}
                                percent={s.percent}
                                offsetPercent={s.offset}
                                gapPercent={gapPercent}
                                color={s.color}
                            />
                        ))}
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-300">
                        77%
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    {segments.map((item) => (
                        <div key={item.label} className="flex items-start gap-2">
                            <span
                                className="w-3 h-3 rounded-sm mt-0.5 shrink-0"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="text-xs text-gray-600 leading-snug max-w-[110px]">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">
                Penggunaan bot dalam
                <br />
                menjawab aduan
            </h3>

            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500 mb-2">Total pesan dijawab bot</p>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-electric border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">1234K</span>
                    </div>
                </div>

                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition">
                    ⚙
                </button>
            </div>
        </div>
    );
}