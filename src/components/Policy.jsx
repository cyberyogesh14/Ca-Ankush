import { motion } from "framer-motion";

export default function Policy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We may collect personal information such as your name, email address, phone number, business details, and any information you voluntarily provide through our contact forms or consultation requests.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "The information collected is used solely to provide professional accounting, taxation, audit, advisory, and compliance services, respond to enquiries, improve our services, and comply with applicable legal and regulatory obligations.",
    },
    {
      title: "3. Confidentiality",
      content:
        "At Sharma RK & Co., client confidentiality is our highest priority. All information shared with us is treated with strict confidentiality and is protected through appropriate administrative and technical safeguards.",
    },
    {
      title: "4. Information Sharing",
      content:
        "We do not sell, rent, or trade your personal information. Information may only be shared when required by law, regulatory authorities, or with your explicit consent.",
    },
    {
      title: "5. Data Security",
      content:
        "We implement appropriate security measures to protect your personal and financial information from unauthorized access, misuse, alteration, or disclosure.",
    },
    {
      title: "6. Cookies",
      content:
        "Our website may use cookies and similar technologies to improve user experience, analyze website traffic, and enhance website functionality.",
    },
    {
      title: "7. Third-Party Links",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external websites.",
    },
    {
      title: "8. Your Rights",
      content:
        "You may request access to, correction of, or deletion of your personal information by contacting us. We will respond in accordance with applicable laws.",
    },
    {
      title: "9. Updates to this Policy",
      content:
        "This Privacy Policy may be updated periodically. Any changes will be published on this page along with the updated effective date.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#1E40AF]">
            Privacy Policy
          </span>

          <h1 className="mt-6 text-4xl font-bold text-[#0F172A] md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Your privacy is important to us. This Privacy Policy explains how
            Sharma RK & Co. collects, uses, protects, and manages your
            information when you use our website and professional services.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="mt-16 space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200"
            >
              <h2 className="text-2xl font-semibold text-[#0F172A]">
                {section.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-linear-to-r from-[#0F172A] to-[#1E40AF] p-10 text-white"
        >
          <h2 className="text-3xl font-bold">
            Contact Us
          </h2>

          <p className="mt-4 text-blue-100">
            If you have any questions regarding this Privacy Policy or how your
            information is handled, please contact us.
          </p>

          <div className="mt-8 space-y-2">
            <p>
              <strong>Sharma RK & Co.</strong>
            </p>

            <p>Chartered Accountants</p>

            <p>
              📧 casharmark.ankush@gmail.com
            </p>

            <p>
              📞 +91-9646148709
            </p>

            <p>
              SCO-288, First Floor, Sector 20,
              Panchkula, Haryana – 134117
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}