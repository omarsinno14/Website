import React, { useEffect } from "react";
import imghero from "/imghero.png";
import emailjs from "@emailjs/browser";

// ✅ Your EmailJS config:
const SERVICE_ID = "service_5qvutac";           // your service id
const TEMPLATE_ID = "template_atvj9pf";         // your template id
const PUBLIC_KEY  = "blGy2tXpv-WNNGx50";        // your EmailJS Public Key

export default function Contact() {
  // Initialize EmailJS once (recommended)
  useEffect(() => {
    try {
      emailjs.init({ publicKey: PUBLIC_KEY });
    } catch (e) {
      console.error("EmailJS init failed:", e);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    // Must match variables defined in your EmailJS template
    const params = {
      name: fd.get("name") || "",
      email: fd.get("email") || "",
      message: fd.get("message") || "",
    };

    try {
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
      if (res?.status === 200) {
        alert("Message sent! I’ll get back to you shortly.");
        formEl.reset();
      } else {
        throw new Error(`EmailJS unexpected status: ${res?.status || "unknown"}`);
      }
    } catch (err) {
      const msg = err?.text || err?.message || "Failed to send. Please try again.";
      console.error("EmailJS send error:", err);
      alert(
        "Failed to send. If you just set things up, double-check your Public Key, Template ID, and Allowed Origins.\n\n" +
        `Details: ${msg}`
      );
    }
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative"
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        <aside className="w-full md:w-1/2 relative flex items-center justify-center md:block">
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px]
            sm:w-[#400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary 
            to-brand-primary shadow-[0_0_70px_rgba(147,51,234,0.7)]"
          ></div>
          <img
            src={imghero}
            alt="Contact illustration"
            className="h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative mx-auto md:mx-0"
          />
        </aside>

        {/*Contact Form*/}
        <section className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
              Contact Me
            </h2>
            <p className="mt-3 text-center text-gray-400 text-sm">
              You can reach me directly at{" "}
              <a
                href="mailto:O.sinno@outlook.com"
                className="text-brand-secondary hover:underline"
              >
                O.sinno@outlook.com
              </a>{" "}
              or by phone at{" "}
              <a href="tel:+15143860156" className="text-brand-secondary hover:underline">
                +1 (514) 386-0156
              </a>
              . Let’s connect on{" "}
              <a
                href="https://www.linkedin.com/in/omar-sinno-70235b238/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-secondary hover:underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </header>

          {/* Only addition: onSubmit handler. Inputs/markup are unchanged. */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-brand-secondary 
            hover:shadow-[0_0_40px_rgba(147,51,234,0.7)] rounded-full text-lg"
            >
              Send Message
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}
