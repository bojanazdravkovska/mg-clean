"use client"
import { useState } from "react";

type Testimonial = { name: string; role: string; text: string };
const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    text:
      "MG Clean transformed my windows! They were professional, thorough, and left everything spotless. Highly recommend!",
  },
  {
    name: "Mark Thompson",
    role: "Office Manager",
    text:
      "We've been using MG Clean for our office for over a year now. Their attention to detail and reliability is unmatched.",
  },
  {
    name: "Emma Davis",
    role: "Property Manager",
    text:
      "The garden cleaning service was excellent. They cleared years of overgrowth and transformed our outdoor space.",
  },
  {
    name: "Liam Smith",
    role: "Business Owner",
    text:
      "MG Clean's team is always punctual and efficient. Our business premises have never looked better!",
  },
  {
    name: "Olivia Brown",
    role: "Tenant",
    text:
      "I was amazed at how spotless my apartment was after their move-out cleaning. Got my full deposit back!",
  },
];

export default function ClientsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => {
    console.log('prev clicked');
    setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  };
  const next = () => {
    console.log('next clicked');
    setCurrent((c) => (c === total - 1 ? 0 : c + 1));
  };

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto space-y-12 px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-2xl flex items-center justify-center">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100 transition z-50 pointer-events-auto"
            >
              <span className="sr-only">Previous</span>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex w-full items-center justify-center gap-4">
              {testimonials.map((testimonial: Testimonial, idx: number) => {
                const prevIdx = (current - 1 + total) % total;
                const prevPrevIdx = (current - 2 + total) % total;
                const nextIdx = (current + 1) % total;
                const nextNextIdx = (current + 2) % total;
                let show = false;
                if (current === 0) {
                  // On first card, show current, next, next-next
                  show = idx === current || idx === nextIdx || idx === nextNextIdx;
                } else if (current === total - 1) {
                  // On last card, show current, prev, prev-prev
                  show = idx === current || idx === prevIdx || idx === prevPrevIdx;
                } else {
                  // Otherwise, show previous, current, next
                  show = idx === prevIdx || idx === current || idx === nextIdx;
                }
                if (show) {
                  let scale = 1, opacity = 1, z = 10, translateY = "";
                  if (idx === current) {
                    scale = 1;
                    opacity = 1;
                    z = 20;
                    translateY = "translate-y-0";
                  } else {
                    scale = 0.85;
                    opacity = 0.5;
                    z = 10;
                    translateY = "translate-y-4";
                  }
                  return (
                    <div
                      key={idx}
                      className={`rounded-lg border bg-white p-6 shadow-sm min-w-[260px] max-w-[340px] transition-all duration-300 ease-in-out flex flex-col gap-4 items-center mx-2 ${translateY}`}
                      style={{
                        transform: `scale(${scale})`,
                        opacity,
                        zIndex: z,
                        boxShadow: idx === current ? "0 8px 32px 0 rgba(60,60,60,0.10)" : undefined,
                        borderColor: idx === current ? "#3AA655" : "#e5e7eb",
                        borderWidth: "2px"
                      }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                      <p className="text-gray-500 text-center">{testimonial.text}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100 transition z-50 pointer-events-auto"
            >
              <span className="sr-only">Next</span>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full ${idx === current ? 'bg-[#3AA655]' : 'bg-gray-300'} transition`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  