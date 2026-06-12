"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import doctor from "@/public/Assets/Doctor.jpeg";
import doctor2 from "@/public/Assets/Docter2.jpeg";
import doctor3 from "@/public/Assets/Doctor3.jpg";
import doctor4 from "@/public/Assets/Doctor4.jpg";
import doctor5 from "@/public/Assets/Doctor5.jpg";
import doctor6 from "@/public/Assets/Doctor6.jpg";

type GalleryImage = {
  id: number;
  src: StaticImageData;
  alt: string;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    { id: 1, src: doctor, alt: "Dr. Tarun Mittal" },
    { id: 2, src: doctor2, alt: "Dr. Tarun Mittal" },
    { id: 3, src: doctor3, alt: "Dr. Tarun Mittal" },
    { id: 4, src: doctor4, alt: "Dr. Tarun Mittal" },
    { id: 5, src: doctor5, alt: "Dr. Tarun Mittal" },
    { id: 6, src: doctor6, alt: "Dr. Tarun Mittal" },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              ✕
            </button>

            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;