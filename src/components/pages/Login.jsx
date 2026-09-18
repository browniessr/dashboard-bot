import { useState } from "react";

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "admin123";

export default function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            setError("");
            onLoginSuccess(username);
        } else {
            setError("Username atau password salah");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#eef1f8] px-4">
            <div className="bg-white rounded-3xl shadow-sm p-10 w-full max-w-sm">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-9 h-9 rounded-md bg-navy" />
                    <div className="text-sm font-semibold leading-tight text-navy">
                        Layanan Aduan
                        <br />
                        Magang Nasional
                    </div>
                </div>

                <h1 className="text-xl font-bold text-gray-900 mb-1">Masuk</h1>
                <p className="text-sm text-gray-400 mb-6">
                    Masukkan username dan password kamu
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Masukkan username"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-electric"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Masukkan password"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-electric pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? "Sembunyikan" : "Lihat"}
                            </button>
                        </div>
                    </div>

                    {error && <p className="text-xs text-red-500 -mt-1">{error}</p>}

                    <button
                        type="submit"
                        className="mt-2 bg-navy text-white text-sm font-semibold py-2.5 rounded-xl hover:opacity-90 transition"
                    >
                        Masuk
                    </button>
                </form>
            </div>
        </div>
    );
}