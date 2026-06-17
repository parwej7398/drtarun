"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/Assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-10"></div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-12 text-gray-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 group cursor-pointer"
            >
             
              <div className="flex items-center gap-3">
                {/* Logo Image */}
                <Image
                  src={logo}
                  alt="Dr. Tarun Mittal - Gold Medalist Urologist"
                  width={160}
                  height={50}
                  className="object-contain w-22 h-22 rounded-full transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Best Urologist in Charkhi Dadri & Rohtak. Expert care for kidney
              stones, prostate problems, and male infertility.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61590271953169"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[#1877f2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/drtarun.mittal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:to-[#bc1888] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/dr-tarun-mittal-33676b410/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[#0a66c2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 rounded-full mt-1"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group ${
                    isActive("/") ? "text-blue-400" : ""
                  }`}
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group ${
                    isActive("/about-us") ? "text-blue-400" : ""
                  }`}
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonial"
                  className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group ${
                    isActive("/testimonial") ? "text-blue-400" : ""
                  }`}
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group ${
                    isActive("/blogs") ? "text-blue-400" : ""
                  }`}
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/appointment"
                  className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group ${
                    isActive("/appointment") ? "text-blue-400" : ""
                  }`}
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Contact Info
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 rounded-full mt-1"></div>
            </h3>

            <div className="mb-4 p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                <span className="text-lg">🏛️</span> OPD Address:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="text-sm">
                    Health Plus OPD, Multi Speciality Clinic, Near Narula
                    Diagnostic Centre, Medical College Mor, Rohtak-124001
                    (Haryana)
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-2 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs font-semibold text-blue-400 mb-2">
                🕒 Clinic Hours:
              </p>
              <div className="space-y-2">
                <div className="text-xs text-gray-300">
                  <span className="font-semibold text-green-400">Tuesday, Thursday & Saturday:</span>
                  <br />
                  9:00 AM - 2:00 PM & 5:00 PM - 6:00 PM
                </div>
                <div className="text-xs text-gray-300">
                  <span className="font-semibold text-green-400">Monday, Wednesday & Friday:</span>
                  <br />
                  5:00 PM - 6:00 PM
                </div>
              </div>
              <p className="text-xs text-blue-400 mt-3">
                📍 Landmark: Near Narula Diagnostic Centre, Medical College
                Mor, Rohtak
              </p>
              <p className="text-xs text-gray-500 mt-1">
                🚗 Easy access from Delhi Road | 🅿️ Parking Available
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <svg
                  className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:9780890425"
                  className="hover:text-blue-400 transition-colors"
                >
                  9780890425
                </a>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Our Location
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 rounded-full mt-1"></div>
            </h3>

            <div className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm shadow-lg">
              <iframe
                title="Dr. Tarun Mittal - Urologist Clinic Rohtak"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.234567890123!2d76.6094936!3d28.8879563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e8c5b5b5b5b%3A0x1234567890abcdef!2sDr.%20Tarun%20Mittal%20%7C%20MCh%20Urologist(Gold%20Medalist)!5e1!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-xl"
              ></iframe>
              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <p className="text-white text-sm font-medium">
                    Dr. Tarun Mittal | MCh Urologist (Gold Medalist)
                  </p>
                </div>
                <button
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/Mkg5T8QzZZ8qtagYA",
                      "_blank",
                    )
                  }
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
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
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dr. Tarun Mittal - Gold Medalist Urologist
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies-policy"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;