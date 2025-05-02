import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout";
import HeroSection from "@/components/organisms/HeroSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import { RequestForQuotationForm } from "@/components/organisms/RequestForQuotationForm";
import ClientsSection from "@/components/organisms/ClientsSection";

export default function Page() {
  return (
    <MgCleanDefaultLayout>
      <HeroSection/>
      <ServicesSection/>
      <RequestForQuotationForm/>
      <ClientsSection/>
    </MgCleanDefaultLayout>
  );
}