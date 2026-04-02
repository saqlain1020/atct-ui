import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "public/logo.jpg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Partners", to: "/partners" },
  { label: "Clients", to: "/clients" },
  { label: "Services", to: "/services" },
  { label: "Media", to: "/media" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navbarBg =
    isHome && !scrolled && !mobileOpen ? "navbar-transparent" : "navbar-solid";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img src={logo} alt="ATC Logo" className="w-[52px] h-[52px] bg-white rounded-sm p-1" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-all duration-200 relative ${
                  isActive(item.to)
                    ? "text-[#FFC107]"
                    : "text-white/90 hover:text-white hover:bg-white/10 rounded-md"
                }`}
              >
                {item.label}
                {isActive(item.to) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#FFC107] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white hover:text-[#FFC107] p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#111111]/98 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`block px-3 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all ${
                isActive(item.to)
                  ? "text-[#FFC107] bg-[#FFC107]/10"
                  : "text-white/90 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
