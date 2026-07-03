import { motion } from "framer-motion";

export default function Terms() {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using the Sharma RK & Co. website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue the use of our website.",
    },
    {
      title: "2. Professional Services",
      content:
        "The information available on this website is intended for general informational purposes only and does not constitute professional accounting, taxation, legal, or financial advice. Professional services are provided only after formal engagement with Sharma RK & Co.",
    },
    {
      title: "3. User Responsibilities",
      content:
        "Users agree to provide accurate information while communicating with us and shall not misuse this website for unlawful, fraudulent, or malicious purposes.",
    },
    {
      title: "4. Intellectual Property",
      content:
        "All content on this website, including text, graphics, logos, icons, documents, and design elements, is the intellectual property of Sharma RK & Co. and may not be copied, reproduced, or distributed without prior written permission.",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "While every effort is made to ensure the accuracy of the information on this website, Sharma RK & Co. shall not be liable for any direct, indirect, incidental, or consequential loss arising from the use of this website or reliance on its content.",
    },
    {
      title: "6. Confidentiality",
      content:
        "Information submitted through this website will be handled with appropriate confidentiality. However, submitting information through the website does not establish a client-professional relationship until formally agreed upon.",
    },
    {
      title: "7. Third-Party Websites",
      content:
        "Our website may include links to third-party websites for user convenience. Sharma RK & Co. is not responsible for the content, security, or privacy practices of these external websites.",
    },
    {
      title: "8. Changes to Terms",
      content:
        "We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website after changes are published constitutes acceptance of the revised terms.",
    },
    {
      title: "9. Governing Law",
      content:
        "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Panchkula, Haryana.",
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
            Terms & Conditions
          </span>

          <h1 className="mt-6 text-4xl font-bold text-[#0F172A] md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Please read these Terms & Conditions carefully before using the
            Sharma RK & Co. website or engaging our professional services.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Terms Cards */}
        <div className="mt-16 space-y-8">
          {terms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-[#0F172A]">
                {item.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-linear-to-r from-[#0F172A] to-[#1E40AF] p-10 text-white"
        >
          <h2 className="text-3xl font-bold">
            Professional Disclaimer
          </h2>

          <p className="mt-5 leading-8 text-blue-100">
            The content available on this website is intended solely for
            informational purposes and should not be considered professional
            advice. Decisions relating to taxation, auditing, accounting,
            financial planning, or legal compliance should be made only after
            obtaining professional consultation from qualified experts.
          </p>

          <div className="mt-8 border-t border-white/20 pt-6">
            <p className="font-semibold">
              Sharma RK & Co.
            </p>

            <p className="text-blue-100">
              Chartered Accountants
            </p>

            <p className="mt-3">
              📧 casharmark.ankush@gmail.com
            </p>

            <p>
              📞 +91-9646148709
            </p>

            <p className="mt-2 text-blue-100">
              SCO-288, First Floor, Sector 20,
              Panchkula, Haryana – 134117
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}