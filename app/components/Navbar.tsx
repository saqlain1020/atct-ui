import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "public/logo.jpg";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Clients", to: "/clients" },
  { label: "Partners", to: "/partners" },
  { label: "Media", to: "/media" },
  { label: "Contact Us", to: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (children: { to: string }[]) =>
    children.some((c) => location.pathname.startsWith(c.to));

  const navbarBg =
    isHome && !scrolled && !mobileOpen ? "navbar-transparent" : "navbar-solid";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img src={logo} alt="ATC Logo" className="w-[52px] h-[52px]" />

          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold uppercase tracking-wider transition-all duration-200 ${isParentActive(item.children)
                      ? "text-gold-500"
                      : "text-white/90 hover:text-white"
                      }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-all group-hover:translate-y-0.5" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-250">
                    <div className="bg-white rounded-lg shadow-2xl border border-gray-100 py-2 min-w-[240px] overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-5 py-3 text-sm transition-all duration-150 border-l-3 ${isActive(child.to)
                            ? "text-gold-500 bg-green-50/60 font-semibold border-gold-500"
                            : "text-gray-700 hover:bg-gray-50 hover:text-slate-950 hover:pl-6 border-transparent"
                            }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                    className={`px-4 py-2 text-[13px] font-semibold uppercase tracking-wider transition-all duration-200 relative ${isActive(item.to!)
                      ? "text-gold-500"
                      : "text-white/90 hover:text-white"
                      }`}
                >
                  {item.label}
                  {isActive(item.to!) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              )
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white hover:text-gold-500 p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-slate-950/98 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="flex items-center justify-between w-full px-3 py-3 text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${openDropdown === item.label ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="ml-4 border-l-2 border-gold-500/30 pl-4 py-1 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`block px-3 py-2.5 text-sm rounded-lg transition-all ${isActive(child.to)
                          ? "text-gold-500 font-semibold bg-gold-500/5"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to!}
                  className={`block px-3 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all ${isActive(item.to!)
                    ? "text-gold-500 bg-gold-500/5"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                    }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
