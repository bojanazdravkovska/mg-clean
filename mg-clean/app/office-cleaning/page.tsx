import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import ClientsSection from "@/components/organisms/ClientsSection"
import { Label } from "@/components/atoms/Label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/molecules/Select"
import { Checkbox } from "@/components/atoms/Checkbox"
import { Input } from "@/components/atoms/Input"
import { Textarea } from "@/components/atoms/Textarea"
import { References } from "@/components/organisms/References"

export default function PropertyMaintenancePage() {
  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/office-cleaning.jpg"
            alt="Office Cleaning"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Office <span className="text-[#3AA655]">Cleaning</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              Professional office-cleaning services to keep your office in perfect condition
            </p>
          </div>
        </div>
      </div>
      <ClientsSection />
      {/* Quotation Section with Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-12">
        {/* Text from the image, styled like other sections */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-start">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Make a non-binding enquiry now!
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
          <p className="text-gray-600 text-lg text-justify mb-4">
            Do you have a lot to do and little time to take care of the cleanliness of your office? With professional office cleaning from M&G Clean, we want to take the pressure off you. We are happy to carry out office cleaning with carefully selected specialists. Whether during the day, in the evenings, or on weekends – we are happy to work with you to develop a cleaning schedule. Regular and professionally conducted office cleaning contributes to the long-term health of both people and buildings.
          </p>
          <p className="text-gray-600 text-lg text-justify">
            Our many years of experience in the office cleaning industry enable us to offer customized cleaning solutions tailored precisely to the specific needs of your business. From daily maintenance cleaning to specialized services such as carpet and floor cleaning, window cleaning, surface cleaning, and disinfection, we offer a comprehensive service package.
          </p>
        </div>
        {/* Request for Quotation Form */}
        <div className="flex-1 min-w-[320px] flex justify-center">
          <form className="w-full flex flex-col gap-4 p-6 border border-gray-200 rounded-md bg-white shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-[#F97D1C] text-center">Request for quotation</h2>
            <div className="flex flex-col gap-1">
              <Label htmlFor="service">Service</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Please select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cleaning">Property maintenance</SelectItem>
                  <SelectItem value="maintenance">Moving cleaning</SelectItem>
                  <SelectItem value="office">Office cleaning</SelectItem>
                  <SelectItem value="window">Window cleaning</SelectItem>
                  <SelectItem value="mc">Maintenance cleaning</SelectItem>
                  <SelectItem value="garden">Garden Care</SelectItem>
                  <SelectItem value="disposal">Clearance/disposal</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="canton">Your canton<span className="text-red-500">*</span></Label>
              <div className="flex flex-wrap gap-6 p-2 rounded">
                <label className="flex items-center gap-2">
                  <Checkbox name="canton" value="Aargau" /> Aargau
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox name="canton" value="Zurich" /> Zurich
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox name="canton" value="Lucerne" /> Lucerne
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox name="canton" value="Other" /> Other
                </label>
              </div>
              <span className="text-xs text-red-500 ml-2">Necessary</span>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="name">Your name<span className="text-red-500">*</span></Label>
              <Input id="name" type="text" required />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Your email<span className="text-red-500">*</span></Label>
              <Input id="email" type="email" required />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="phone">Your phone number</Label>
              <Input id="phone" type="tel" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="date">Desired date</Label>
              <Input id="date" type="date" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="remarks">Remarks</Label>
              <Textarea id="remarks" rows={3} />
            </div>
            <button type="submit" className="mt-2 w-full bg-[#F97D1C] hover:bg-[#d96b18] text-white font-semibold py-2 px-4 rounded transition-colors">Submit</button>
          </form>
        </div>
      </div>
      {/* New Image Section with Overlay Texts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid gap-8 md:grid-rows-2">
        <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden">
          <Image
            src="/assets/images/office-cleaning.jpg"
            alt="Trustworthy and discreet"
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <span className="absolute top-6 left-6 text-white font-bold text-lg md:text-xl drop-shadow-lg">Trustworthy and discreet</span>
        </div>
        <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden">
          <Image
            src="/assets/images/office-cleaning.jpg"
            alt="For a well-maintained working environment"
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <span className="absolute top-6 left-6 text-white font-bold text-lg md:text-xl drop-shadow-lg">For a well-maintained working environment</span>
        </div>
      </div>
      <References />
    </MgCleanDefaultLayout>
  )
}
