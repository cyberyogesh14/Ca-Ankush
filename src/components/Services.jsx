import { motion } from "framer-motion";
import {
  FaSearchDollar,
  FaBalanceScale,
  FaCalculator,
  FaBuilding,
  FaChartLine,
  FaUniversity,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSearchDollar />,
    title: "Audit & Assurance",
    description:
      "Comprehensive audit solutions that strengthen financial transparency and regulatory compliance.",
    items: [
      "Statutory Audits",
      "Internal & Management Audits",
      "CAG Audits",
      "Tax Audits",
      "Bank Audits",
      "Forensic Audits",
      "Operational Audits",
    ],
  },
  {
    icon: <FaBalanceScale />,
    title: "Taxation Services",
    description:
      "Strategic tax planning and compliance solutions for individuals and businesses.",
    items: [
      "Income Tax Filing",
      "GST Registration & Returns",
      "GST Advisory",
      "TDS Compliance",
      "Tax Planning",
      "Tax Litigation",
      "Assessment Support",
    ],
  },
  {
    icon: <FaCalculator />,
    title: "Accounting & Compliance",
    description:
      "Reliable accounting and financial reporting services for informed decision-making.",
    items: [
      "Bookkeeping",
      "Financial Statements",
      "Payroll Processing",
      "PF & ESI Compliance",
      "MIS Reporting",
      "IND-AS / IFRS Support",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Compliance",
    description:
      "Complete regulatory and corporate compliance solutions under MCA and other authorities.",
    items: [
      "Company Incorporation",
      "LLP Registration",
      "ROC Filings",
      "Director KYC",
      "DIN & DSC",
      "FEMA & RBI Compliance",
      "XBRL Filing",
    ],
  },
  {
    icon: <FaChartLine />,
    title: "Advisory & Consulting",
    description:
      "Helping businesses grow with strategic financial and operational guidance.",
    items: [
      "Business Structuring",
      "Virtual CFO",
      "Business Valuation",
      "Due Diligence",
      "Financial Planning",
      "Corporate Restructuring",
    ],
  },
  {
    icon: <FaUniversity />,
    title: "Industry Solutions",
    description:
      "Sector-specific expertise for public and private organizations.",
    items: [
      "Government Bodies",
      "Banks & NBFCs",
      "NGOs & Trusts",
      "Educational Institutions",
      "Cooperative Societies",
      "Startups & MSMEs",
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: "Specialized Services",
    description:
      "Tailored solutions designed to meet unique business and compliance needs.",
    items: [
      "Startup Consulting",
      "NRI Taxation",
      "IEC Registration",
      "Section 8 Company",
      "Trust Registration",
      "Digital Signature (DSC)",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Professional Financial Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At <strong>Sharma RK & Co.</strong>, we provide comprehensive
            Chartered Accountancy, taxation, audit, compliance, and advisory
            services tailored for businesses, institutions, startups, and
            individuals.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-900 text-3xl text-white">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-900"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-8 flex items-center gap-2 font-semibold text-blue-900 transition hover:gap-3">
                Learn More
                <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-blue-900 p-10 text-center text-white lg:p-16"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Looking for Professional Financial Guidance?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">
            Whether you're an individual, startup, corporate, or government
            organization, our experienced professionals are here to provide
            reliable financial, taxation, audit, and compliance solutions.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-blue-900 transition hover:bg-slate-100">
            Book a Consultation
          </button>
        </motion.div>

      </div>
    </section>
  );
}