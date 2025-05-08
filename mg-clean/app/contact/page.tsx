import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { Label } from "@/components/atoms/Label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/molecules/Select"
import { Checkbox } from "@/components/atoms/Checkbox"
import { Input } from "@/components/atoms/Input"
import { Textarea } from "@/components/atoms/Textarea"
import { Button } from "@/components/atoms/Button"

export default function ContactPage() {
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
              Contact
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              Do you have any questions or would you like a customized quote? Contact us – we look forward to hearing from you! Use our form, call us, or send us an email. We&apos;re happy to help!
            </p>
          </div>
        </div>
      </div>
      {/* Quotation and Contact Info Section */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 py-12 px-2">
        {/* Quotation Form (form only, no heading/description) */}
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
            <Button variant="secondary" type="submit" className="mt-2">Submit</Button>
          </form>
        </div>
        {/* Contact Info Box */}
        <div className="flex-1 min-w-[320px] bg-[#f2faff] rounded-2xl shadow p-8 flex flex-col gap-4 text-[#F97D1C]">
          <div className="mb-2">
            <div className="font-extrabold text-lg text-[#F97D1C]">M&amp;G clean</div>
            <div className="font-semibold text-[#F97D1C]">Herr Liman Dalipi</div>
            <div className="text-[#F97D1C]">Oberdorfstr 6</div>
            <div className="text-[#F97D1C]">0754037204</div>
            <div className="text-[#F97D1C]">info@mg-clean.ch</div>
          </div>
          <div className="mt-8">
            <div className="text-[#F97D1C] font-medium mb-2">Follow us on social media:</div>
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
