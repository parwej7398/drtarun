"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import doctor from "@/public/Assets/Doctor.jpeg";
import AboutUs from "./about-us/page";
import TestimonialsPage from "./testimonial/page";

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

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

  const handleCallNow = () => {
    window.location.href = "tel:9780890425";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentDate = getCurrentDate();
    const currentTime = getCurrentTime();

    const message = `🏥 *Appointment Request* 🏥%0A%0A
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

  return (
    <>
      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes underline {
          0% { transform: scaleX(0); opacity: 0; }
          50% { transform: scaleX(0.5); opacity: 0.5; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .animate-underline {
          animation: underline 0.8s ease-out forwards;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      {/* Premium White Theme Background */}
      <div className="relative bg-white overflow-hidden">
        {/* Background decorative elements - subtle */}
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        
        {/* Floating particles - subtle */}
        <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
            {/* Left Side - Content */}
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full mb-6 md:mb-8 shadow-lg animate-float">
                <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-white"></span>
                </span>
                <span className="text-[10px] md:text-sm font-semibold tracking-wide">
                  ✨ Gold Medalist Urologist ✨
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Expert Urology
                <br />
                Care with{""}
                {/* ✅ Premium Animated Name with Gradient and Underline */}
                <div className="relative inline-block mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-amber-600 to-gray-900 bg-[length:200%_auto] animate-gradient font-bold">
                    Dr. Tarun Mittal
                  </span>
                  {/* Premium Animated Underline */}
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full animate-underline"></div>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full group-hover:w-full transition-all duration-700"></div>
                </div>
              </h1>

              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-4">
                MBBS, MS (Chandigarh) | MCH Urology (Gold Medalist, PGIMS
                Rohtak)
                <br />
                <span className="text-amber-600 font-semibold">
                  Gold Medalist
                </span>{" "}
                in Urology with expertise in kidney stones, prostate problems,
                erectile dysfunction, and male infertility treatments.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center lg:justify-start mb-6 md:mb-10">
                <Link
                  href="/appointment"
                  className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
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
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>

                <button
                  onClick={handleCallNow}
                  className="flex items-center justify-center gap-2 md:gap-3 bg-gray-50 text-gray-800 px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-amber-400 hover:bg-amber-50 group"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-amber-500 group-hover:scale-110 transition-transform duration-300"
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
                  Call Now
                </button>
              </div>

              
            </div>

            {/* Right Side - Doctor Image */}
            <div className="flex-1 order-1 lg:order-2 w-full relative z-10">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-2xl md:rounded-3xl">
                    <div className="relative">
                      <Image
                        src={doctor}
                        alt="Dr. Tarun Mittal - Gold Medalist Urologist"
                        className="w-full h-[28rem] lg:h-[40rem] object-cover rounded-xl md:rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                        width={800}
                        height={600}
                        priority
                      />

                      {/* Doctor Info Badge */}
                      <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 bg-gradient-to-r from-gray-900/95 via-slate-900/95 to-gray-800/95 backdrop-blur-sm text-white px-3 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-white/20">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex-1 min-w-[150px]">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg
                                  className="w-3 h-3 md:w-4 md:h-4 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="font-bold text-sm md:text-xl leading-tight">
                                  Dr. Tarun Mittal
                                </h3>
                                <p className="text-[10px] md:text-xs text-amber-300">
                                  MCH Urology (Gold Medalist)
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 md:gap-2 mt-1 md:mt-2">
                              <span className="text-[8px] md:text-xs bg-white/20 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
                                Kidney Stones
                              </span>
                              <span className="text-[8px] md:text-xs bg-white/20 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
                                Prostate
                              </span>
                              <span className="text-[8px] md:text-xs bg-white/20 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
                                ED Treatment
                              </span>
                              <span className="text-[8px] md:text-xs bg-white/20 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
                                Infertility
                              </span>
                            </div>
                          </div>
                          <div className="text-right border-l border-white/30 pl-2 md:pl-4 ml-1 md:ml-2">
                            <div className="text-amber-400 text-[10px] md:text-sm font-semibold whitespace-nowrap">
                              ⭐ Gold Medalist
                            </div>
                            <div className="text-[8px] md:text-xs text-amber-300 whitespace-nowrap">
                              PGIMS Rohtak
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Gold Medalist Badge */}
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 md:px-3 md:py-1.5 rounded-lg shadow-lg">
                        <div className="flex items-center gap-0.5 md:gap-1">
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-[8px] md:text-xs font-semibold whitespace-nowrap">
                            Gold Medalist
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Available Badge */}
                  <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-2 md:p-4 animate-bounce">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="relative">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-[10px] md:text-sm font-bold text-gray-800 whitespace-nowrap">
                        Available for Consultation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Premium glow decorations - subtle */}
                <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Stats Section - Premium White Cards */}
          <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Stat 1 - Success Rate */}
              <div className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative p-5 md:p-6 lg:p-8 text-center">
                  <div className="mb-3 md:mb-4 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-1 md:mb-2">
                    98%
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-1 md:mb-2">
                    Success Rate
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    in advanced urology treatments
                  </p>
                  <div className="mt-3 md:mt-4 h-0.5 md:h-1 w-8 md:w-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto group-hover:w-16 md:group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>

              {/* Stat 2 - Happy Patients */}
              <div className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative p-5 md:p-6 lg:p-8 text-center">
                  <div className="mb-3 md:mb-4 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-1 md:mb-2">
                    5000+
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-1 md:mb-2">
                    Happy Patients
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    successfully treated
                  </p>
                  <div className="mt-3 md:mt-4 h-0.5 md:h-1 w-8 md:w-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto group-hover:w-16 md:group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>

              {/* Stat 3 - Years Experience */}
              <div className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative p-5 md:p-6 lg:p-8 text-center">
                  <div className="mb-3 md:mb-4 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.372 1.24.588 1.81l-3.973 2.886a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.973-2.886a1 1 0 00-1.175 0l-3.973 2.886c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-1 md:mb-2">
                    15+
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-1 md:mb-2">
                    Years Experience
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    in urology specialization
                  </p>
                  <div className="mt-3 md:mt-4 h-0.5 md:h-1 w-8 md:w-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto group-hover:w-16 md:group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave - subtle */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg
            className="w-full h-10 md:h-16 text-gray-400"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </div>

      {/* Appointment Popup - Premium White */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl md:rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto relative animate-slideUp shadow-2xl">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Close"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-gray-600"
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

            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-5 md:p-6 rounded-t-2xl md:rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Quick Appointment
                  </h3>
                  <p className="text-amber-100 text-xs md:text-sm">
                    with Dr. Tarun Mittal (Gold Medalist Urologist)
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-4 md:space-y-5">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-3 md:p-4 border border-amber-100">
                <p className="text-[10px] md:text-xs text-amber-600 font-semibold mb-2">
                  📋 Booking Details (Auto-filled)
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500">Date</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-800">
                      {getCurrentDate()}
                    </p>
                  </div>
                  <div className="w-px h-6 md:h-8 bg-amber-200"></div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500">Time</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-800">
                      {getCurrentTime()}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
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
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your age"
                />
              </div>

              <div className="bg-amber-50 rounded-xl p-3 md:p-4">
                <p className="text-xs md:text-sm font-semibold text-amber-900">
                  👨‍⚕️ Dr. Tarun Mittal
                </p>
                <p className="text-[10px] md:text-xs text-gray-600">
                  MBBS, MS (Chandigarh) | MCH Urology (Gold Medalist, PGIMS
                  Rohtak)
                </p>
                <p className="text-[10px] md:text-xs text-gray-600 mt-1">
                  📍 Near Narula Diagnostic Centre, Medical College Mor,
                  Rohtak-124001 (Haryana)
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.75 13.96c.25.13.41.39.41.68 0 .36-.29.66-.66.66h-8c-.36 0-.66-.29-.66-.66 0-.29.16-.55.41-.68L12 9.33l4.75 4.63z" />
                </svg>
                Confirm Appointment via WhatsApp
              </button>

              <p className="text-[10px] md:text-xs text-gray-500 text-center mt-3 md:mt-4">
                Date & Time will be auto-recorded when you submit. Your
                information will be sent via WhatsApp.
              </p>
            </form>
          </div>
        </div>
      )}

      <AboutUs/>
      <TestimonialsPage/>
    </>
  );
};

export default HeroSection;