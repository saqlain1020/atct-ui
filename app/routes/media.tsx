import { PageBanner } from "~/components/PageBanner";
import { SectionHeading } from "~/components/SectionHeading";
import { Heart, BookOpen, GraduationCap } from "lucide-react";

export function meta() {
  return [
    { title: "Media Center - ATC Technology Consultants" },
    { name: "description", content: "Latest news, events, gallery, and CSR initiatives from ATC Technology Consultants." },
  ];
}

const newsItems = [
  {
    title: "Neuenhauser Automation for Spinning Mills",
    description: "Neuenhauser automation solutions are transforming spinning mills with cutting-edge technology for improved efficiency and reduced labor costs.",
    date: "2019",
    image: "/media/news/neuenhauser-automation.png",
  },
  {
    title: "Neuenhauser Automation at Ibrahim Fibre",
    description: "Successful deployment of Neuenhauser automation systems at Ibrahim Fibre, one of Pakistan's leading textile manufacturers.",
    date: "2019",
    image: "/media/news/neuenhauser-automation.png",
  },
  {
    title: "ATC actively participates at ITMA International 2019",
    description: "ATC Technology Consultants represented Pakistan at the prestigious ITMA International textile machinery exhibition, showcasing our global partnerships.",
    date: "2019",
    image: "/media/news/itma-2019.png",
  },
  {
    title: "Agent of the Year for 2018",
    description: "We are pleased to inform our customers and principals that we have been honoured by RIETER as AGENT OF THE YEAR FOR 2018. We look forward to continue to serve you to the best of our abilities.",
    date: "2018",
    image: "/media/news/agent-of-the-year.png",
  },
];

const galleries = [
  { name: "Ibrahim Fibre", image: "/media/gallery/ibrahim-fibre.jpg" },
  { name: "SAP Go-Live Closing Ceremony", image: "/media/gallery/sap-go-live.jpg" },
  { name: "ITMA Milan 2015", image: "/media/gallery/itma-milan-2015.jpg" },
  { name: "Textile Asia 19", image: "/media/gallery/textile-asia.jpg" },
  { name: "IGATEX 2014", image: "/media/gallery/igatex-2014.jpg" },
  { name: "50 Years Of Celebrations", image: "/media/gallery/50-years.jpg" },
  { name: "ATC - Stall", image: "/media/gallery/atc-stall.jpg" },
  { name: "Yarn Expo", image: "/media/gallery/yarn-expo.jpg" },
  { name: "IGATEX 2018", image: "/media/gallery/igatex-2018.jpg" },
  { name: "RCO Symposium", image: "/media/gallery/rco-symposium.jpg" },
];

