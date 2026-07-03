import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight, FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Partner's Profile", path: "/partners" },
  { name: "Services We Offer", path: "/services" },
  { name: "Contact Us", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <h1 className="text-2xl font-bold text-slate-900">
            Sharma RK & Co.
          </h1>

          <span className="text-xs uppercase tracking-[3px] text-blue-900">
            Chartered Accountants
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition duration-300 ${isActive
                  ? "text-blue-800"
                  : "text-slate-700 hover:text-blue-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-linear-to-r from-slate-900 to-blue-800 px-5 py-3 font-semibold text-white shadow-lg"
            >
              Contact Us
              <FaArrowRight size={12} />
            </motion.button>
          </Link>

          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border-2 border-blue-800 px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-800 hover:text-white"
            >
              <FaLock />
              Login
            </motion.button>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-slate-800 lg:hidden"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="border-t bg-white lg:hidden"
          >
            <div className="flex flex-col px-6 py-5">

              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `border-b py-4 transition ${isActive
                      ? "font-semibold text-blue-800"
                      : "text-slate-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-xl bg-linear-to-r from-slate-900 to-blue-800 py-3 text-center font-semibold text-white"
              >
                Contact Us
              </Link>

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl border-2 border-blue-800 py-3 text-center font-semibold text-blue-800 transition hover:bg-blue-800 hover:text-white"
              >
                Login
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}