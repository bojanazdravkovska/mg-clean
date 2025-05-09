import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import ClientsSection from "@/components/organisms/ClientsSection"
import { Label } from "@/components/atoms/Label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/molecules/Select"
import { Checkbox } from "@/components/atoms/Checkbox"
import { Input } from "@/components/atoms/Input"
import { Textarea } from "@/components/atoms/Textarea"

export default function WindowCleaningPage() {
  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/window-cleaning.png"
            alt="Window Cleaning"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Window <span className="text-[#3AA655]">Cleaning</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              Professional window-cleaning services to keep your windows in perfect condition
            </p>
          </div>
        </div>
      </div>

                 {/* Well Maintained All Around Section */}
                 <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Window cleaning - For a clear view
              </h2>
              <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
              <p className="text-gray-600 text-lg text-justify mb-4">
              Do you lack the necessary visibility and the view out the window is more of a guess than a sight? M&G Clean provides professional window cleaning services. Professional window cleaning offers numerous advantages. We use environmentally friendly cleaning agents and state-of-the-art technology to ensure optimal cleaning quality. We also work quickly and reliably, so you can enjoy clear, clean windows again in no time.
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
                Window cleaning by professionals
              </h2>
              <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
              <p className="text-gray-600 text-lg text-justify mb-4">
              Window cleaning includes cleaning glass surfaces, frames, and window sills. Special cleaning agents and techniques are used to remove stubborn dirt, dust, and fingerprints. Even cleaning windows on higher floors or in hard-to-reach areas is easily possible thanks to modern technology and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ClientsSection />
      {/* Quotation Section with Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-12">
        {/* Text from the image, styled like other sections */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-start">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 mt-8">
            Get a free quote for your window cleaning
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />

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
    </MgCleanDefaultLayout>
  )
}
