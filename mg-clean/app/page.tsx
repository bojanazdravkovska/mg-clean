import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout";
import { RequestForQuotationForm } from "@/components/organisms/RequestForQuotationForm";
import { LandingPage } from "@/components/organisms/LandingPage";

export default function Page() {
  return (
    <MgCleanDefaultLayout>
      <LandingPage />
      
      <div className="flex flex-col lg:flex-row w-[90%] gap-8 items-center justify-center mt-12 mb-8 px-8 lg:px-12 bg-[#BBD4E7] p-8 pt-12 rounded-3xl mx-auto">
        <div className="flex-1 flex flex-col items-start justify-start text-black pl-8 pr-4 pt-22 mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 max-w-lg">
            Make a non-binding enquiry now!
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-md text-justify mb-8">
            Do you need professional property maintenance, cleaning, or garden care? Contact us for a free, <br />
            no-obligation quote. We&apos;ll be happy to advise you and find the right solution for your needs!
          </p>
        </div>
        <RequestForQuotationForm />
      </div>
    </MgCleanDefaultLayout>
  );
}