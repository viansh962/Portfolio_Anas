import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_70lzzvv",
        "template_j5g7yt7",
        formRef.current,
        "7_WN8Mt7Sd-YfJQ1-"
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.log("Email error", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-black-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-white-400">
        Contact
      </h2>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-gray-900 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          {/* LEFT SECTION */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
              Get in Touch
            </h2>

            <p className="text-gray-400 mt-4">
              Feel free to reach out to me anytime. I’m always open to
              discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="ml-4 text-gray-400">New Delhi, India</p>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="ml-4 text-gray-400">
                  zsanaspvt.alig@gmail.com
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="ml-4 text-gray-400">+91 7248606547</p>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex space-x-4 items-center mt-6">
                <a
                  href="https://www.linkedin.com/in/md-anas-434a70389/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                <a
                  href="https://github.com/viansh962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Github className="w-6 h-6" />
                </a>

                {/* LEETCODE */}
                <a
                  href="https://leetcode.com/your-leetcode-username/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION – FORM */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-400">
              Contact Me
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="block text-sm text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full mt-1 p-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full mt-1 p-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full mt-1 p-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {success && (
                <p className="text-green-400 text-sm">
                  Message sent successfully!
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full bg-blue-500 py-3 rounded-lg text-white hover:bg-blue-600 transition"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
