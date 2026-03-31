import { PageBanner } from "~/components/PageBanner";

export function meta() {
  return [
    { title: "News and Events - ATC Technology Consultants" },
    { name: "description", content: "Latest news and events from ATC Technology Consultants." },
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

export default function NewsAndEvents() {
  return (
    <>
      <PageBanner
        title="News and Events"
        image="/media/news/banner.jpg"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group"
              >
                <div className="md:flex">
                  <div className="md:w-72 h-48 md:h-auto shrink-0 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-atc-red text-xs font-semibold uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-navy-900 mt-2 group-hover:text-atc-green transition-colors">
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
    </>
  );
}
