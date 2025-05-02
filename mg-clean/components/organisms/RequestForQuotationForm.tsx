import { Button } from "@/components/atoms/Button";
import { Checkbox } from "@/components/atoms/Checkbox";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/molecules/Select";
import { Textarea } from "@/components/atoms/Textarea";

export function RequestForQuotationForm() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[500px]">
        <div className="w-full max-w-2xl mx-auto text-left mb-8 lg:mb-0">
          <h2 className="text-2xl font-extrabold mb-4 text-[#3AA655]">Make a non-binding enquiry now!</h2>
          <hr className="border-black/50 mb-6" />
          <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Do you need professional property maintenance, cleaning, or garden care? Contact us for a free, no-obligation quote. We'll be happy to advise you and find the right solution for your needs!
          </p>
        </div>
        <div className="w-full max-w-md flex justify-center">
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
      </div>
    </div>
  );
} 