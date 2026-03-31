import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about-us/overview", "routes/about-us.overview.tsx"),
  route("about-us/our-team", "routes/about-us.our-team.tsx"),
  route("about-us/global-network", "routes/about-us.global-network.tsx"),
  route("clients", "routes/clients.tsx"),
  route("global-partners/machines-and-systems", "routes/global-partners.machines-and-systems.tsx"),
  route("global-partners/technological-components", "routes/global-partners.technological-components.tsx"),
  route("global-partners/after-sales-service", "routes/global-partners.after-sales-service.tsx"),
  route("technical", "routes/technical.tsx"),
  route("media-center/news-and-events", "routes/media-center.news-and-events.tsx"),
  route("media-center/gallery", "routes/media-center.gallery.tsx"),
  route("media-center/csr", "routes/media-center.csr.tsx"),
  route("contact-us", "routes/contact-us.tsx"),
] satisfies RouteConfig;
