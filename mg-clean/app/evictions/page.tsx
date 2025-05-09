import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { Label } from "@/components/atoms/Label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/molecules/Select"
import { Checkbox } from "@/components/atoms/Checkbox"
import { Input } from "@/components/atoms/Input"
import { Textarea } from "@/components/atoms/Textarea"


export default function EvictionsPage() {
  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/evictions.png"
            alt="Evictions"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Evictions
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              Professional eviction services
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-0">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">Clearances & Disposals</h2>
        <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-4" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 text-base leading-relaxed text-gray-800">
          <p>Clearances can be quite stressful. Relax and let us clear your property. We are your professionals when it comes to clearances, clearing out, and disposal. We clear your property and clean it thoroughly. From attics to garages, from pianos to wooden cabinets, we clear and dispose of all materials. This includes specialty materials such as paints, cleaning agents, acids, etc. Benefit from our affordable prices. The disposal fees are passed on directly to you. You only pay for the work!</p>
          <p className="mt-4">Whether it&apos;s household clearances, evictions, company liquidations or messy apartments – we&apos;re up for any mess!</p>
        </div>
        <div className="md:w-1/2 text-base leading-relaxed text-gray-800">
          <p className="font-semibold">Environmentally friendly disposal</p>
          <p>Environmental protection is a top priority for us. We offer compliant waste separation for clearances, clearing out, and disposal services. This not only benefits the environment, but also saves you, the customer, a considerable amount of money. Disposal costs vary depending on the material. For example, disposing of wood is almost 20% cheaper than disposing of bulky waste. Materials that are no longer needed are recycled. With our waste separation, we ensure the most cost-effective clearance possible.</p>
        </div>
      </div>
      {/* Gallery Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-200 hover:scale-105 relative">
            <Image src="/assets/images/img1.jpg" alt="Gallery 1" fill className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-200 hover:scale-105 relative">
            <Image src="/assets/images/img2.jpg" alt="Gallery 2" fill className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-200 hover:scale-105 relative">
            <Image src="/assets/images/img3.jpg" alt="Gallery 3" fill className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-200 hover:scale-105 relative">
            <Image src="/assets/images/img4.jpg" alt="Gallery 4" fill className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      {/* Partner Section */}
      <section className="w-full py-12 md:py-24 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-white">Our partner for environmentally friendly disposal</h3>
            <p className="text-gray-300 text-lg">Working together for a sustainable future</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-[#2D3748] p-4 rounded-lg flex items-center justify-center h-24 w-40">
              <Image src="/assets/images/references/benu.png" alt="Partner Logo" width={160} height={64} className="max-h-16 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
      {/* Quotation Section with Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-12">
        {/* Text from the image, styled like other sections */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-start">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 mt-8">
            Services
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
          <ul className="mb-6 space-y-2">
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">House clearances</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">Evictions</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">Cellar clearances</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">Large-scale clearances</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">Company dissolutions</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">Household clearances</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">Clearances</span></li>
          </ul>
          <p className="text-[13px] text-gray-700" style={{ fontStyle: "italic" }}>
            As a clearance company, we will provide you with an optimal offer after a preliminary inspection. We will give you a credit for any items we can resell with your consent. If you would like a final cleaning after the clearance, we would, of course, be happy to provide this, including a purchase guarantee.
          </p>
        </div>
        {/* Request for Quotation Form */}
        <div className="flex-1 min-w-[280px] flex justify-center">
          <form className="w-full max-w-[400px] flex flex-col gap-3 p-4 border border-gray-200 rounded-md bg-white shadow-md">
            <h2 className="text-xl font-semibold mb-1 text-[#F97D1C] text-center">Request for quotation</h2>
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
