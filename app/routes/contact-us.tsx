import { PageBanner } from "~/components/PageBanner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function meta() {
  return [
    { title: "Contact Us - ATC Technology Consultants" },
    { name: "description", content: "Get in touch with ATC Technology Consultants." },
  ];
}

export default function ContactUs() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Send us a message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atc-green/50 focus:border-atc-green outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atc-green/50 focus:border-atc-green outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atc-green/50 focus:border-atc-green outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atc-green/50 focus:border-atc-green outline-none transition-colors resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-atc-green hover:bg-atc-green-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-atc-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">Head Office - Karachi</h3>
                    <p className="text-gray-600 text-sm mt-1">ATC Technology Consultants (Pvt) Ltd<br />Karachi, Pakistan</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-atc-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">Regional Office - Lahore</h3>
                    <p className="text-gray-600 text-sm mt-1">ATC Technology Consultants (Pvt) Ltd<br />Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-atc-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">Phone</h3>
                    <p className="text-gray-600 text-sm mt-1">+92-21-XXXXXXX</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-atc-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">Email</h3>
                    <p className="text-gray-600 text-sm mt-1">info@atcpak.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-atc-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">Working Hours</h3>
                    <p className="text-gray-600 text-sm mt-1">Mon – Fri: 9:00 AM – 5:00 PM<br />Sat – Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-48 rounded-xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Map location"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
