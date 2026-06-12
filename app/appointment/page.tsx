"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    specialization: "",
    reason: "",
    preferredDate: "",
    preferredTime: "",
    preferredDay: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Get day name from date
  const getDayFromDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // Check if selected date has available slots
  const isDateAvailable = (dateString: string) => {
    if (!dateString) return true;
    const day = getDayFromDate(dateString);
    if (day === "Tuesday" || day === "Thursday" || day === "Saturday") {
      return true;
    }
    if (day === "Monday" || day === "Wednesday" || day === "Friday") {
      return true;
    }
    return false;
  };

  const getAvailableTimeSlots = (dateString: string) => {
    if (!dateString) return [];
    const day = getDayFromDate(dateString);
    
    if (day === "Tuesday" || day === "Thursday" || day === "Saturday") {
      return [
        "9:00 AM - 10:00 AM",
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "12:00 PM - 1:00 PM",
        "1:00 PM - 2:00 PM",
        "5:00 PM - 6:00 PM",
      ];
    }
    
    if (day === "Monday" || day === "Wednesday" || day === "Friday") {
      return ["5:00 PM - 6:00 PM"];
    }
    
    return [];
  };

  const specializations = [
    { value: "Endourology", label: "Endourology", description: "Kidney stones, RIRS, PCNL, URS", icon: "🪨" },
    { value: "Uro-oncology", label: "Uro-oncology", description: "Prostate, Bladder & Kidney Cancer", icon: "🎗️" },
    { value: "Reconstructive Urology", label: "Reconstructive Urology", description: "Urethral stricture, Hypospadias repair", icon: "🔧" },
    { value: "AV-fistula Surgery", label: "AV-fistula Surgery", description: "Dialysis access for kidney failure", icon: "💉" },
    { value: "Incontinence Surgery", label: "Incontinence Surgery", description: "TOT, TVT, Urinary incontinence", icon: "💧" },
    { value: "Renal Transplant Surgery", label: "Renal Transplant Surgery", description: "Kidney transplant - Living/Deceased donor", icon: "🫀" },
  ];

  const reasonsBySpecialization: Record<string, string[]> = {
    "Endourology": [
      "Kidney Stones", "Ureteric Stones", "Bladder Stones", "PUJ Obstruction",
      "RIRS (Retrograde Intrarenal Surgery)", "PCNL (Percutaneous Nephrolithotomy)",
      "URS (Ureteroscopy)", "Laser Lithotripsy",
    ],
    "Uro-oncology": [
      "Prostate Cancer", "Bladder Cancer", "Kidney Cancer", "Testicular Cancer",
      "Penile Cancer", "Robotic Cancer Surgery", "Laparoscopic Cancer Surgery", "Cancer Screening",
    ],
    "Reconstructive Urology": [
      "Urethral Stricture", "Hypospadias Repair", "Urethroplasty", "Urethrocutaneous Fistula",
      "Ureteral Stricture", "Vesicovaginal Fistula (VVF)", "Bladder Augmentation",
    ],
    "AV-fistula Surgery": [
      "AV Fistula Creation", "AV Fistula Revision", "AV Fistula Thrombosis",
      "Dialysis Access Management", "Permacath Insertion", "Vascular Access for Dialysis",
    ],
    "Incontinence Surgery": [
      "Stress Urinary Incontinence (SUI)", "Urge Incontinence", "Mixed Incontinence",
      "TOT Sling Procedure", "TVT Sling Procedure", "Artificial Urinary Sphincter (AUS)",
      "Male Sling Procedure", "Sacral Neuromodulation",
    ],
    "Renal Transplant Surgery": [
      "Living Donor Kidney Transplant", "Deceased Donor Kidney Transplant",
      "ABO Incompatible Transplant", "Pre-transplant Evaluation",
      "Post-transplant Follow-up", "Immunosuppression Management",
    ],
  };

  // ✅ Fixed: Correct event types
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "specialization") {
      setFormData((prev) => ({ ...prev, [name]: value, reason: "" }));
    } else if (name === "preferredDate") {
      setFormData((prev) => ({ ...prev, [name]: value, preferredTime: "", preferredDay: getDayFromDate(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ✅ Fixed: Correct FormEvent type with proper import
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const currentDate = getCurrentDate();
    const currentTime = getCurrentTime();
    const selectedDay = getDayFromDate(formData.preferredDate);

    let timingInfo = "";
    if (selectedDay === "Tuesday" || selectedDay === "Thursday" || selectedDay === "Saturday") {
      timingInfo = "9:00 AM - 2:00 PM & 5:00 PM - 6:00 PM";
    } else if (selectedDay === "Monday" || selectedDay === "Wednesday" || selectedDay === "Friday") {
      timingInfo = "5:00 PM - 6:00 PM";
    }

    const message = `🏥 *NEW APPOINTMENT REQUEST* 🏥%0A%0A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*📋 PATIENT DETAILS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📅 *Age:* ${formData.age} years
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*🩺 MEDICAL DETAILS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏥 *Specialization:* ${formData.specialization}
🎯 *Reason:* ${formData.reason}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*📆 APPOINTMENT DETAILS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 *Preferred Date:* ${formData.preferredDate || "Not specified"} (${selectedDay})
⏰ *Preferred Time:* ${formData.preferredTime || "Not specified"}
🕐 *Clinic Hours:* ${timingInfo || "As per availability"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*📝 ADDITIONAL INFO*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 *Message:* ${formData.message || "No message provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*📅 Request Date:* ${currentDate}
*⏰ Request Time:* ${currentTime}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*👨‍⚕️ Dr. Tarun Mittal* 
*🏆 Gold Medalist Urologist*
*📍 Location:* Near Narula Diagnostic Centre, Medical College Mor, Rohtak-124001 (Haryana)`;

    const whatsappNumber = "919780890425";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappLink, "_blank");
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      age: "",
      phone: "",
      email: "",
      specialization: "",
      reason: "",
      preferredDate: "",
      preferredTime: "",
      preferredDay: "",
      message: "",
    });
  };

  const availableTimeSlots = getAvailableTimeSlots(formData.preferredDate);
  const isDateValid = formData.preferredDate ? isDateAvailable(formData.preferredDate) : true;
  const selectedSpecialization = specializations.find(s => s.value === formData.specialization);
  const availableReasons = formData.specialization ? reasonsBySpecialization[formData.specialization] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg mb-4">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">BOOK APPOINTMENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Schedule Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Consultation
            </span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you within 24 hours
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Clinic Timings Banner */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="text-center">
              <div className="font-semibold text-blue-800 mb-1">Tuesday, Thursday & Saturday</div>
              <div className="text-gray-600">🕐 9:00 AM - 2:00 PM & 5:00 PM - 6:00 PM</div>
            </div>
            <div className="w-px h-10 bg-blue-200 hidden md:block"></div>
            <div className="text-center">
              <div className="font-semibold text-blue-800 mb-1">Monday, Wednesday & Friday</div>
              <div className="text-gray-600">🕐 5:00 PM - 6:00 PM</div>
            </div>
            <div className="w-px h-10 bg-blue-200 hidden md:block"></div>
            <div className="text-center">
              <div className="font-semibold text-red-600 mb-1">Sunday</div>
              <div className="text-gray-500">🚫 Closed</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Doctor Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Dr. Tarun Mittal</h3>
                  <p className="text-blue-600 text-sm font-medium">MCH Urology (Gold Medalist)</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>5000+ Successful Surgeries</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Gold Medalist - PGIMS Rohtak</span>
                </div>
              </div>
            </div>

            {/* Specializations Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Our Specializations
              </h3>
              <div className="space-y-2">
                {specializations.map((spec) => (
                  <div key={spec.value} className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition">
                    <span className="text-lg">{spec.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{spec.label}</p>
                      <p className="text-xs text-gray-500">{spec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Directly
              </h3>
              <a href="tel:9780890425" className="text-2xl font-bold block mb-2 hover:underline">
                9780890425
              </a>
              <p className="text-blue-100 text-sm">Mon-Sat: As per clinic hours</p>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Our Location
              </h3>
              <p className="text-gray-600 text-sm">
                Near Narula Diagnostic Centre, Medical College Mor, Rohtak-124001 (Haryana)
              </p>
              <button
                onClick={() => window.open("https://maps.app.goo.gl/Mkg5T8QzZZ8qtagYA", "_blank")}
                className="mt-3 text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Patient Information</h2>
                <p className="text-blue-100 text-sm">Please fill in your details below</p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="1"
                        max="120"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                        placeholder="Enter your age"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                        placeholder="Enter your email (optional)"
                      />
                    </div>
                  </div>
                </div>

                {/* Specialization */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Specialization <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select a specialization</option>
                      {specializations.map((spec) => (
                        <option key={spec.value} value={spec.value}>
                          {spec.icon} {spec.label} - {spec.description}
                        </option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {selectedSpecialization && (
                    <p className="text-xs text-blue-600 mt-1">
                      Specializing in: {selectedSpecialization.description}
                    </p>
                  )}
                </div>

                {/* Reason for Visit */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reason for Visit <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      disabled={!formData.specialization}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white appearance-none cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">{formData.specialization ? "Select a reason" : "Please select specialization first"}</option>
                      {availableReasons.map((reason) => (
                        <option key={reason} value={reason}>{reason}</option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={getCurrentDate()}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                    />
                  </div>
                  {formData.preferredDate && !isDateValid && (
                    <p className="text-xs text-red-500 mt-1">
                      ⚠️ Clinic is closed on {getDayFromDate(formData.preferredDate)}. Please select Tuesday-Saturday.
                    </p>
                  )}
                  {formData.preferredDate && isDateValid && (
                    <p className="text-xs text-green-600 mt-1">
                      ✓ Clinic is open on {getDayFromDate(formData.preferredDate)}
                    </p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      disabled={!formData.preferredDate || !isDateValid}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white appearance-none cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">{availableTimeSlots.length > 0 ? "Select time slot" : "Select date first"}</option>
                      {availableTimeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {formData.preferredDate && isDateValid && availableTimeSlots.length === 1 && (
                    <p className="text-xs text-blue-600 mt-1">
                      Only evening slot available on {getDayFromDate(formData.preferredDate)}
                    </p>
                  )}
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white resize-none"
                      placeholder="Tell us about your symptoms or any specific concerns..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Request Appointment via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Your information will be sent securely via WhatsApp to Dr. Tarun Mittal's team.
                  We'll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;