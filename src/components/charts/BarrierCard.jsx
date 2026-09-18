function DonutSlice({ radius, strokeWidth, percent, offsetPercent, color }) {
    const circumference = 2 * Math.PI * radius;
    const dash = (percent / 100) * circumference;
    const gap = circumference - dash;
    const rotation = -90 + (offsetPercent / 100) * 360;

    return (
        <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${dash} ${gap}`}
            transform={`rotate(${rotation} 100 100)`}
        />
    );
}

export default function BarrierCard() {
    const data = [
        { label: "Butuh respon petugas", percent: 25, color: "#3B4CF4" },
        { label: "Perkara sensitif untuk dijawab bot", percent: 15.6, color: "#F5B435" },
        { label: "Jawaban belum tersedia", percent: 59.4, color: "#C22FC2" },
    ];

    let cumulative = 0;
    const slices = data.map((d) => {
        const slice = { ...d, offset: cumulative };
        cumulative += d.percent;
        return slice;
    });

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 flex-1">
            <div className="flex items-start justify-between mb-6">
                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    Faktor hambatan aduan
                    <br />
                    yang belum ada jawaban
                </h3>
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                    ⏱
                </div>
            </div>

            <div className="flex flex-col gap-2 mb-6 text-xs text-gray-600">
                {data.map((d) => (
                    <span key={d.label} className="flex items-center gap-2">
                        <span
                            className="w-2 h-2 rounded-full inline-block"
                            style={{ backgroundColor: d.color }}
                        />
                        {d.label}
                    </span>
                ))}
            </div>

            <div className="relative w-48 h-48 mx-auto">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    {slices.map((s) => (
                        <DonutSlice
                            key={s.label}
                            radius={80}
                            strokeWidth={32}
                            percent={s.percent}
                            offsetPercent={s.offset}
                            color={s.color}
                        />
                    ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900">
                    59.4%
                </div>
            </div>
        </div>
    );
}