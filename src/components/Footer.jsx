import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Partner's Profile", path: "/partners" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const services = [
  "Audit & Assurance",
  "Income Tax",
  "GST Consultancy",
  "Accounting",
  "Corporate Compliance",
  "Business Advisory",
  "Virtual CFO",
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Sharma RK & Co.
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[4px] text-[#60A5FA]">
              Chartered Accountants
            </p>

            <div className="mt-5 h-1 w-20 rounded-full bg-linear-to-r from-[#C89B3C] to-[#1E40AF]" />

            <p className="mt-6 leading-8 text-slate-400">
              Delivering trusted Audit, Taxation, GST, Accounting,
              Regulatory Compliance, and Financial Advisory services
              with integrity and excellence.
            </p>

            <a
              href="#"
              className="mt-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#1E40AF] transition hover:bg-[#2563EB]"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-3 h-1 w-14 rounded-full bg-[#C89B3C]" />

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center transition duration-300 hover:text-[#60A5FA]"
                  >
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Our Services
            </h3>

            <div className="mt-3 h-1 w-14 rounded-full bg-[#C89B3C]" />

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="transition hover:text-[#60A5FA]"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Contact Info
            </h3>

            <div className="mt-3 h-1 w-14 rounded-full bg-[#C89B3C]" />

            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#60A5FA]" />

                <p className="leading-7 text-slate-400">
                  SCO-288, First Floor,
                  <br />
                  Sector 20,
                  <br />
                  Panchkula,
                  <br />
                  Haryana – 134117
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#60A5FA]" />

                <a
                  href="tel:+919646148709"
                  className="transition hover:text-white"
                >
                  +91 96461 48709
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#60A5FA]" />

                <a
                  href="tel:+919543778540"
                  className="transition hover:text-white"
                >
                  +91 95437 78540
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#60A5FA]" />

                <a
                  href="mailto:casharmark.ankush@gmail.com"
                  className="break-all transition hover:text-white"
                >
                  casharmark.ankush@gmail.com
                </a>
              </div>

              <p className="text-sm text-slate-400">
                Mon – Sat
                <br />
                10:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-6 text-center md:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Sharma RK & Co.
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-sm transition hover:text-[#60A5FA]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-sm transition hover:text-[#60A5FA]"
            >
              Terms & Conditions
            </Link>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollTop}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#1E40AF] to-[#2563EB] text-white"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}