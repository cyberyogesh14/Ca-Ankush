import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaBalanceScale,
} from "react-icons/fa";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 pt-28 pb-20">

      {/* Background Blur */}
      <div className="absolute -left-44 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-900">

            <FaCheckCircle />

            Trusted Chartered Accountant Firm

          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">

            Simplifying

            <span className="block text-blue-900">
              Tax & Finance
            </span>

            For Your Business

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

            Sharma RK & Co. is a professional Chartered Accountant firm
            providing GST, Income Tax, Auditing, ROC Compliance,
            Company Registration, Accounting and Financial Advisory
            services for startups, businesses and individuals across India.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link to="/contact">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .95 }}
                className="flex items-center gap-2 rounded-full bg-linear-to-r from-slate-900 to-blue-800 px-8 py-4 font-semibold text-white shadow-xl"
              >
                Book Consultation

                <FaArrowRight />

              </motion.button>

            </Link>

            <Link to="/services">

              <button className="rounded-full border-2 border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:border-blue-800 hover:text-blue-800">

                Explore Services

              </button>

            </Link>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>
              <h2 className="text-4xl font-bold text-blue-900">
                3+
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-900">
                100+
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Happy Clients
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-900">
                25+
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Professional Services
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-900">
                100%
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Satisfaction
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative"
        >

          <div className="rounded-3xl bg-white p-8 shadow-2xl">

            <h3 className="mb-8 text-2xl font-bold text-slate-900">

              Our Expertise

            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-5">

                <div className="rounded-xl bg-blue-100 p-4 text-blue-800">

                  <FaFileInvoiceDollar size={24} />

                </div>

                <div>

                  <h4 className="font-semibold">
                    GST & Income Tax
                  </h4>

                  <p className="text-sm text-slate-500">
                    Filing, Planning & Compliance
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-5">

                <div className="rounded-xl bg-green-100 p-4 text-green-700">

                  <FaBalanceScale size={24} />

                </div>

                <div>

                  <h4 className="font-semibold">
                    Audit & Assurance
                  </h4>

                  <p className="text-sm text-slate-500">
                    Statutory & Internal Audit
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-5">

                <div className="rounded-xl bg-purple-100 p-4 text-purple-700">

                  <FaShieldAlt size={24} />

                </div>

                <div>

                  <h4 className="font-semibold">
                    Business Compliance
                  </h4>

                  <p className="text-sm text-slate-500">
                    ROC, Registration & Advisory
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-linear-to-r from-blue-900 to-slate-900 p-6 text-white">

              <h4 className="text-xl font-bold">
                Need Professional Advice?
              </h4>

              <p className="mt-2 text-blue-100">
                Let's discuss your business requirements with our experts.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}