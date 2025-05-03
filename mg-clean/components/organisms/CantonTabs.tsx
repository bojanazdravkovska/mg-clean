"use client"
import { useState } from "react"

const tabs = ["Zurich", "Aargau", "Aarau"]

export default function CantonTabs() {
  const [selected, setSelected] = useState("Zurich")

  return (
    <div>
      {/* Tab headers */}
      <div className="flex border-b border-gray-200 mb-0">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className={`flex-1 py-4 text-xl font-semibold text-center transition-colors duration-200
              ${selected === tab ? "text-[#3AA655] border-b-4 border-[#3AA655] bg-white" : "text-gray-800 bg-gray-50 hover:bg-gray-100"}
              focus:outline-none`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div className="bg-[#f4f8f6] rounded-b-xl p-10 min-h-[440px] h-[440px] overflow-auto text-left">
        {selected === "Zurich" && (
          <div>
            <div className="max-w-2xl text-left">
              <h4 className="text-xl font-bold mb-4 text-left text-[#3AA655]">Cleaner for office cleaning in Zurich (city)</h4>
              <div className="mb-4">
                <span className="font-bold text-[#1a2a4a]">Area of responsibility:</span>
                <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
                  <li className="text-[14px] text-gray-600">Maintenance cleaning of office spaces</li>
                  <li className="text-[14px] text-gray-600">Maintenance cleaning of sanitary areas etc.</li>
                </ul>
              </div>
              <div className="mb-4">
                <span className="font-bold text-[#1a2a4a]">Requirement:</span>
                <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
                  <li className="text-[14px] text-gray-600">Many years of experience in maintenance cleaning</li>
                  <li className="text-[14px] text-gray-600">Physically fit, motivated, reliable and resilient</li>
                  <li className="text-[14px] text-gray-600">Polite interaction with customers / well-groomed appearance</li>
                  <li className="text-[14px] text-gray-600">Independent work and ability to work in a team</li>
                  <li className="text-[14px] text-gray-600">Living near the city of Zurich</li>
                </ul>
              </div>
              <div>
                <span className="font-bold text-[#1a2a4a]">Operating times:</span>
                <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
                  <li className="text-[14px]">weekend</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {selected === "Aargau" && (
          <div>
            <div className="max-w-2xl text-left">
              <h4 className="text-xl font-bold mb-4 text-left text-[#3AA655]">Cleaning staff in the Canton of Aargau</h4>
              <div className="mb-4">
                <span className="font-bold text-[#1a2a4a]">Area of responsibility:</span>
                <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
                  <li className="text-[14px] text-gray-600">Cleaning of stairwells</li>
                </ul>
              </div>
              <div className="mb-4">
                <span className="font-bold text-[#1a2a4a]">Requirement:</span>
                <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
                  <li className="text-[14px] text-gray-600">Experience as a cleaner</li>
                  <li className="text-[14px] text-gray-600">Driving license min. category B</li>
                  <li className="text-[14px] text-gray-600">Physically fit, motivated, reliable and resilient</li>
                  <li className="text-[14px] text-gray-600">Polite interaction with customers / well-groomed appearance</li>
                  <li className="text-[14px] text-gray-600">Independent work and ability to work in a team</li>
                  <li className="text-[14px] text-gray-600">Good knowledge of German</li>
                  <li className="text-[14px] text-gray-600">Resident in the Canton of Aargau</li>
                </ul>
              </div>
              <div>
                <span className="font-bold text-[#1a2a4a]">Operating times:</span>
                <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
                  <li className="text-[14px]">Monday-Friday 8:00 a.m. to 5:30 p.m.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {selected === "Aarau" && (
          <div>
            <div className="max-w-2xl text-left">
              <h4 className="text-xl font-bold mb-4 text-left text-[#3AA655]">Cleaner for office cleaning in the Aarau area</h4>
              <div className="mb-4">
                <span className="font-bold text-[#1a2a4a]">Area of responsibility:</span>
                <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
                  <li className="text-[14px] text-gray-600">Maintenance cleaning of office spaces</li>
                  <li className="text-[14px] text-gray-600">Maintenance cleaning of sanitary areas etc.</li>
                </ul>
              </div>
              <div className="mb-4">
                <span className="font-bold text-[#1a2a4a]">Requirement:</span>
                <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
                  <li className="text-[14px] text-gray-600">Many years of experience in maintenance cleaning</li>
                  <li className="text-[14px] text-gray-600">Physically fit, motivated, reliable and resilient</li>
                  <li className="text-[14px] text-gray-600">Polite interaction with customers / well-groomed appearance</li>
                  <li className="text-[14px] text-gray-600">Independent work and ability to work in a team</li>
                  <li className="text-[14px] text-gray-600">Good knowledge of German</li>
                  <li className="text-[14px] text-gray-600">Living near Aarau</li>
                </ul>
              </div>
              <div>
                <span className="font-bold text-[#1a2a4a]">Operating times:</span>
                <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
                  <li className="text-[14px]">Monday to Friday approx. 4 pm to 7 pm</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 