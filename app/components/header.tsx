"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });
  const pathname = usePathname();

  // Get current date and time
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentDate = getCurrentDate();
    const currentTime = getCurrentTime();

    const message = `🏥 *Appointment Request with Dr. Tarun Mittal* 🏥%0A%0A
*Patient Details:*%0A
👤 *Name:* ${formData.name}%0A
📅 *Age:* ${formData.age} years%0A
📆 *Booking Date:* ${currentDate}%0A
⏰ *Booking Time:* ${currentTime}%0A%0A
*Doctor:* Dr. Tarun Mittal (Gold Medalist Urologist)%0A
*Location:* Near Narula Diagnostic Centre, Medical College Mor, Rohtak-124001 (Haryana)`;

    const whatsappNumber = "919780890425";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappLink, "_blank");
    setIsPopupOpen(false);

    setFormData({
      name: "",
      age: "",
    });
  };

  // Navigation items with their paths
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "Blogs", path: "/blogs" },
    { name: "Gallery", path: "/gallery" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Global styles - moved outside header to avoid nesting */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>

      <header className="bg-white shadow-xl sticky top-0 z-50">
        {/* Top Bar - Premium Contact Bar (Desktop Only) */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-2.5 px-4 hidden lg:block relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=2000')] opacity-5 bg-cover"></div>
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm relative z-10">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span className="tracking-wide">
                  Near Narula Diagnostic Centre, Medical College Mor,
                  Rohtak-124001 (Haryana)
                </span>
              </div>
              <div className="h-4 w-px bg-white/20"></div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <span className="tracking-wide">9780890425</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-300 font-medium">
                  Emergency: 24/7
                </span>
              </span>
              <div className="h-4 w-px bg-white/20"></div>
              <span className="text-white/80 text-xs">
                ⭐ Gold Medalist Urologist
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-24">
            {/* Mobile - Menu Button (Left Side) */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                aria-label="Menu"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <svg
                  className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Logo Section - Desktop */}
            <Link
              href="/"
              className="hidden lg:flex items-center group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent tracking-tight">
                    Dr. Tarun
                  </span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
                    Mittal
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] font-semibold text-blue-600 tracking-wide">
                    GOLD MEDALIST UROLOGIST
                  </span>
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span className="text-[11px] text-gray-500">
                    MCH (PGIMS Rohtak)
                  </span>
                </div>
              </div>
            </Link>

            {/* Logo Section - Mobile */}
            <Link href="/" className="flex lg:hidden items-center">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="ml-2">
                <span className="text-base font-bold text-gray-800">
                  Dr. Tarun Mittal
                </span>
                <span className="text-[9px] text-blue-600 block -mt-0.5">
                  Gold Medalist Urologist
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative text-gray-700 font-semibold hover:text-blue-600 transition-all duration-300 group ${
                    isActive(item.path) ? "text-blue-600" : ""
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-300 ${
                      isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* ✅ CTA Button - Desktop - NOW LINKS TO APPOINTMENT PAGE */}
            <div className="hidden lg:block">
              <Link
                href="/appointment"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-7 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book Appointment
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </div>

            {/* ✅ Mobile - Appointment Button - NOW LINKS TO APPOINTMENT PAGE */}
            <div className="flex lg:hidden items-center">
              <Link
                href="/appointment"
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-xl font-semibold text-xs shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-1.5"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          {isMenuOpen && (
            <div className="lg:hidden py-5 border-t border-gray-100 animate-slideDown">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-gray-700 font-semibold hover:text-blue-600 hover:pl-5 transition-all duration-300 py-3 rounded-xl hover:bg-blue-50 ${
                      isActive(item.path)
                        ? "text-blue-600 bg-blue-50 pl-5"
                        : "pl-4"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* ✅ Added Appointment link in mobile menu */}
                <Link
                  href="/appointment"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 font-semibold hover:text-blue-600 hover:pl-5 transition-all duration-300 py-3 rounded-xl hover:bg-blue-50 pl-4"
                >
                  Appointment
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ⚠️ Popup Modal - Kept for quick appointment (optional) */}
      {/* You can remove this if you only want to use the appointment page */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto relative animate-slideUp shadow-2xl">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Quick Appointment
                  </h3>
                  <p className="text-blue-100 text-sm">
                    with Dr. Tarun Mittal (Urologist)
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                <p className="text-xs text-blue-600 font-semibold mb-2">
                  📋 Booking Details (Auto-filled)
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="text-sm font-semibold text-gray-800">
                      {getCurrentDate()}
                    </p>
                  </div>
                  <div className="w-px h-8 bg-blue-200"></div>
                  <div>
                    <p className="text-xs text-gray-500">Time</p>
                    <p className="text-sm font-semibold text-gray-800">
                      {getCurrentTime()}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="0"
                  max="120"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your age"
                />
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm font-semibold text-blue-900">
                  👨‍⚕️ Dr. Tarun Mittal
                </p>
                <p className="text-xs text-gray-600">
                  MBBS, MS (Chandigarh) | MCH Urology (Gold Medalist, PGIMS
                  Rohtak)
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  📍 Near Narula Diagnostic Centre, Medical College Mor,
                  Rohtak-124001 (Haryana)
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Confirm Appointment via WhatsApp
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Date & Time will be auto-recorded when you submit. Your
                information will be sent via WhatsApp.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;