import { PageBanner } from "~/components/PageBanner";
import { Eye, Target, Lightbulb } from "lucide-react";

export function meta() {
  return [
    { title: "Overview - ATC Technology Consultants" },
    { name: "description", content: "ATC Technology Consultants company overview, values, vision and business philosophy." },
  ];
}

export default function Overview() {
  return (
    <>
      <PageBanner
        title="Overview"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                ATC Technology Consultants (Private) Limited is a fully owned subsidiary of ATC
                Holdings dedicated to supplying innovative technological solutions to the
                Pakistani Textile Industry. With over 50 years of experience the Company has a
                strong brand and network of sales and service engineers to meet the diverse
                requirements of its clients ranging from BMR (Balancing Modernization and
                Replacement) solutions, new machinery, plant automation to green technologies.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80"
                alt="ATC Office"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            ATC Technology Consultants' Values and Principles
          </h2>
          <div className="w-16 h-1 bg-atc-red mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-lg bg-atc-green/10 flex items-center justify-center shrink-0">
              <Lightbulb className="w-7 h-7 text-atc-green" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Where Our Story Began</h3>
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
            <div className="w-14 h-14 rounded-lg bg-atc-green/10 flex items-center justify-center shrink-0">
              <Eye className="w-7 h-7 text-atc-green" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Our Vision</h3>
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
            <div className="w-14 h-14 rounded-lg bg-atc-green/10 flex items-center justify-center shrink-0">
              <Target className="w-7 h-7 text-atc-green" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Business Philosophy</h3>
              <p className="text-gray-700 leading-relaxed text-xl font-semibold">
                Quality Buyers and Quality Suppliers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image band */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
          alt="Team working"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-bold text-center px-4">
            50+ Years of Trusted Excellence
          </p>
        </div>
      </section>
    </>
  );
}
