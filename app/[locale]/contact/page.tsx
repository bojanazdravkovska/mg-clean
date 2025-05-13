'use client'

import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { Label } from "@/components/atoms/Label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/molecules/Select"
import { Checkbox } from "@/components/atoms/Checkbox"
import { Input } from "@/components/atoms/Input"
import { Textarea } from "@/components/atoms/Textarea"
import { Button } from "@/components/atoms/Button"
import { useTranslations } from "next-intl"

export default function ContactPage() {
  const t = useTranslations("contact")

  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/contact.jpg"
            alt="Contact us"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {t("hero.title.part1")} <span className="text-[#3AA655]">{t("hero.title.part2")}</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </div>
      {/* Quotation and Contact Info Section */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 py-12 px-2">
        {/* Quotation Form (form only, no heading/description) */}
        <div className="flex-1 min-w-[320px] flex justify-center">
          <form className="w-full flex flex-col gap-4 p-6 border border-gray-200 rounded-md bg-white shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-[#F97D1C] text-center">{t("form.title")}</h2>
            <div className="flex flex-col gap-1">
              <Label htmlFor="service">{t("form.service.label")}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t("form.service.placeholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="propertyMaintenance">{t("form.service.options.propertyMaintenance")}</SelectItem>
                  <SelectItem value="movingCleaning">{t("form.service.options.movingCleaning")}</SelectItem>
                  <SelectItem value="officeCleaning">{t("form.service.options.officeCleaning")}</SelectItem>
                  <SelectItem value="windowCleaning">{t("form.service.options.windowCleaning")}</SelectItem>
                  <SelectItem value="maintenanceCleaning">{t("form.service.options.maintenanceCleaning")}</SelectItem>
                  <SelectItem value="gardenCare">{t("form.service.options.gardenCare")}</SelectItem>
                  <SelectItem value="disposal">{t("form.service.options.disposal")}</SelectItem>
                  <SelectItem value="other">{t("form.service.options.other")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="canton">{t("form.canton.label")}<span className="text-red-500">*</span></Label>
              <div className="flex flex-wrap gap-6 p-2 rounded">
                <label className="flex items-center gap-2">
                  <Checkbox name="canton" value="aargau" /> {t("form.canton.options.aargau")}
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox name="canton" value="zurich" /> {t("form.canton.options.zurich")}
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox name="canton" value="lucerne" /> {t("form.canton.options.lucerne")}
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox name="canton" value="other" /> {t("form.canton.options.other")}
                </label>
              </div>
              <span className="text-xs text-red-500 ml-2">{t("form.canton.required")}</span>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="name">{t("form.name.label")}<span className="text-red-500">*</span></Label>
              <Input id="name" type="text" required />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">{t("form.email.label")}<span className="text-red-500">*</span></Label>
              <Input id="email" type="email" required />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="phone">{t("form.phone.label")}</Label>
              <Input id="phone" type="tel" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="date">{t("form.date.label")}</Label>
              <Input id="date" type="date" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="remarks">{t("form.remarks.label")}</Label>
              <Textarea id="remarks" rows={3} />
            </div>
            <Button variant="secondary" type="submit" className="mt-2">{t("form.submit")}</Button>
          </form>
        </div>
        {/* Contact Info Box */}
        <div className="flex-1 min-w-[320px] bg-[#f2faff] rounded-2xl shadow p-8 flex flex-col gap-4 text-[#F97D1C]">
          <div className="mb-2">
            <div className="font-extrabold text-lg text-[#F97D1C]">{t("info.title")}</div>
            <div className="font-semibold text-[#F97D1C]">{t("info.name")}</div>
            <div className="text-[#F97D1C]">{t("info.address")}</div>
            <div className="text-[#F97D1C]">{t("info.phone")}</div>
            <div className="text-[#F97D1C]">{t("info.email")}</div>
          </div>
          <div className="mt-8">
            <div className="text-[#F97D1C] font-medium mb-2">{t("info.social.title")}</div>
            <div className="flex gap-4 mt-2">
              {/* Placeholder icons, replace with real ones later */}
              <div className="w-10 h-10 bg-[#F97D1C] rounded-lg flex items-center justify-center text-white text-2xl font-bold">f</div>
              <div className="w-10 h-10 bg-[#F97D1C] rounded-lg flex items-center justify-center text-white text-2xl font-bold">i</div>
              <div className="w-10 h-10 bg-[#F97D1C] rounded-lg flex items-center justify-center text-white text-2xl font-bold">▶</div>
              <div className="w-10 h-10 bg-[#F97D1C] rounded-lg flex items-center justify-center text-white text-2xl font-bold">in</div>
            </div>
          </div>
        </div>
      </div>
    </MgCleanDefaultLayout>
  )
}
