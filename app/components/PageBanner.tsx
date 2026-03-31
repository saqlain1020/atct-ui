interface PageBannerProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/75" />
        </>
      ) : (
        <div className="absolute inset-0 page-banner" />
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
