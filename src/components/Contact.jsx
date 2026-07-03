import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import SCRIPT_URL from "../services/googleApi";


export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.subject ||
      !form.message
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#1E40AF]"> Contact Us </span>
          <h1 className="mt-6 text-5xl font-bold text-[#0F172A]"> Let's Talk </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600"> We'd love to hear from you. Send us your enquiry and our team will get back to you shortly. </p> </div> <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="rounded-3xl bg-[#0F172A] p-10 text-white" >
            <h2 className="text-3xl font-bold"> Sharma RK & Co. </h2>
            <p className="mt-2 text-blue-300"> Chartered Accountants </p>
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#60A5FA]" />
                <p> SCO-288, First Floor, <br /> Sector 20, <br /> Panchkula, Haryana – 134117 </p>
              </div>
              <div className="flex gap-4">
                <FaPhoneAlt className="text-[#60A5FA]" />
                <div> <p>+91-9646148709</p> <p>+91-9543778540</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaEnvelope className="text-[#60A5FA]" />
                <p>casharmark.ankush@gmail.com</p>
              </div>
              <div className="flex gap-4">
                <FaClock className="text-[#60A5FA]" />
                <div>
                  <p>Monday - Saturday</p> <p>10:00 AM - 6:00 PM</p>
                  <p className="text-red-300"> Sunday Closed </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="rounded-3xl bg-white p-10 shadow-xl" >
            <div className="grid gap-6 md:grid-cols-2">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="rounded-xl border p-4 outline-none focus:border-[#1E40AF]" />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="rounded-xl border p-4 outline-none focus:border-[#1E40AF]" />
            </div> <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="mt-6 w-full rounded-xl border p-4 outline-none focus:border-[#1E40AF]" />
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="mt-6 w-full rounded-xl border p-4 outline-none focus:border-[#1E40AF]" />
            <textarea rows="6" name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." className="mt-6 w-full rounded-xl border p-4 outline-none focus:border-[#1E40AF]" />
            <button disabled={loading} className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#0F172A] to-[#1E40AF] py-4 font-semibold text-white transition hover:opacity-90" >
              {loading ? "Sending..." : "Send Message"}
              <FaPaperPlane /> </button>
          </motion.form>
        </div>
      </div>
    </section>);
}  