import { useState } from "react";
import { PageBanner } from "~/components/PageBanner";
import { X } from "lucide-react";

export function meta() {
  return [
    { title: "Our Team - ATC Technology Consultants" },
    { name: "description", content: "Meet the leadership team at ATC Technology Consultants." },
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

export default function OurTeam() {
  const [activeBio, setActiveBio] = useState<number | null>(null);

  return (
    <>
      <PageBanner
        title="Our Team"
        image="/images/photo-1522071820081-009f0129c71c-w1920.jpg"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map((member, idx) => (
              <button
                key={member.name}
                onClick={() => setActiveBio(idx)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-left group cursor-pointer"
              >
                <div className="h-72 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-atc-green transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-atc-red font-medium text-sm mt-1">{member.role}</p>
                  <p className="text-gray-500 text-xs mt-2">Click to read bio</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeBio !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setActiveBio(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveBio(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={team[activeBio].image}
                alt={team[activeBio].name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-navy-900">{team[activeBio].name}</h3>
                <p className="text-atc-red font-semibold">{team[activeBio].role}</p>
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
