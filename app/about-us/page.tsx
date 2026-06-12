"use client";

import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="relative bg-white overflow-hidden py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 bg-gradient-to-tr from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="absolute top-20 left-10 w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse [animation-delay:1000ms]"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 md:w-1.5 md:h-1.5 bg-purple-400 rounded-full animate-pulse [animation-delay:2000ms]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full shadow-lg mb-3 md:mb-4">
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-white"></span>
              </span>
              <span className="text-[10px] md:text-sm font-semibold tracking-wide">
                ✨ Premier Urology Care Provider ✨
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Meet Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Urology Expert
              </span>
            </h2>
            <div className="w-20 h-0.5 md:h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mt-3"></div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden transform hover:shadow-3xl transition-all duration-500 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 lg:p-10 xl:p-14 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="mb-4 md:mb-6">
                    <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4">
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[10px] md:text-sm font-semibold">Kidney & Urinary Specialist</span>
                    </div>
                    
                    <div className="relative inline-block group">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3 md:mb-4 bg-gradient-to-r from-gray-900 via-amber-600 to-gray-900 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                        Dr. Tarun Mittal
                      </h3>
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full animate-underline"></div>
                      <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full group-hover:w-full transition-all duration-700"></div>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 shadow-md mt-4">
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-[10px] md:text-sm font-semibold whitespace-nowrap">⭐ Gold Medalist - PGIMS Rohtak</span>
                    </div>
                  </div>

                  <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gradient-to-r from-amber-50/50 to-orange-50/50 rounded-xl">
                    <h4 className="text-xs md:text-sm font-semibold text-amber-700 mb-2">📜 Qualifications</h4>
                    <ul className="space-y-1 text-xs md:text-sm text-gray-700">
                      <li className="flex items-center gap-2"><span className="text-green-500">✓</span> MBBS (Chandigarh)</li>
                      <li className="flex items-center gap-2"><span className="text-green-500">✓</span> MS (Chandigarh)</li>
                      <li className="flex items-center gap-2"><span className="text-green-500">✓</span> MCH Urology (Gold Medalist, PGIMS Rohtak)</li>
                      <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Ex. Registrar - GMCH - 32 Chandigarh</li>
                      <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Ex. Registrar - PGIMS Rohtak</li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                    Dr. Tarun Mittal is a renowned Urologist specializing in kidney stones, prostate problems, erectile dysfunction, and male infertility. With years of experience at top institutions like PGIMS Rohtak and GMCH Chandigarh, he provides world-class urological care for both men and women.
                  </p>

                  <div className="mb-4 md:mb-6 p-3 md:p-4 bg-white rounded-xl shadow-md border border-gray-100">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-800 mb-2">📍 OPD Address</h4>
                    <p className="text-xs md:text-sm text-gray-600">Near Narula Diagnostic Centre, Medical College Mor, Rohtak-124001 (Haryana)</p>
                    <div className="flex flex-wrap gap-3 md:gap-4 mt-2">
                      <p className="text-xs md:text-sm text-gray-600">📞 9780890425</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                    <div className="text-center p-2 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50">
                      <div className="text-xl md:text-2xl font-bold text-amber-600">15+</div>
                      <div className="text-[10px] md:text-xs text-gray-500">Years Experience</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50">
                      <div className="text-xl md:text-2xl font-bold text-blue-600">5K+</div>
                      <div className="text-[10px] md:text-xs text-gray-500">Happy Patients</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50">
                      <div className="text-xl md:text-2xl font-bold text-yellow-600">🥇</div>
                      <div className="text-[10px] md:text-xs text-gray-500">Gold Medalist</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200">
                    <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></div>
                    <div>
                      <p className="text-base md:text-lg font-handwriting text-gray-800" style={{ fontFamily: "cursive" }}>Dr. Tarun Mittal</p>
                      <p className="text-[10px] md:text-xs text-gray-500">MCH Urology (Gold Medalist)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10 xl:p-14 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="mb-6 md:mb-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 md:p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <h3 className="text-lg md:text-xl font-bold">🏆 Excellence in Urology Care</h3>
                      <div className="bg-white/20 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">PREMIUM</div>
                    </div>
                    <p className="text-xs md:text-sm opacity-95 mb-2 md:mb-3">Advanced, personalized urological treatments with compassionate care and proven results.</p>
                    <div className="flex items-center gap-2 text-xs md:text-sm mt-2 md:mt-3">
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>✅ Gold Medalist Expertise</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm mt-1">
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>✅ State-of-the-Art Technology</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    Urology Services
                  </h3>
                  <div className="space-y-2 md:space-y-3 max-h-[350px] md:max-h-[400px] overflow-y-auto pr-1 md:pr-2 custom-scroll">
                    <div className="group flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-xl hover:bg-amber-50 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-amber-200 hover:shadow-md">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-semibold text-gray-800">Kidney Stones, Cancer, Obstruction (PUJO)</h4>
                        <p className="text-[10px] md:text-xs text-gray-500">Comprehensive kidney care</p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-xl hover:bg-emerald-50 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-emerald-200 hover:shadow-md">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-semibold text-gray-800">Prostate Enlargement & Cancer</h4>
                        <p className="text-[10px] md:text-xs text-gray-500">Advanced prostate care</p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-xl hover:bg-purple-50 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200 hover:shadow-md">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-semibold text-gray-800">Bladder Issues & Infections</h4>
                        <p className="text-[10px] md:text-xs text-gray-500">Complete bladder care</p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-xl hover:bg-red-50 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-red-200 hover:shadow-md">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-semibold text-gray-800">Penis & Testicular Problems</h4>
                        <p className="text-[10px] md:text-xs text-gray-500">Male reproductive health</p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-orange-200 hover:shadow-md">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-semibold text-gray-800">Erectile Dysfunction (ED)</h4>
                        <p className="text-[10px] md:text-xs text-gray-500">Male sexual health solutions</p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-xl hover:bg-teal-50 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-teal-200 hover:shadow-md">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-semibold text-gray-800">Male Infertility</h4>
                        <p className="text-[10px] md:text-xs text-gray-500">Fertility treatments</p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-xl hover:bg-cyan-50 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-cyan-200 hover:shadow-md">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-semibold text-gray-800">Urinary Obstruction & UTI</h4>
                        <p className="text-[10px] md:text-xs text-gray-500">Complete urinary care</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-6 p-3 md:p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl md:rounded-2xl border border-indigo-100">
                    <h4 className="text-sm md:text-md font-bold text-indigo-700 mb-2 md:mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                      </svg>
                      Advanced Specializations
                    </h4>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-2 py-1.5 md:px-3 md:py-2 rounded-lg shadow-sm">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-[10px] md:text-sm font-medium text-gray-700">Endourology</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-2 py-1.5 md:px-3 md:py-2 rounded-lg shadow-sm">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-[10px] md:text-sm font-medium text-gray-700">Uro-oncology</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-2 py-1.5 md:px-3 md:py-2 rounded-lg shadow-sm">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-[10px] md:text-sm font-medium text-gray-700">Reconstructive Urology</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-2 py-1.5 md:px-3 md:py-2 rounded-lg shadow-sm">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-[10px] md:text-sm font-medium text-gray-700">AV-fistula Surgery</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-2 py-1.5 md:px-3 md:py-2 rounded-lg shadow-sm">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-[10px] md:text-sm font-medium text-gray-700">Incontinence Surgery</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-2 py-1.5 md:px-3 md:py-2 rounded-lg shadow-sm">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-[10px] md:text-sm font-medium text-gray-700">Renal Transplant Surgery</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-6 p-3 md:p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl md:rounded-2xl border border-green-100">
                    <h4 className="text-sm md:text-md font-bold text-green-700 mb-2 md:mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      🕐 OPD Timings
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 md:gap-3 bg-white/70 backdrop-blur-sm p-2 md:p-3 rounded-lg">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full mt-1.5"></div>
                        <div>
                          <span className="text-xs md:text-sm font-semibold text-gray-800">Tuesday, Thursday & Saturday:</span>
                          <span className="text-xs md:text-sm text-gray-600 ml-1 md:ml-2">9:00 AM - 2:00 PM & 5:00 PM - 6:00 PM</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 bg-white/70 backdrop-blur-sm p-2 md:p-3 rounded-lg">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full mt-1.5"></div>
                        <div>
                          <span className="text-xs md:text-sm font-semibold text-gray-800">Monday, Wednesday & Friday:</span>
                          <span className="text-xs md:text-sm text-gray-600 ml-1 md:ml-2">5:00 PM - 6:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ✅ Book Appointment Button - Now links to /appointment page */}
                  <div className="mt-4 md:mt-6">
                    <Link
                      href="/appointment"
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                    >
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-2 right-2 lg:top-4 lg:right-4">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full text-[8px] md:text-xs lg:text-sm font-semibold shadow-lg flex items-center gap-1 md:gap-2 animate-bounce">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.372 1.24.588 1.81l-3.973 2.886a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.973-2.886a1 1 0 00-1.175 0l-3.973 2.886c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                </svg>
                ⭐ Gold Medalist Urologist
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/80 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md border border-gray-100">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[10px] md:text-xs lg:text-sm text-gray-700 whitespace-nowrap">Gold Medalist - PGIMS Rohtak</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/80 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md border border-gray-100">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[10px] md:text-xs lg:text-sm text-gray-700 whitespace-nowrap">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/80 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md border border-gray-100">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[10px] md:text-xs lg:text-sm text-gray-700 whitespace-nowrap">Ex. Registrar - PGIMS & GMCH</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes underline {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .animate-underline {
          animation: underline 0.8s ease-out forwards;
        }
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #ea580c);
          border-radius: 10px;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;