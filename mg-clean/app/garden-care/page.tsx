"use client"

import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { useState } from "react"

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button 
        onClick={prevSlide}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors" 
        aria-label="Previous"
      >
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" stroke="#7A8B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="relative w-full max-w-[600px] overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="grid grid-cols-4 gap-4 min-w-full">
            <Image
              src="/assets/images/img1.jpg"
              alt="Garden 1"
              width={140}
              height={110}
              className="rounded-lg object-cover"
            />
            <Image
              src="/assets/images/img2.jpg"
              alt="Garden 2"
              width={140}
              height={110}
              className="rounded-lg object-cover"
            />
            <Image
              src="/assets/images/img3.jpg"
              alt="Garden 3"
              width={140}
              height={110}
              className="rounded-lg object-cover"
            />
            <Image
              src="/assets/images/img4.jpg"
              alt="Garden 4"
              width={140}
              height={110}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 min-w-full">
            <Image
              src="/assets/images/img5.jpg"
              alt="Garden 5"
              width={140}
              height={110}
              className="rounded-lg object-cover"
            />
            <Image
              src="/assets/images/img6.jpg"
              alt="Garden 6"
              width={140}
              height={110}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <button 
        onClick={nextSlide}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors" 
        aria-label="Next"
      >
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" stroke="#7A8B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default function GardenCarePage() {
  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/garden-care.jpg"
            alt="Garden Care"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Garden <span className="text-[#3AA655]">Care</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              Professional garden care services to keep your gardens in perfect condition
            </p>
          </div>
        </div>
      </div>


        {/* Garden Care Section */}
        <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Professional garden care 
              </h2>
              <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
              <p className="text-gray-600 text-lg text-justify mb-4">
              A garden is a wonderful thing! A place to relax and enjoy, to celebrate and feel good. Less popular, however, 
              is the time-consuming and labor-intensive work involved in hedge or tree trimming. With our services, 
              you can enjoy the peace and quiet of your property and leave garden maintenance to experienced and motivated gardeners who, with passion and attention to detail, 
              will take care of both garden design and recurring tasks like tree trimming and shrub pruning.
              </p>
            </div>
            <div className="order-2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/garden-care.jpg"
                  alt="Caretaker Garden Care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garden Care Services List Section */}
      <section className="w-full py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:pl-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1 */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">{/* Leaf Icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">Lawn cutting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">Formative pruning of plants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">planting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">scarification</span>
              </li>
            </ul>
            {/* Column 2 */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">Leaf removal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">Discount maintenance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">Tree pruning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">Winter service</span>
              </li>
            </ul>
            {/* Column 3 */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">Fertilize</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">Lawn renovation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">Hedge trimming</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#3AA655]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3.5C13.5 2 7.5 2 4.5 3.5C2 5 2 10 4.5 13C7 16 13 16 15.5 13C18 10 18 5 16.5 3.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/></svg>
                </span>
                <span className="font-bold text-lg">Shrub cutting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Garden Care in Aargau Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-12 md:px-24">
          <h2 className="text-lg md:text-xl font-bold text-[#B7D08B] mb-2">YOUR GARDEN CARE IN AARGAU</h2>
          <div className="w-full max-w-[1100px] h-[2px] bg-gray-200 mb-6" />
          <p className="italic text-[#7A8B6F] text-base md:text-lg mb-8 max-w-4xl">
            Gardening is a relaxing and fulfilling activity for many people. However, in Aargau, in particular, it can be particularly challenging due to the changeable climate and unique soil conditions. With the right tips and tricks, however, even a garden in Aargau can be successfully maintained and designed. Those who are unsure about gardening in Aargau or lack the time can also seek the help of professional gardeners. They are familiar with the unique challenges of Aargau&apos;s climate and soil and can provide support with garden maintenance.
          </p>
          {/* Image Gallery/Slider */}
          <ImageSlider />

          {/* Advantages Section */}
          <section className="mt-10">
            <h3 className="text-[#B7D08B] italic text-lg font-semibold mb-6">Professional garden care offers many advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#B7D08B]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7.629 15.314a1 1 0 0 1-1.415 0l-3.536-3.536a1 1 0 1 1 1.415-1.415l2.829 2.828 7.778-7.778a1 1 0 1 1 1.415 1.415l-8.486 8.486Z"/></svg>
                  </span>
                  <span><b>Experience and expertise:</b> Professional gardeners have extensive knowledge of plants, soils, and care practices that they can use in gardening</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#B7D08B]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7.629 15.314a1 1 0 0 1-1.415 0l-3.536-3.536a1 1 0 1 1 1.415-1.415l2.829 2.828 7.778-7.778a1 1 0 1 1 1.415 1.415l-8.486 8.486Z"/></svg>
                  </span>
                  <span><b>Time savings:</b> By hiring a professional gardener, you save the time and effort required for garden maintenance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#B7D08B]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7.629 15.314a1 1 0 0 1-1.415 0l-3.536-3.536a1 1 0 1 1 1.415-1.415l2.829 2.828 7.778-7.778a1 1 0 1 1 1.415 1.415l-8.486 8.486Z"/></svg>
                  </span>
                  <span><b>Year-round care:</b> Professional gardeners often offer year-round care to ensure that your garden is optimally cared for in every season.</span>
                </li>
              </ul>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#B7D08B]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7.629 15.314a1 1 0 0 1-1.415 0l-3.536-3.536a1 1 0 1 1 1.415-1.415l2.829 2.828 7.778-7.778a1 1 0 1 1 1.415 1.415l-8.486 8.486Z"/></svg>
                  </span>
                  <span><b>Increase property value:</b> A well-maintained garden can increase the value of your property, which can have a positive impact on its resale value.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#B7D08B]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7.629 15.314a1 1 0 0 1-1.415 0l-3.536-3.536a1 1 0 1 1 1.415-1.415l2.829 2.828 7.778-7.778a1 1 0 1 1 1.415 1.415l-8.486 8.486Z"/></svg>
                  </span>
                  <span><b>Environmental friendliness:</b> Professional gardeners often use environmentally friendly methods and products to maintain the garden, which can lead to a positive contribution to the environment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#B7D08B]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7.629 15.314a1 1 0 0 1-1.415 0l-3.536-3.536a1 1 0 1 1 1.415-1.415l2.829 2.828 7.778-7.778a1 1 0 1 1 1.415 1.415l-8.486 8.486Z"/></svg>
                  </span>
                  <span><b>Improve garden quality:</b> Professional garden care improves the health and beauty of your garden, which can lead to a higher quality of life and a more enjoyable time outdoors.</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>


    </MgCleanDefaultLayout>
  )
}
