"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/Assets/logo.png";

// Types
interface FormData {
  name: string;
  age: string;
}

// Constants - moved outside component for better performance
const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Testimonial", path: "/testimonial" },
  { name: "Blogs", path: "/blogs" },
  { name: "Gallery", path: "/gallery" },
] as const;

const WHATSAPP_NUMBER = "919780890425";

// Utility functions - pure functions for SSR compatibility
const getCurrentDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getCurrentTime = (): string => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
  });
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");
  const pathname = usePathname();

  // Hydration-safe date/time initialization
  useEffect(() => {
    setCurrentDate(getCurrentDate());
    setCurrentTime(getCurrentTime());

    // Update time every minute
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const date = currentDate || getCurrentDate();
    const time = currentTime || getCurrentTime();

    const message = `🏥 *Appointment Request with Dr. Tarun Mittal* 🏥%0A%0A
*Patient Details:*%0A
👤 *Name:* ${formData.name}%0A
📅 *Age:* ${formData.age} years%0A
📆 *Booking Date:* ${date}%0A
⏰ *Booking Time:* ${time}%0A%0A
*Doctor:* Dr. Tarun Mittal (Gold Medalist Urologist)%0A
*Location:* Near Narula Diagnostic Centre, Medical College Mor, Rohtak-124001 (Haryana)`;

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappLink, "_blank");
    setIsPopupOpen(false);

    setFormData({
      name: "",
      age: "",
    });
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Global styles */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section - Desktop */}
            <Link href="/" className="hidden lg:flex items-center group">
              {/* <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div> */}
              <div className="ml-4 relative">
                <Image
                  src={logo}
                  alt="Dr. Tarun Mittal - Gold Medalist Urologist"
                  width={200}
                  height={70}
                  className="object-contain rounded-full w-18 h-18 transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Logo Section - Mobile (Left Side - Full Rounded) */}
            <Link href="/" className="flex lg:hidden items-center">
               <div className="ml-4 relative">
                <Image
                  src={logo}
                  alt="Dr. Tarun Mittal - Gold Medalist Urologist"
                  width={200}
                  height={70}
                  className="object-contain rounded-full w-12 h-12 transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Mobile - Menu Button (Right Side) */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                aria-label="Menu"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {NAV_ITEMS.map((item) => (
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
                  />
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
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
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          {isMenuOpen && (
            <div className="lg:hidden py-5 border-t border-gray-100 animate-slideDown">
              <nav className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => (
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
                {/* Book Appointment at the bottom of mobile menu */}
                <div className="pt-4 mt-2 border-t border-gray-200">
                  <Link
                    href="/appointment"
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full"
                  >
                    <span className="relative z-10 flex items-center gap-2">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Book Appointment
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Popup Modal */}
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
                      {currentDate || "Loading..."}
                    </p>
                  </div>
                  <div className="w-px h-8 bg-blue-200" />
                  <div>
                    <p className="text-xs text-gray-500">Time</p>
                    <p className="text-sm font-semibold text-gray-800">
                      {currentTime || "Loading..."}
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