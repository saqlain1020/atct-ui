import { useState } from "react";
import { PageBanner } from "~/components/PageBanner";
import { SectionHeading } from "~/components/SectionHeading";
import { Eye, Target, Lightbulb, Building2, Monitor, Users, X, HeartHandshake } from "lucide-react";
import { useScrollReveal } from "~/hooks/useScrollReveal";

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

  useScrollReveal();

  return (
    <>
      <PageBanner
        title="About Us"
        image="/images/photo-1497366216548-37526070297c-w1920.jpg"
      />

      {/* Overview Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-sm font-bold text-gold-600 tracking-widest uppercase mb-3">
                Company Overview
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Driving the Pakistani Textile Industry Forward.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                ATC Technology (ATCT) provides full sales service to an extensive customer base
                throughout the textile industry in Pakistan. With over 50 years of experience,
                our core competence is B2B sales and marketing of textile solutions with added
                value through technological services. Having two main offices in Karachi and Lahore,
                we maintain a strong country-wide presence with a dedicated network of sales and
                service engineers.
              </p>
              <p className="text-lg text-slate-900 leading-relaxed font-semibold">
                ATCT under new leadership carrying same legacy and high level of commitment
                to provide full Sales and Service to Industry.
              </p>
            </div>
            <div className="reveal reveal-delay-2 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 border-[6px] border-white/20 rounded-[2.5rem] z-10 pointer-events-none"></div>
              <img
                src="/images/photo-1497366811353-6870744d04b2-w700.jpg"
                alt="ATC Office"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center reveal mb-16">
            <h2 className="text-sm font-bold text-gold-600 tracking-widest uppercase mb-3">
              Core Principles
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Values That Define Us
            </h3>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6 items-start reveal reveal-delay-1 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gold-50 flex items-center justify-center shrink-0 border border-gold-200">
                <Lightbulb className="w-8 h-8 text-gold-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Where Our Story Began</h3>
                <p className="text-slate-600 leading-relaxed">
                  ATC Technology Consultants (Private) Limited was established in 1964 to
                  provide textile technology to the Pakistani Industry. Our core competence
                  is B2B sales and marketing of textile solutions with added value through
                  technological services. The company has a diversified focus on long-term
                  relationships with global partners, with operations ranging from textile
                  machinery & equipment to technological components & after-sales services.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start reveal reveal-delay-2 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gold-50 flex items-center justify-center shrink-0 border border-gold-200">
                <Eye className="w-8 h-8 text-gold-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-900 leading-relaxed font-semibold mb-4 text-lg">
                  To be the Leading B2B Supplier of Textile Systems, Technological
                  Components, Green Technologies & Services to the Textile Industry of Pakistan.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  ATC Technology Consultants (Private) Limited's vision is to continue to
                  provide the Textile Industry with the highest level of customer and
                  technical service. In pursuit of this, we have always believed in building
                  up professional teams. Through our dedicated sales and service people, we
                  are able to meet the challenges of the future.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start reveal reveal-delay-3 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gold-50 flex items-center justify-center shrink-0 border border-gold-200">
                <Target className="w-8 h-8 text-gold-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Business Philosophy</h3>
                <p className="text-slate-600 leading-relaxed text-xl font-medium">
                  Quality Buyers and Quality Suppliers
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start reveal reveal-delay-4 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gold-50 flex items-center justify-center shrink-0 border border-gold-200">
                <HeartHandshake className="w-8 h-8 text-gold-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Total Customer Satisfaction</h3>
                <p className="text-slate-600 leading-relaxed">
                  We believe in Total Customer Satisfaction and provide after-sales-service
                  through our fully equipped Service Centers in both Lahore and Karachi,
                  deployed with high caliber technicians and integrated ERP/CRM solutions
                  to better manage our customers' needs throughout Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center reveal mb-16">
            <h2 className="text-sm font-bold text-gold-600 tracking-widest uppercase mb-3">
              Leadership
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Meet Our Executive Team
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {team.map((member, idx) => (
              <button
                key={member.name}
                onClick={() => setActiveBio(idx)}
                className="group reveal bg-slate-50 rounded-[2rem] p-4 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left w-full flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-full md:w-48 h-48 relative overflow-hidden rounded-3xl shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-4 md:p-0 text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-gold-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-500 font-semibold text-sm mt-2 uppercase tracking-wide">{member.role}</p>
                  <span className="inline-block mt-4 text-sm font-medium text-gold-600 border border-gold-200 bg-gold-50 px-4 py-1.5 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    Read Bio
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center reveal mb-16">
            <h2 className="text-sm font-bold text-gold-500 tracking-widest uppercase mb-3">
              Infrastructure
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Global Network
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 flex items-start gap-6 hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 bg-gold-500/20 rounded-2xl flex items-center justify-center shrink-0 border border-gold-500/30">
                <Building2 className="w-7 h-7 text-gold-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xl">South Office — Karachi</h3>
                <p className="text-slate-400 mt-2 font-medium text-sm">801, 8th Floor, Dulara Business Centre,<br />Maniya Society, Khalid Bin Waleed Road,<br />Karachi-75100, Pakistan</p>
                <p className="text-gold-400 mt-2 text-sm">atc.karachi@atct.pk</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 flex items-start gap-6 hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                <Building2 className="w-7 h-7 text-slate-300" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xl">North Office — Lahore</h3>
                <p className="text-slate-400 mt-2 font-medium text-sm">43-B, 3rd Floor, Broadway, Phase 8,<br />D.H.A., Lahore,<br />Pakistan</p>
                <p className="text-gold-400 mt-2 text-sm">nazish.hafeez@atct.pk</p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="reveal">
              <h3 className="text-2xl font-bold text-white mb-6">Services Provider Globally</h3>
              <div className="flex flex-wrap gap-2">
                {serviceCountries.map((c) => (
                  <span key={c} className="bg-slate-800 text-slate-300 text-sm px-5 py-2.5 rounded-full border border-slate-700">{c}</span>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <h3 className="text-2xl font-bold text-white mb-6">Principal Locations</h3>
              <div className="flex flex-wrap gap-3">
                {principalCountries.map((c) => (
                  <span key={c} className="bg-gold-500/20 text-gold-400 border border-gold-500/30 font-semibold text-sm px-5 py-2.5 rounded-full">{c}</span>
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
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gold-500 mix-blend-multiply opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-3xl md:text-5xl font-black text-center px-4 tracking-tight drop-shadow-xl">
            50+ Years of Trusted Excellence
          </p>
        </div>
      </section>

      {/* Bio Modal */}
      {activeBio !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all duration-300"
          onClick={() => setActiveBio(null)}
        >
          <div
            className="bg-white rounded-[2.5rem] max-w-3xl w-full max-h-[85vh] overflow-y-auto p-10 md:p-14 relative shadow-2xl"
            style={{ animation: 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveBio(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10 border-b border-slate-100 pb-10">
              <img
                src={team[activeBio].image}
                alt={team[activeBio].name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-lg border border-slate-100"
              />
              <div className="text-center md:text-left pt-2">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{team[activeBio].name}</h3>
                <p className="text-gold-600 font-bold uppercase tracking-wider text-sm">{team[activeBio].role}</p>
              </div>
            </div>
            <div className="text-slate-600 leading-relaxed whitespace-pre-line text-lg font-medium">
              {team[activeBio].bio}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
