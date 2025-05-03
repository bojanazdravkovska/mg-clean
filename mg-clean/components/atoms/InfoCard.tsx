"use client"
import React from "react"

interface InfoCardProps {
  title: string
  description: string
  tagline: string
}

export default function InfoCard({ title, description, tagline }: InfoCardProps) {
  return (
    <div className="relative flex flex-col justify-between bg-gray-100 rounded-t-xl rounded-b-3xl shadow p-8 border border-gray-100 transition-transform duration-300 group min-h-[260px] overflow-visible hover:scale-105 hover:shadow-lg">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 italic">{title}</h3>
        <hr className="border-gray-300 mb-4" />
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
      </div>
      {/* Orange bar/tagline at the bottom of the card */}
      <div className="absolute left-0 bottom-0 w-full flex justify-center items-center bg-[#F97D1C] h-2 group-hover:h-12 transition-all duration-300 rounded-b-3xl overflow-hidden z-10">
        <span className="text-white font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:transition-all group-hover:delay-100">
          {tagline}
        </span>
      </div>
    </div>
  )
} 