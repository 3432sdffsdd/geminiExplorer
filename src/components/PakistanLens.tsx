"use client";

import { useState } from "react";
import Image from "next/image";

export default function PakistanLens() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const collageImages = [
    {
      id: 1,
      src: "/images/hunzacard.avif",
      alt: "Hunza Valley",
      title: "Hunza Valley",
      description: "The paradise of Pakistan"
    },
    {
      id: 2,
      src: "/images/skardu 3.jpeg",
      alt: "Skardu",
      title: "Skardu",
      description: "Gateway to the mountains"
    },
    {
      id: 3,
      src: "/images/neelumcard.jpg",
      alt: "Neelum Valley",
      title: "Neelum Valley",
      description: "Blue gem of Kashmir"
    },
    {
      id: 4,
      src: "/images/kumratcard.avif",
      alt: "Kumrat Valley",
      title: "Kumrat Valley",
      description: "Land of waterfalls"
    },
    {
      id: 5,
      src: "/images/chitral2.png",
      alt: "Chitral",
      title: "Chitral",
      description: "Ancient culture & beauty"
    },
    {
      id: 6,
      src: "/images/fearycard.jpg",
      alt: "Fairy Meadows",
      title: "Fairy Meadows",
      description: "Nanga Parbat's garden"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pakistan Through Our Lens
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the breathtaking beauty of Pakistan's northern regions through our carefully curated collection of stunning destinations
          </p>
        </div>

        <div className="mb-12 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
          <video
            className="h-[280px] w-full object-cover md:h-[520px]"
            src="/images/mycoll.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>

        {/* Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {collageImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index === 3 ? 'md:col-span-2' : ''}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-48 md:h-full min-h-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Explore All Destinations
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected destination"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
