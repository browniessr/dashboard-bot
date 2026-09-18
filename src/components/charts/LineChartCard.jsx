export default function SummaryCard() {
    // data dummy buat line chart, ganti dengan data asli nanti
    const points = [26, 27, 25.5, 28, 27, 29, 26.5, 28.5, 27, 29, 28, 26];
    const min = Math.min(...points);
    const max = Math.max(...points);
    const width = 260;
    const height = 90;

    const coords = points.map((p, i) => {
        const x = (i / (points.length - 1)) * width;
        const y = height - ((p - min) / (max - min)) * height;
        return `${x},${y}`;
    });

    const linePath = "M" + coords.join(" L");
    const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 flex-1">
            <div className="flex items-start justify-between mb-6">
                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    Jumlah aduan
                    <br />
                    warga yang masuk
                </h3>
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                    📊
                </div>
            </div>

            <div className="text-4xl font-bold text-gray-900 mb-3">123,456</div>

            <span className="inline-block bg-electric text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">
                +2.45%
            </span>

            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="w-2 h-2 rounded-full bg-electric inline-block" />
                Jumlah Aduan
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-24">
                <defs>
                    <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2A6DF4" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#2A6DF4" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#areaFill)" />
                <path d={linePath} fill="none" stroke="#2A6DF4" strokeWidth="2" />
            </svg>

            <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
            </div>
        </div>
    );
}