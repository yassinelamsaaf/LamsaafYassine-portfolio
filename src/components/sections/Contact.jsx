import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
export const Contact = () => {

    const [formData,setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })


 //api key

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(()=>{
            alert("Message sent");
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }).catch(() => alert("Oops! Something went wrong, Please try again."));
    }

  return (
    <section
      id="contact"
      className="py-24 scroll-mt-24"
    >
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-2xl px-6">
          <header className="mb-10 text-center">
            <p className="text-sm font-medium text-blue-300">Contact</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Get In Touch
            </h2>
          </header>

          <form action="" className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                value={formData.name}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="Your Message"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
