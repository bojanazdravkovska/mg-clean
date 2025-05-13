'use client'
import { RequestForQuotation } from "../organisms/RequestForQuotation";
import { useTranslations } from "next-intl";

export function RequestForQuotationForm() {
  const t = useTranslations("quotation");

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[500px]">
        <div className="w-full max-w-2xl mx-auto text-left mb-8 lg:mb-0">
          <h2 className="text-2xl font-extrabold mb-4 text-[#3AA655]">{t("title")}</h2>
          <hr className="border-black/50 mb-6" />
          <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            {t("description")}
          </p>
        </div>
        <div className="w-full max-w-md flex justify-center">
          <RequestForQuotation />
        </div>
      </div>
    </div>
  );
} 