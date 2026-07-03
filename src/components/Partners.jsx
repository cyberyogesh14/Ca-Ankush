import { motion } from "framer-motion";
import { FaAward, FaHandshake, FaChartLine } from "react-icons/fa";

export default function Founder() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-5 -left-5 h-full w-full rounded-3xl bg-blue-100"></div>

              <img
                src="https://ik.imagekit.io/cyberyogesh14/Ankush.jpg"
                alt="CA Ankush Sharma"
                className="relative h-full w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900">
              Founder
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              CA Ankush Sharma
            </h2>

            <p className="mt-3 text-lg font-medium text-blue-900">
              Founder • Sharma RK & Co.
            </p>

            <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg">
              CA Ankush Sharma established <strong>Sharma RK & Co.</strong> with
              a commitment to providing transparent, reliable, and strategic
              financial solutions. The firm assists individuals, startups, and
              businesses with taxation, GST, auditing, accounting, ROC
              compliance, and financial advisory services while maintaining the
              highest professional standards.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 p-5 text-center shadow-sm transition hover:shadow-lg">
                <FaAward className="mx-auto text-3xl text-blue-900" />
                <h4 className="mt-3 font-semibold text-slate-900">
                  Excellence
                </h4>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 text-center shadow-sm transition hover:shadow-lg">
                <FaHandshake className="mx-auto text-3xl text-blue-900" />
                <h4 className="mt-3 font-semibold text-slate-900">
                  Integrity
                </h4>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 text-center shadow-sm transition hover:shadow-lg">
                <FaChartLine className="mx-auto text-3xl text-blue-900" />
                <h4 className="mt-3 font-semibold text-slate-900">
                  Growth
                </h4>
              </div>

            </div>

            {/* Button */}
            <button className="mt-10 rounded-full bg-blue-900 px-8 py-4 font-semibold text-white transition hover:bg-blue-800">
              Learn More
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}