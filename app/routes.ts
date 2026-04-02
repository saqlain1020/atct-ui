import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("clients", "routes/clients.tsx"),
  route("partners", "routes/partners.tsx"),
  route("services", "routes/services.tsx"),
  route("media", "routes/media.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
