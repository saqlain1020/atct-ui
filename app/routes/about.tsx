import { useState } from "react";
import { PageBanner } from "~/components/PageBanner";
import { SectionHeading } from "~/components/SectionHeading";
import { Eye, Target, Lightbulb, Building2, Monitor, Users, X } from "lucide-react";

export function meta() {
  return [
    { title: "About Us - ATC Technology Consultants" },
    { name: "description", content: "ATC Technology Consultants company overview, values, team, and global network." },
  ];
}

const team = [
  {
    name: "Zahid Majeed",
    role: "Chief Executive Officer",
    image: "/images/photo-1560250097-0b93528c311a-w600.jpg",
    bio: `Mr. Zahid Majeed joined National Foods Limited in 1987 and pioneered its transformation from a small food enterprise into a leading foods brand in Pakistan. Since then he has served in various capacities at NFL from heading the Corporate Marketing function to most recently establishing the International Business subsidiary, National Foods DMCC. He also introduced the concept of sustainability by establishing a Corporate Social Responsibility (CSR) platform at NFL. Mr. Zahid Majeed played a significant role in initiating a Public-Private Partnership with UNICEF to launch the first Iodized Salt in the mid 1990's under the CSR umbrella along with various other education, health and nutrition initiatives with focused efforts to address women's empowerment.

Mr. Zahid Majeed is also CEO to ATC Technology Consultants and Associated Environment & Energy Solutions.

Mr. Zahid Majeed studied Philosophy, Politics and Economics at Magdalen College, Oxford University and later acquired a Degree in Textile Technology at University of New South Wales, Australia. Mr. Zahid Majeed is also a certified Director from the Institute of Directors (IoD), London, an International Certification that proves his commitment to the highest standards of Corporate Governance.`,
  },
  {
    name: "Abrar Hasan",
    role: "Director",
    image: "/images/photo-1472099645785-5658abf4ff4e-w600.jpg",
    bio: `Mr. Abrar Hasan has been with National Foods Limited since 1993, where he was later appointed as Chief Executive by the Board of Directors in the year 2000. Under his inspirational leadership and proficient operations management skills, NFL has transformed from a simple recipe producer to a full-fledged foods company. Prior to his joining NFL, Mr. Abrar Hasan was Plant Director at Precision Rubber Products Limited, where he was responsible for overseeing Production and Manufacturing Management.

Mr. Abrar Hasan with his extensive experience and in-depth knowledge has set examples and inspired the NFL team to embrace new technology, discover upcoming marketing trends and invest in human resource development Company wide. He is truly the driving force behind his team of skilled professionals at NFL.

Mr. Abrar Hasan graduated with a bachelor's Degree in Industrial Management with a minor in Industrial Engineering from Purdue University, Indiana, USA.`,
  },
];

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

export default function About() {
  const [activeBio, setActiveBio] = useState<number | null>(null);

  return (
    <>
      <PageBanner
        title="About Us"
        image="/images/photo-1497366216548-37526070297c-w1920.jpg"
      />

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-6">Company Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ATC Technology Consultants (Private) Limited is a fully owned subsidiary of ATC
                Holdings dedicated to supplying innovative technological solutions to the
                Pakistani Textile Industry. With over 50 years of experience the Company has a
                strong brand and network of sales and service engineers to meet the diverse
                requirements of its clients ranging from BMR (Balancing Modernization and
                Replacement) solutions, new machinery, plant automation to green technologies.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border-b-4 border-[#FFC107]">
              <img
                src="/images/photo-1497366811353-6870744d04b2-w700.jpg"
                alt="ATC Office"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Values and Principles" />
          <div className="space-y-12 mt-12">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-lg bg-[#FFC107]/20 flex items-center justify-center shrink-0 border border-[#FFC107]/30">
                <Lightbulb className="w-7 h-7 text-[#FFC107]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#111111] mb-3">Where Our Story Began</h3>
                <p className="text-gray-700 leading-relaxed">
                  ATC Technology Consultants (Private) Limited was established in 1964 to
                  provide textile technology to the Pakistani Industry. The company has
                  diversified focus on long-term relationships with global partners. Its
                  operations range from textile machinery & equipment, technological
                  components & after-sales services.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-lg bg-[#FFC107]/20 flex items-center justify-center shrink-0 border border-[#FFC107]/30">
                <Eye className="w-7 h-7 text-[#FFC107]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#111111] mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed font-semibold mb-3">
                  To be the Leading B2B Supplier of Textile Systems, Technological
                  Components, Green Technologies & Services to the Textile Industry of Pakistan
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ATC Technology Consultants (Private) Limited's vision is to continue to
                  provide the Textile Industry with the highest level of customer and
                  technical service. In pursuit of this, we have always believed in building
                  up professional teams. Through our dedicated sales and service people, we
                  are able to meet the challenges of the future.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-lg bg-[#FFC107]/20 flex items-center justify-center shrink-0 border border-[#FFC107]/30">
                <Target className="w-7 h-7 text-[#FFC107]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#111111] mb-3">Business Philosophy</h3>
                <p className="text-gray-700 leading-relaxed text-xl font-semibold">
                  Quality Buyers and Quality Suppliers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Leadership Team" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {team.map((member, idx) => (
              <button
                key={member.name}
                onClick={() => setActiveBio(idx)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#FFC107] text-left group cursor-pointer"
              >
                <div className="h-72 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#FFC107] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm mt-1">{member.role}</p>
                  <p className="text-gray-400 text-xs mt-2">Click to read bio</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Global Network" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-xl border-l-4 border-[#FFC107] shadow-sm p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FFC107]/20 rounded-lg flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-[#FFC107]" />
              </div>
              <div>
                <h3 className="font-bold text-[#111111] text-lg">Head Office</h3>
                <p className="text-gray-600 mt-1">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border-l-4 border-[#111111] shadow-sm p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-[#111111]" />
              </div>
              <div>
                <h3 className="font-bold text-[#111111] text-lg">Regional Office</h3>
                <p className="text-gray-600 mt-1">Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#111111] mb-6">Services Provider Globally</h3>
              <div className="flex flex-wrap gap-2">
                {serviceCountries.map((c) => (
                  <span key={c} className="bg-[#111111] text-white text-sm px-4 py-2 rounded-sm">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#111111] mb-6">Principal Locations</h3>
              <div className="flex flex-wrap gap-2">
                {principalCountries.map((c) => (
                  <span key={c} className="bg-[#FFC107] text-[#111111] font-medium text-sm px-4 py-2 rounded-sm">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image band */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/images/photo-1551434678-e076c223a692-w1920.jpg"
          alt="Team working"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111111]/80 flex items-center justify-center border-t-4 border-[#FFC107]">
          <p className="text-white text-2xl md:text-3xl font-bold text-center px-4">
            50+ Years of Trusted Excellence
          </p>
        </div>
      </section>

      {/* Bio Modal */}
      {activeBio !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveBio(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative border-t-4 border-[#FFC107]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveBio(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#111111] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={team[activeBio].image}
                alt={team[activeBio].name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#FFC107]"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#111111]">{team[activeBio].name}</h3>
                <p className="text-gray-600 font-semibold">{team[activeBio].role}</p>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
              {team[activeBio].bio}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
