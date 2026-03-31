import { PageBanner } from "~/components/PageBanner";
import { Heart, BookOpen, GraduationCap } from "lucide-react";

export function meta() {
  return [
    { title: "CSR - ATC Technology Consultants" },
    { name: "description", content: "Corporate Social Responsibility initiatives by ATC Technology Consultants." },
  ];
}

export default function CSR() {
  return (
    <>
      <PageBanner
        title="Corporate Social Responsibility"
        subtitle="We have always cared deeply about the Textiles community..."
        image="/media/csr/banner.jpg"
      />

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/media/csr/csr.jpg"
            alt="CSR initiatives"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-atc-green" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900">Private-Public Partnerships</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-atc-red rounded-full mt-2 shrink-0" />
                <span>ATC Technology Consultants has always promoted new technologies.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-atc-red rounded-full mt-2 shrink-0" />
                <span>The Group's employees are continuously engaged in acquiring knowledge through seminars, training workshops and written materials.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-atc-red rounded-full mt-2 shrink-0" />
                <span>Due to the ATC Technology Consultants' standing in textile sector, its Chairman is a member of Textile Engineering Board since 2002, which formulates policies for Engineering Industry. He is also a member on the Federal Textile Board since 2003, which devises textile policies.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-atc-red rounded-full mt-2 shrink-0" />
                <span>At National Textile University, Faisalabad, ATC Technology Consultants has had the honor of serving on the Academic Council and Board of Governors.</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-atc-green" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900">Textile Engineering Education</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-atc-red rounded-full mt-2 shrink-0" />
                <span>ATC Technology Consultants is the only indenting company who is on the Board of National Textile University, Faisalabad – country's only Textile University. Our Chairman is the Founder Member and on Board of Governor since 2001.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-atc-red rounded-full mt-2 shrink-0" />
                <span>ATC Technology Consultants is likewise institutional member of Textile Institute of Pakistan, degree awarding Textile College in Karachi.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-atc-red rounded-full mt-2 shrink-0" />
                <span>ATC Technology Consultants is promoting Adult Literacy Programme throughout Textile Industry in collaboration with All Pakistan Textile Mills Association.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-atc-red rounded-full mt-2 shrink-0" />
                <span>ATC Technology Consultants was, through its Chairman, on the Board of Governor of Pakistan Institute of Management, the oldest management institute of Pakistan (2003-2005).</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-atc-red rounded-full mt-2 shrink-0" />
                <span>ATC Technology Consultants Chairman was heading the National Advisory Committee affiliated body of the Textile Institute of Manchester from the year 1988 – 2000. He was also heading the Textile Institute of Manchester (Pakistan Section) from 1978 – 1988.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-atc-red rounded-full mt-2 shrink-0" />
                <span>ATC Technology Consultants has always offered merit-based scholarship to deserving candidates from humble backgrounds, and then sought to provide them with opportunities within the Group, as well as the larger industry.</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-atc-green/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-atc-green" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900">Textile Education</h2>
            </div>
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <div className="h-48 relative">
                <img
                  src="/media/csr/csr.jpg"
                  alt="Textile education"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/40" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy-900 mb-3">
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
      </section>
    </>
  );
}
