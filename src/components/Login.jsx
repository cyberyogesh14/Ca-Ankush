import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            toast.error("Please fill all fields");
            return;
        }

        setLoading(true);

        // Temporary Login
        if (
            form.email === "admin@sharmark.com" &&
            form.password === "sharma@123"
        ) {
            localStorage.setItem("admin", "true");

            toast.success("Login Successful");

            navigate("/admin");
        } else {
            toast.error("Invalid Email or Password");
        }

        setLoading(false);
    };

    return (
        <section className="min-h-screen bg-slate-100 flex items-center justify-center px-5">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Sharma RK & Co.
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Chartered Accountants
                    </p>

                    <h2 className="mt-6 text-2xl font-bold text-blue-700">
                        Admin Login
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-700"
                        />
                    </div>

                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-700"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                            className="flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-slate-900 to-blue-700 py-3 font-semibold text-white transition hover:opacity-90"
                        >
                            {loading ? "Logging in..." : "Login"}

                            <FaSignInAlt />
                    </button>
                </form>
            </motion.div>
        </section>
    );
}