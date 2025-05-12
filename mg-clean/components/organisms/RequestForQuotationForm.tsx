import { RequestForQuotation } from "../organisms/RequestForQuotation";

export function RequestForQuotationForm() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[500px]">
        <div className="w-full max-w-2xl mx-auto text-left mb-8 lg:mb-0">
          <h2 className="text-2xl font-extrabold mb-4 text-[#3AA655]">Make a non-binding enquiry now!</h2>
          <hr className="border-black/50 mb-6" />
          <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Do you need professional property maintenance, cleaning, or garden care? Contact us for a free, no-obligation quote. We&apos;ll be happy to advise you and find the right solution for your needs!
          </p>
        </div>
        <div className="w-full max-w-md flex justify-center">
          <RequestForQuotation />
        </div>
      </div>
    </div>
  );
} 