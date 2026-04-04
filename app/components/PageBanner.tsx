interface PageBannerProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Robust gradient overlay so text ALWAYS stands out */}
          <div className="absolute inset-0 bg-slate-950/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-950/40" />
        </>
      ) : (
        <div className="absolute inset-0 page-banner" />
      )}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium drop-shadow-sm">
            {subtitle}
          </p>
        )}
        <div className="mt-8 w-24 h-1.5 bg-gold-500 mx-auto rounded-full shadow-lg" />
      </div>
    </section>
  );
}
