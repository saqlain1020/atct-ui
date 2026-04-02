import { PageBanner } from "~/components/PageBanner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function meta() {
  return [
    { title: "Contact Us - ATC Technology Consultants" },
    { name: "description", content: "Get in touch with ATC Technology Consultants." },
  ];
}

export default function Contact() {
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
              <h2 className="text-2xl font-bold text-[#111111] mb-6">Send us a message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-0 focus:border-[#FFC107] outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-0 focus:border-[#FFC107] outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-0 focus:border-[#FFC107] outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-0 focus:border-[#FFC107] outline-none transition-colors resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#FFC107] hover:bg-[#e0a800] text-[#111111] font-bold px-8 py-3 rounded-sm transition-colors w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-6">Get in touch</h2>
              <div className="space-y-6 bg-gray-50 p-8 rounded-xl border-l-4 border-[#FFC107]">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#FFC107]/20 rounded-lg flex items-center justify-center shrink-0 border border-[#FFC107]/30">
                    <MapPin className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111]">Head Office - Karachi</h3>
                    <p className="text-gray-600 text-sm mt-1">ATC Technology Consultants (Pvt) Ltd<br />Karachi, Pakistan</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#FFC107]/20 rounded-lg flex items-center justify-center shrink-0 border border-[#FFC107]/30">
                    <MapPin className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111]">Regional Office - Lahore</h3>
                    <p className="text-gray-600 text-sm mt-1">ATC Technology Consultants (Pvt) Ltd<br />Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#FFC107]/20 rounded-lg flex items-center justify-center shrink-0 border border-[#FFC107]/30">
                    <Phone className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111]">Phone</h3>
                    <p className="text-gray-600 text-sm mt-1">+92-21-XXXXXXX</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#FFC107]/20 rounded-lg flex items-center justify-center shrink-0 border border-[#FFC107]/30">
                    <Mail className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111]">Email</h3>
                    <p className="text-gray-600 text-sm mt-1">info@atcpak.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#FFC107]/20 rounded-lg flex items-center justify-center shrink-0 border border-[#FFC107]/30">
                    <Clock className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111]">Working Hours</h3>
                    <p className="text-gray-600 text-sm mt-1">Mon – Fri: 9:00 AM – 5:00 PM<br />Sat – Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-48 rounded-xl overflow-hidden relative border-2 border-gray-200">
                <img
                  src="/images/photo-1524661135-423995f22d0b-w800.jpg"
                  alt="Map location"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#111111]/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
