import { useState, useRef, useEffect } from "react";

export default function Dropdown({ options, value, onChange }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // tutup dropdown kalau klik di luar area-nya
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleSelect(option) {
        onChange(option);
        setOpen(false);
    }

    return (
        <div className="relative" ref={ref}>
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition"
            >
                {value}
                <span className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}>
                    ▾
                </span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-20">
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => handleSelect(option)}
                            className={`w-full text-left px-4 py-2 text-sm transition ${option === value
                                ? "text-navy font-medium bg-gray-50"
                                : "text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}