export default function MediaCenter() {
  return (
    <>
      <PageBanner
        title="Media Center"
        subtitle="News, Events, Gallery & CSR"
        image="/media/news/banner.jpg"
      />

      {/* News & Events */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="News & Events" />
          <div className="space-y-8 mt-12">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-[#FFC107] hover:shadow-lg transition-all group"
              >
                <div className="md:flex">
                  <div className="md:w-72 h-48 md:h-auto shrink-0 relative overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-[#FFC107]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="text-[#FFC107] text-xs font-bold uppercase tracking-wider bg-[#111111] inline-block px-3 py-1 rounded-sm self-start">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-[#111111] mt-4 group-hover:text-[#FFC107] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Gallery" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {galleries.map((g) => (
              <div
                key={g.name}
                className="group rounded-xl overflow-hidden border-2 border-transparent hover:border-[#FFC107] hover:shadow-lg transition-all cursor-pointer bg-white"
              >
                <div className="h-52 relative overflow-hidden border-b-4 border-[#111111] group-hover:border-[#FFC107] transition-colors">
                  <img
                    src={g.image}
                    alt={g.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#111111]/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#111111] group-hover:text-[#FFC107] transition-colors">
                    {g.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Corporate Social Responsibility" subtitle="We have always cared deeply about the Textiles community" />

          <div className="mt-12 space-y-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FFC107]/20 rounded-lg flex items-center justify-center border border-[#FFC107]/30">
                  <Heart className="w-7 h-7 text-[#FFC107]" />
                </div>
                <h2 className="text-2xl font-bold text-[#111111]">Private-Public Partnerships</h2>
              </div>
              <ul className="space-y-4 text-gray-700 leading-relaxed bg-gray-50 p-8 rounded-xl border-l-4 border-[#FFC107]">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[#111111] rounded-full mt-2.5 shrink-0" />
                  <span>ATC Technology Consultants has always promoted new technologies.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[#111111] rounded-full mt-2.5 shrink-0" />
                  <span>The Group's employees are continuously engaged in acquiring knowledge through seminars, training workshops and written materials.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[#111111] rounded-full mt-2.5 shrink-0" />
                  <span>Due to the ATC Technology Consultants' standing in textile sector, its Chairman is a member of Textile Engineering Board since 2002, which formulates policies for Engineering Industry. He is also a member on the Federal Textile Board since 2003, which devises textile policies.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[#111111] rounded-full mt-2.5 shrink-0" />
                  <span>At National Textile University, Faisalabad, ATC Technology Consultants has had the honor of serving on the Academic Council and Board of Governors.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FFC107]/20 rounded-lg flex items-center justify-center border border-[#FFC107]/30">
                  <BookOpen className="w-7 h-7 text-[#FFC107]" />
                </div>
                <h2 className="text-2xl font-bold text-[#111111]">Textile Engineering Education</h2>
              </div>
              <ul className="space-y-4 text-gray-700 leading-relaxed bg-gray-50 p-8 rounded-xl border-l-4 border-[#111111]">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mt-2.5 shrink-0" />
                  <span>ATC Technology Consultants is the only indenting company who is on the Board of National Textile University, Faisalabad – country's only Textile University. Our Chairman is the Founder Member and on Board of Governor since 2001.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mt-2.5 shrink-0" />
                  <span>ATC Technology Consultants is likewise institutional member of Textile Institute of Pakistan, degree awarding Textile College in Karachi.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mt-2.5 shrink-0" />
                  <span>ATC Technology Consultants is promoting Adult Literacy Programme throughout Textile Industry in collaboration with All Pakistan Textile Mills Association.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mt-2.5 shrink-0" />
                  <span>ATC Technology Consultants was, through its Chairman, on the Board of Governor of Pakistan Institute of Management, the oldest management institute of Pakistan (2003-2005).</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mt-2.5 shrink-0" />
                  <span>ATC Technology Consultants Chairman was heading the National Advisory Committee affiliated body of the Textile Institute of Manchester from the year 1988 – 2000. He was also heading the Textile Institute of Manchester (Pakistan Section) from 1978 – 1988.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mt-2.5 shrink-0" />
                  <span>ATC Technology Consultants has always offered merit-based scholarship to deserving candidates from humble backgrounds, and then sought to provide them with opportunities within the Group, as well as the larger industry.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FFC107]/20 rounded-lg flex items-center justify-center border border-[#FFC107]/30">
                  <GraduationCap className="w-7 h-7 text-[#FFC107]" />
                </div>
                <h2 className="text-2xl font-bold text-[#111111]">Textile Education</h2>
              </div>
              <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm">
                <div className="h-64 relative border-b-4 border-[#FFC107]">
                  <img
                    src="/media/csr/csr.jpg"
                    alt="Textile education"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#111111]/40" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#111111] mb-4">
                    Faisalabad Textile College and National Textile University
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    ATC Technology Consultants has been involved with the National Textile
                    University from its inception as a Textile College. We have always offered
                    merit scholarship to deserving candidates from more humble backgrounds and
                    then sought to provide them with opportunities within our Group of companies
                    as well as the larger industry. Ever since the promotion of the College to
                    University status we have had the honor of serving on the Academic Council
                    and Board of Governors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
