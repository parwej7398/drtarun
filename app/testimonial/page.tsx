"use client";

import Link from "next/link";
import { useState } from "react";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Kidney Stone Patient",
    rating: 5,
    text: "Dr. Tarun Mittal successfully treated my kidney stones using laser surgery. His expertise and care were exceptional. I'm completely pain-free now. Highly recommended!",
    treatment: "Kidney Stone Removal",
    location: "Charkhi Dadri",
    date: "March 15, 2026",
    verified: true,
  },
  {
    id: 2,
    name: "Suresh Sharma",
    role: "Prostate Patient",
    rating: 5,
    text: "I had severe prostate problems for years. After consulting Dr. Tarun Mittal, my condition improved dramatically. The free OPD camp was very helpful. God bless him!",
    treatment: "Prostate Treatment",
    location: "Loharu",
    date: "February 28, 2026",
    verified: true,
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "ED Treatment Patient",
    rating: 5,
    text: "Dr. Tarun Mittal is a gold medalist urologist who truly cares about his patients. He explained everything clearly and treated my erectile dysfunction effectively. Feeling confident again!",
    treatment: "Erectile Dysfunction",
    location: "Bhiwani",
    date: "March 5, 2026",
    verified: true,
  },
  {
    id: 4,
    name: "Mahesh Yadav",
    role: "Urinary Problem Patient",
    rating: 5,
    text: "I was suffering from painful urination for months. Dr. Tarun Mittal diagnosed the issue accurately and provided the right treatment. The staff is very supportive.",
    treatment: "Urinary Tract Infection",
    location: "Dadri",
    date: "February 20, 2026",
    verified: true,
  },
  {
    id: 5,
    name: "Ramesh Gupta",
    role: "Infertility Patient",
    rating: 5,
    text: "After struggling with infertility for 5 years, we consulted Dr. Tarun Mittal. His treatment helped us become parents. We are forever grateful to him!",
    treatment: "Male Infertility",
    location: "Charkhi Dadri",
    date: "March 10, 2026",
    verified: true,
  },
  {
    id: 6,
    name: "Pawan Kumar",
    role: "Bladder Stone Patient",
    rating: 5,
    text: "Excellent doctor with great knowledge. He performed my bladder stone surgery successfully. The recovery was quick and painless. Thank you Dr. Tarun Mittal!",
    treatment: "Bladder Stone",
    location: "Mahendragarh",
    date: "January 25, 2026",
    verified: true,
  },
];

const treatmentCategories = [
  { name: "All", value: "all", count: testimonials.length },
  { name: "Kidney Stone", value: "Kidney Stone Removal", count: testimonials.filter(t => t.treatment === "Kidney Stone Removal").length },
  { name: "Prostate", value: "Prostate Treatment", count: testimonials.filter(t => t.treatment === "Prostate Treatment").length },
  { name: "ED", value: "Erectile Dysfunction", count: testimonials.filter(t => t.treatment === "Erectile Dysfunction").length },
  { name: "Infertility", value: "Male Infertility", count: testimonials.filter(t => t.treatment === "Male Infertility").length },
];

const stats = {
  totalPatients: "5000+",
  successRate: "98%",
  experience: "15+",
  averageRating: "4.9",
};

// Rating Stars Component
const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTestimonials = selectedCategory === "all"
    ? testimonials
    : testimonials.filter(t => t.treatment === selectedCategory);

  const featuredTestimonial = testimonials[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative text-center py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.372 1.24.588 1.81l-3.973 2.886a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.973-2.886a1 1 0 00-1.175 0l-3.973 2.886c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold tracking-white">PATIENT SUCCESS STORIES</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Patients Say
            </span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Real stories from patients who found relief under Dr. Tarun Mittal's expert care
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 text-center hover:-translate-y-1 transition duration-300">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">{stats.totalPatients}</div>
            <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Patients Treated</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 text-center hover:-translate-y-1 transition duration-300">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">{stats.successRate}</div>
            <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 text-center hover:-translate-y-1 transition duration-300">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">{stats.experience}</div>
            <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Years Exp.</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 text-center hover:-translate-y-1 transition duration-300">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">{stats.averageRating}</div>
            <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Quote */}
            <div className="relative bg-gradient-to-br from-blue-700 to-indigo-800 p-6 sm:p-8 md:p-12 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white/20 mx-auto mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="text-white/70 text-base sm:text-lg italic">"Excellence in Urology Care"</div>
                <div className="w-12 h-0.5 bg-white/30 mx-auto my-3 sm:my-4"></div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] sm:text-xs text-white/90">Verified Patient</span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="p-6 sm:p-8 md:p-12 bg-white">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3 sm:mb-4">
                <RatingStars rating={featuredTestimonial.rating} />
                <span className="bg-blue-100 text-blue-700 text-[10px] sm:text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  {featuredTestimonial.treatment}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg italic mb-4 sm:mb-6">
                "{featuredTestimonial.text}"
              </p>
              <div className="border-t border-gray-100 pt-3 sm:pt-4">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800">{featuredTestimonial.name}</h4>
                <p className="text-blue-600 text-xs sm:text-sm font-medium">{featuredTestimonial.role}</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-gray-400">
                  <span>📍 {featuredTestimonial.location}</span>
                  {featuredTestimonial.date && <span>📅 {featuredTestimonial.date}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 py-4 sm:py-6 border-y border-gray-200 bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl">
          {treatmentCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid - Full Text No Truncation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          More Patient Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredTestimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col"
            >
              <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <RatingStars rating={testimonial.rating} />
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    {testimonial.treatment.length > 15 ? testimonial.treatment.substring(0, 12) + "..." : testimonial.treatment}
                  </span>
                </div>
                
                {/* ✅ Full Text - No line-clamp, No truncation */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 flex-1">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-100 pt-3 mt-auto">
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-blue-600 text-[10px] sm:text-xs font-medium">{testimonial.role}</p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-gray-400 text-[10px] sm:text-xs">📍 {testimonial.location}</span>
                    {testimonial.verified && (
                      <span className="inline-flex items-center gap-0.5 text-green-500 text-[10px] sm:text-xs">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
              Ready to Experience Expert Urology Care?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6">
              Join thousands of satisfied patients who trusted Dr. Tarun Mittal
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:9780890425"
                className="bg-white text-blue-600 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Now: 9780890425
              </a>
              <Link
                href="/appointment"
                className="bg-transparent border-2 border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Book Online Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-[11px] sm:text-xs lg:text-sm text-gray-700 whitespace-nowrap">Gold Medalist Urologist</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-[11px] sm:text-xs lg:text-sm text-gray-700 whitespace-nowrap">15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-[11px] sm:text-xs lg:text-sm text-gray-700 whitespace-nowrap">5000+ Surgeries</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-[11px] sm:text-xs lg:text-sm text-gray-700 whitespace-nowrap">Ex. Registrar - PGIMS</span>
          </div>
        </div>
      </div>
    </div>
  );
}