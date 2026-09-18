import { useState } from "react";

function Ring({ radius, strokeWidth, percent, color, trackColor }) {
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <>
            <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={trackColor}
                strokeWidth={strokeWidth}
            />
            <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
            />
        </>
    );
}

export default function DistributionCard() {
    const filters = ["Pesan masuk", "Punya jawaban", "Tidak punya"];
    const [active, setActive] = useState("Pesan masuk");

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 flex-1">
            <div className="flex items-start justify-between mb-1">
                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    Distribusi aduan dan
                    <br />
                    pertanyaan warga
                </h3>
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                    ♡
                </div>
            </div>

            <p className="text-xs text-gray-400 mb-4">
                Seluruh pertanyaan warga yang sudah memiliki jawaban
            </p>

            <div className="flex gap-3 mb-6">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActive(f)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition ${active === f
                            ? "bg-electric text-white"
                            : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="relative w-48 h-48 mx-auto mb-6">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <Ring radius={85} strokeWidth={14} percent={99} color="#0B1E5B" trackColor="#EEF1F8" />
                    <Ring radius={65} strokeWidth={14} percent={72} color="#2A9DF4" trackColor="#EEF1F8" />
                    <Ring radius={45} strokeWidth={14} percent={45} color="#5FD4E0" trackColor="#EEF1F8" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900">
                    99%
                </div>
            </div>

            <div className="flex justify-center gap-6 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-navy inline-block" /> Pesan masuk
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2A9DF4] inline-block" /> Punya jawaban
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#5FD4E0] inline-block" /> Tidak punya
                </span>
            </div>
        </div>
    );
}