import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { Label } from "@/components/atoms/Label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/molecules/Select"
import { Checkbox } from "@/components/atoms/Checkbox"
import { Input } from "@/components/atoms/Input"
import { Textarea } from "@/components/atoms/Textarea"

export default function PropertyMaintenancePage() {
  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/property-maintenance.png"
            alt="Property Maintenance"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Property <span className="text-[#3AA655]">Maintenance</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              Professional property maintenance services to keep your property in perfect condition
            </p>
          </div>
        </div>
      </div>
      {/* Property Maintenance Info & Quotation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-12">
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
          </form>
        </div>
        {/* Property Maintenance Text */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-start">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Your caretaker company<br />for professional property maintenance
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
          <p className="text-gray-600 text-lg text-justify">
            Our team consists of highly qualified and experienced caretakers with extensive knowledge and expertise in all aspects of building maintenance. We offer our clients customized property maintenance services tailored to each client&apos;s specific needs.
          </p>
          <p className="text-gray-600 text-lg text-justify">
            As a reliable property management company, we understand that the appearance and condition of a building greatly influence the impression it makes on customers and guests. Therefore, we always strive to ensure that all the buildings we manage are in perfect condition, whether through interior cleaning, exterior maintenance, or troubleshooting technical issues.
          </p>
          <p className="text-gray-600 text-lg text-justify">
            With M&G Clean  , you benefit from a single point of contact for all areas: from the boiler room to the stairwell to the garden. Our property maintenance services include not only regular maintenance and repair of technical equipment, but also cleaning and maintenance of the interior and exterior areas of your property.
          </p>
        </div>
      </div>
      {/* New Caretaker Info Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                A caretaker is an all-rounder – cleaning, repairing, maintaining, monitoring.
              </h2>
              <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
              <p className="text-gray-600 text-lg text-justify mb-4">
                A caretaker company is responsible for the upkeep and maintenance of residential and commercial buildings, industrial buildings, schools, and public buildings. Their duties and responsibilities vary depending on the size and technical equipment of the property. A distinction is made between caretakers with predominantly practical duties and those with predominantly organizational tasks.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                We also offer comprehensive organizational support, from coordinating tradespeople to managing documentation. By working with M&G Clean, you can rest assured that all aspects of your property will be handled professionally and efficiently, allowing you to focus on your core business.
              </p>
            </div>
            <div className="order-2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/garden-care.jpg"
                  alt="Caretaker Garden Care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trust & Comprehensive Services Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Image on the left */}
            <div className="order-1 lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/property-maintenance.jpg"
                  alt="Property Maintenance Trust"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
            {/* Text on the right */}
            <div className="space-y-4 order-2 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Property maintenance is a matter of trust.
              </h2>
              <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
              <p className="text-gray-600 text-lg text-justify mb-4">
                We offer a comprehensive range of facility management services. As our name M&G Clean suggests, our company encompasses all the services required for optimal property maintenance.
              </p>
              <p className="text-gray-600 text-lg text-justify mb-4">
                With over 1000 apartments in various properties under our management, we are characterized by a flexible, customer-oriented service that is aimed at both property management companies and private customers.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Trust M&G Clean for reliable, professional, and all-encompassing property maintenance solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Well Maintained All Around Section */}
        <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Well maintained all around.
              </h2>
              <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
              <p className="text-gray-600 text-lg text-justify mb-4">
                The tasks assigned to us are completed on time and professionally. We support you with tasks such as minor repairs, maintenance work, and property cleaning. Our trained team also takes care of the proper disposal of bulky waste and the clearing out of messy apartments. Please feel free to contact us if you need expert assistance. We take care of professional property maintenance.
              </p>
            </div>
            <div className="order-2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/garden-care.jpg"
                  alt="Caretaker Garden Care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MgCleanDefaultLayout>
  )
}
