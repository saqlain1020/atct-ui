import { PageBanner } from "~/components/PageBanner";
import { Wrench } from "lucide-react";

export function meta() {
  return [
    { title: "After Sales Service - ATC Technology Consultants" },
    { name: "description", content: "Dedicated after-sales service team providing complete support over the product lifecycle." },
  ];
}

const skillSet = [
  { principal: "Suessen/CDS", engineers: 7 },
  { principal: "Novibra", engineers: 7 },
  { principal: "Bracker", engineers: 5 },
  { principal: "Peass", engineers: 6 },
  { principal: "Jakob Muller", engineers: 4 },
  { principal: "Saurer Twisting Solutions", engineers: 3 },
  { principal: "Fadis", engineers: 5 },
  { principal: "Gaston", engineers: 1 },
  { principal: "GoFront", engineers: 5 },
  { principal: "Sunwin", engineers: 1 },
  { principal: "Sohler/Neuenhauser", engineers: 10 },
  { principal: "Unitop", engineers: 3 },
  { principal: "KEB", engineers: 3 },
];

export default function AfterSalesService() {
  return (
    <>
      <PageBanner
        title="After Sales Service"
        subtitle="Efficiency and Results"
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-atc-green/10 rounded-lg flex items-center justify-center shrink-0">
                <Wrench className="w-7 h-7 text-atc-green" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our teams of engineers offer complete services to our Customers and Global
                Partners in Pakistan as well as overseas. At ATC we believe in building long
                lasting relationships which is why we have a dedicated after-sales service team
                that is not just limited to providing spare parts but offers help and solutions
                over the product's entire lifecycle. Our customer service ranges from technology
                support to repair services to customer training.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=80"
                alt="Engineering support"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-navy-900 mb-6">Service Skill Set</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm">Principals</th>
                  <th className="text-center px-6 py-4 font-semibold text-sm">Certified Engineers</th>
                </tr>
              </thead>
              <tbody>
                {skillSet.map((row, idx) => (
                  <tr key={row.principal} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-3.5 text-sm text-gray-800 font-medium">{row.principal}</td>
                    <td className="px-6 py-3.5 text-sm text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-atc-green/10 text-atc-green font-bold text-sm">
                        {row.engineers}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
