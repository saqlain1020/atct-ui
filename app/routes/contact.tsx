import { PageBanner } from "~/components/PageBanner";
import { MapPin, Mail, Clock } from "lucide-react";

export function meta() {
  return [
    { title: "Contact Us - ATC Technology Consultants" },
    { name: "description", content: "Get in touch with ATC Technology Consultants. Sales & Marketing offices in Karachi and Lahore." },
  ];
}

export default function ContactUs() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        image="/images/photo-1486406146926-c627a92ad1ab-w1920.jpg"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition-colors resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-8 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Sales & Marketing Offices</h2>
              <p className="text-slate-500 mb-6">Having two main offices in Karachi and Lahore, we maintain a strong country-wide presence.</p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center shrink-0 border border-gold-200">
                    <MapPin className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">South Office — Karachi</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      801, 8th Floor, Dulara Business Centre,<br />
                      Maniya Society, Khalid Bin Waleed Road,<br />
                      Karachi-75100, Pakistan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center shrink-0 border border-gold-200">
                    <Mail className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Karachi Email</h3>
                    <p className="text-gray-600 text-sm mt-1">atc.karachi@atct.pk</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center shrink-0 border border-gold-200">
                    <MapPin className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">North Office — Lahore</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      43-B, 3rd Floor, Broadway, Phase 8,<br />
                      D.H.A., Lahore,<br />
                      Pakistan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center shrink-0 border border-gold-200">
                    <Mail className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Lahore Email</h3>
                    <p className="text-gray-600 text-sm mt-1">nazish.hafeez@atct.pk</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center shrink-0 border border-gold-200">
                    <Clock className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Working Hours</h3>
                    <p className="text-gray-600 text-sm mt-1">Mon – Fri: 9:00 AM – 5:00 PM<br />Sat – Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
