import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Sharma RK & Co. provide?",
    answer:
      "We provide Audit & Assurance, Taxation, GST Compliance, Accounting, Corporate Compliance, Business Advisory, Startup Consulting, Virtual CFO Services, and Regulatory Compliance solutions for businesses and individuals.",
  },
  {
    question: "Do you provide GST registration and return filing services?",
    answer:
      "Yes. We assist with GST Registration, GST Return Filing, GST Audit, GST Advisory, GST Compliance, and representation before tax authorities.",
  },
  {
    question: "Can you help with Income Tax filing?",
    answer:
      "Absolutely. We handle Income Tax Return filing for Individuals, Firms, LLPs, Companies, Trusts, and other entities along with tax planning and advisory services.",
  },
  {
    question: "Do you provide Company and LLP registration services?",
    answer:
      "Yes. We offer Company Incorporation, LLP Registration, ROC Filings, MCA Compliance, Director KYC, DIN, DSC, and Secretarial Compliance services.",
  },
  {
    question: "Do you work with startups and MSMEs?",
    answer:
      "Yes. We specialize in helping startups and MSMEs with business registration, compliance, accounting, taxation, funding readiness, and strategic financial advisory.",
  },
  {
    question: "How can I schedule a consultation?",
    answer:
      "You can contact us by phone, email, or by filling out the contact form on our website. Our team will get back to you to schedule a consultation.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Have Questions?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to the most common questions about our professional
            accounting, taxation, audit, and compliance services.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                >
                  <FaChevronDown className="text-blue-900" />
                </motion.div>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-blue-900 p-10 text-center text-white"
        >
          <h3 className="text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mt-4 text-blue-100">
            Our experts are ready to assist you with taxation, audit,
            accounting, and compliance-related queries.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-blue-900 transition hover:bg-slate-100">
            Contact Us
          </button>
        </motion.div>

      </div>
    </section>
  );
}