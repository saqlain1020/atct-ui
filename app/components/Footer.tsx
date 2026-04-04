import { Link } from "react-router";
import { MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-gold-500 font-bold text-2xl">ATC</span>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              ATC Technology (ATCT) provides full sales service to an extensive customer base
              throughout the textile industry in Pakistan. Core competence: B2B sales and
              marketing of textile solutions with added value through technological services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link to="/clients" className="hover:text-gold-500 transition-colors">Clients</Link></li>
              <li><Link to="/partners" className="hover:text-gold-500 transition-colors">Global Partners</Link></li>
              <li><Link to="/media" className="hover:text-gold-500 transition-colors">Media Center</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                <span>South Office: 801, 8th Floor, Dulara Business Centre, Khalid Bin Waleed Road, Karachi-75100</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                <span>North Office: 43-B, 3rd Floor, Broadway, Phase 8, D.H.A., Lahore</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                <span>atc.karachi@atct.pk</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                <span>nazish.hafeez@atct.pk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} ATC Technology Consultants (Private) Limited. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
