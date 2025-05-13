"use client"
import { useState } from "react"
import { useTranslations } from "next-intl"

export default function CantonTabs() {
  const t = useTranslations('home.cantonTabs')
  const [selected, setSelected] = useState("zurich")

  const tabs = [
    { id: "zurich", label: t('tabs.zurich') },
    { id: "aargau", label: t('tabs.aargau') },
    { id: "aarau", label: t('tabs.aarau') }
  ]

  const renderContent = (canton: string) => {
    return (
      <div>
        <div className="max-w-2xl text-left">
          <h4 className="text-xl font-bold mb-4 text-left text-[#3AA655]">{t(`${canton}.title`)}</h4>
          <div className="mb-4">
            <span className="font-bold text-[#1a2a4a]">{t(`${canton}.responsibilities.title`)}</span>
            <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
              {t.raw(`${canton}.responsibilities.items`).map((item: string, index: number) => (
                <li key={index} className="text-[14px] text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <span className="font-bold text-[#1a2a4a]">{t(`${canton}.requirements.title`)}</span>
            <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
              {t.raw(`${canton}.requirements.items`).map((item: string, index: number) => (
                <li key={index} className="text-[14px] text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-bold text-[#1a2a4a]">{t(`${canton}.operatingTimes.title`)}</span>
            <ul className="list-disc ml-8 mt-2 text-[#1a2a4a]">
              {t.raw(`${canton}.operatingTimes.items`).map((item: string, index: number) => (
                <li key={index} className="text-[14px]">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Tab headers */}
      <div className="flex border-b border-gray-200 mb-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelected(tab.id)}
            className={`flex-1 py-4 text-xl font-semibold text-center transition-colors duration-200
              ${selected === tab.id ? "text-[#3AA655] border-b-4 border-[#3AA655] bg-white" : "text-gray-800 bg-gray-50 hover:bg-gray-100"}
              focus:outline-none`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div className="bg-[#f4f8f6] rounded-b-xl p-10 min-h-[440px] h-[440px] overflow-auto text-left">
        {renderContent(selected)}
      </div>
    </div>
  )
} 