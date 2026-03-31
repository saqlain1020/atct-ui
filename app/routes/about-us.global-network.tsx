import { PageBanner } from "~/components/PageBanner";
import { SectionHeading } from "~/components/SectionHeading";
import { Building2, Monitor, Users } from "lucide-react";

export function meta() {
  return [
    { title: "Global Network - ATC Technology Consultants" },
    { name: "description", content: "ATC global network of offices, clients and service providers." },
  ];
}

const customerCities = [
  "Lahore", "Muzafargarh", "Multan", "Karachi", "Hyderabad",
  "Faisalabad", "Bhawalnagar", "Peshawar", "Chakwal", "Rawalpindi",
  "Swabi", "Islamabad", "Gujrat", "Kotri", "Gujranwala",
  "Jhang", "Lodhran", "Sialkot", "Vehari", "D.G. Khan",
  "Gadoon", "Amazai",
];

const serviceCountries = [
  "China", "Taiwan", "Malaysia", "Indonesia", "Bangladesh", "Turkey",
  "Uzbekistan", "Vietnam", "Bahrain", "Iran", "Egypt",
];

const principalCountries = [
  "USA", "Germany", "China", "Switzerland", "Italy", "India",
  "Singapore", "Thailand", "Mexico", "Portugal", "Algeria", "Nigeria", "Taiwan",
];

export default function GlobalNetwork() {
  return (
    <>
      <PageBanner
        title="Global Network"
        image="/images/photo-1526778548025-fa2f459cd5c1-w1920.jpg"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-atc-green" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg">Head Office</h3>
                <p className="text-gray-600 mt-1">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-atc-green" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg">Regional Office</h3>
                <p className="text-gray-600 mt-1">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-72 rounded-2xl overflow-hidden relative">
            <img
              src="/images/photo-1524661135-423995f22d0b-w1920.jpg"
              alt="World map"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-900/30 flex items-center justify-center">
              <p className="text-white text-xl font-bold bg-navy-900/50 backdrop-blur-sm px-6 py-3 rounded-lg">
                Global Presence Across 25+ Countries
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="City Wise Customer Coverage" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {customerCities.map((city) => (
              <div
                key={city}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-sm font-medium text-navy-800 hover:border-atc-green/50 transition-colors"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Services Provider Globally</h3>
              <div className="flex flex-wrap gap-2">
                {serviceCountries.map((c) => (
                  <span key={c} className="bg-navy-900 text-white text-sm px-4 py-2 rounded-full">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Principal Locations</h3>
              <div className="flex flex-wrap gap-2">
                {principalCountries.map((c) => (
                  <span key={c} className="bg-atc-green text-white text-sm px-4 py-2 rounded-full">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-atc-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Offices and Team</h3>
              <p className="text-gray-700 leading-relaxed">
                A dedicated team of over 256 qualified sales and service engineers based in
                Karachi, Lahore, Multan and Islamabad enables us to ensure effective
                customer coverage throughout the country.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
              <Monitor className="w-6 h-6 text-atc-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Business Systems</h3>
              <p className="text-gray-700 leading-relaxed">
                ATC has invested in SAP BUSINESS ONE in order to achieve excellence in CRM
                (Customer Relationship Management) as well as effective Financial and Business Management.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-atc-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">HR Systems</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in investing in our people and are also an equal opportunity employer promoting diversity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
