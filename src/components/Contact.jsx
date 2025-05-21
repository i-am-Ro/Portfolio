import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import Footer from "./Footer";

const Contact = ({ islightmode }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("https://getform.io/f/aejlydvb", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((err) => {
        console.error("Form submission error:", err);
      });
  };

  return (
    <div
      id="contact"
      className={`pt-5 px-4 sm:px-6 md:px-20 transition-colors duration-700 ${
        islightmode ? "text-black bg-gray-200" : "text-white bg-black"
      }`}
    >
      {/* Autofill fix */}
      <style>{`
        input:-webkit-autofill,
        textarea:-webkit-autofill {
          background-color: ${islightmode ? "#fff" : "#171717"} !important;
          -webkit-box-shadow: 0 0 0px 1000px ${
            islightmode ? "#fff" : "#171717"
          } inset !important;
          -webkit-text-fill-color: ${islightmode ? "#000" : "#fff"} !important;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`w-full max-w-xl mx-auto flex flex-col gap-6 transition-colors ease-linear duration-700 p-6 rounded-2xl shadow-xl border ${
              islightmode
                ? "bg-gray-100 border-gray-300"
                : "bg-neutral-800 border-gray-700"
            }`}
          >
            {/* Thank you message */}
            <div
              className={`text-center font-semibold text-xl transition-opacity duration-700 ${
                submitted
                  ? "opacity-100 mb-4 text-green-500"
                  : "opacity-0 h-0 overflow-hidden"
              }`}
            >
              ✅ Thank you! Your message has been sent.
            </div>

            {!submitted && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={`p-3 rounded-md outline-none border transition-colors ${
                    islightmode
                      ? "bg-white text-black border-gray-300"
                      : "bg-neutral-900 text-white border-gray-600"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className={`p-3 rounded-md outline-none border transition-colors ${
                    islightmode
                      ? "bg-white text-black border-gray-300"
                      : "bg-neutral-900 text-white border-gray-600"
                  }`}
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className={`p-3 rounded-md outline-none border resize-none transition-colors ${
                    islightmode
                      ? "bg-white text-black border-gray-300"
                      : "bg-neutral-900 text-white border-gray-600"
                  }`}
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-md font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </>
            )}
          </form>

          {/* Info Section */}
          <div className="flex flex-col gap-6 text-base w-full max-w-md mx-auto">
            <div className="flex items-center gap-4 p-4 rounded-xl shadow-md bg-gradient-to-r from-white/10 to-white/5 border border-white/10 backdrop-blur-md w-full">
              <Mail className="text-blue-500" size={28} />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p className="text-base">rohitmondal1482002@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl shadow-md bg-gradient-to-r from-white/10 to-white/5 border border-white/10 backdrop-blur-md w-full">
              <Phone className="text-green-500" size={28} />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <p className="text-base">+91 6294599756</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-6 text-3xl justify-center">
              <a
                href="https://www.linkedin.com/in/rohitmondal14/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-transform hover:scale-110"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/i-am-Ro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-transform hover:scale-110"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="mailto:rohitmondal1482002@gmail.com"
                className="hover:text-red-500 transition-transform hover:scale-110"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a
                href="https://wa.me/916294599756"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-transform hover:scale-110"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer islightmode={islightmode} />
    </div>
  );
};

export default Contact;
