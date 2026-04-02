import { Link } from "react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-[#FFC107] font-bold text-2xl">ATC</span>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              ATC Technology Consultants (Private) Limited is a fully owned subsidiary of
              ATC Holdings dedicated to supplying innovative technological solutions to the
              Pakistani Textile Industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#FFC107] transition-colors">About Us</Link></li>
              <li><Link to="/clients" className="hover:text-[#FFC107] transition-colors">Clients</Link></li>
              <li><Link to="/partners" className="hover:text-[#FFC107] transition-colors">Global Partners</Link></li>
              <li><Link to="/services" className="hover:text-[#FFC107] transition-colors">Services</Link></li>
              <li><Link to="/media" className="hover:text-[#FFC107] transition-colors">Media Center</Link></li>
              <li><Link to="/contact" className="hover:text-[#FFC107] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#FFC107] shrink-0" />
                <span>Head Office: Karachi, Pakistan</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#FFC107] shrink-0" />
                <span>Regional Office: Lahore, Pakistan</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#FFC107] shrink-0" />
                <span>+92-21-XXXXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-[#FFC107] shrink-0" />
                <span>info@atcpak.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} ATC Technology Consultants (Private) Limited. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
