'use client'
import { Button } from "../atoms/Button";
import { Checkbox } from "../atoms/Checkbox";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";
import { Textarea } from "../atoms/Textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../molecules/Select";
import { useTranslations } from "next-intl";

export function RequestForQuotation() {
  const t = useTranslations("quotation.form");

  return (
    <form className="w-full flex flex-col gap-4 p-6 border border-gray-200 rounded-md bg-white shadow-md">
      <h2 className="text-2xl font-semibold mb-2 text-[#3AA655] text-center">{t("title")}</h2>
      <div className="flex flex-col gap-1">
        <Label htmlFor="service">{t("service.label")}</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder={t("service.placeholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="propertyMaintenance">{t("service.options.propertyMaintenance")}</SelectItem>
            <SelectItem value="movingCleaning">{t("service.options.movingCleaning")}</SelectItem>
            <SelectItem value="officeCleaning">{t("service.options.officeCleaning")}</SelectItem>
            <SelectItem value="windowCleaning">{t("service.options.windowCleaning")}</SelectItem>
            <SelectItem value="maintenanceCleaning">{t("service.options.maintenanceCleaning")}</SelectItem>
            <SelectItem value="gardenCare">{t("service.options.gardenCare")}</SelectItem>
            <SelectItem value="disposal">{t("service.options.disposal")}</SelectItem>
            <SelectItem value="other">{t("service.options.other")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="canton">{t("canton.label")}<span className="text-red-500">*</span></Label>
        <div className="flex flex-wrap gap-6 p-2 rounded">
          <label className="flex items-center gap-2">
            <Checkbox name="canton" value="aargau" /> {t("canton.options.aargau")}
          </label>
          <label className="flex items-center gap-2">
            <Checkbox name="canton" value="zurich" /> {t("canton.options.zurich")}
          </label>
          <label className="flex items-center gap-2">
            <Checkbox name="canton" value="lucerne" /> {t("canton.options.lucerne")}
          </label>
          <label className="flex items-center gap-2">
            <Checkbox name="canton" value="other" /> {t("canton.options.other")}
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="name">{t("name")}<span className="text-red-500">*</span></Label>
        <Input id="name" type="text" required />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="email">{t("email")}<span className="text-red-500">*</span></Label>
        <Input id="email" type="email" required />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="phone">{t("phone")}</Label>
        <Input id="phone" type="tel" />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="date">{t("date")}</Label>
        <Input id="date" type="date" />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="remarks">{t("remarks")}</Label>
        <Textarea id="remarks" rows={3} />
      </div>
      <Button variant="success" type="submit" className="mt-2">{t("submit")}</Button>
    </form>
  )
}