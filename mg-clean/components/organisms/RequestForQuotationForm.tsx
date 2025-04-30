import { Button } from "@/components/atoms/Button";
import { Checkbox } from "@/components/atoms/Checkbox";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/molecules/Select";
import { Textarea } from "@/components/atoms/Textarea";

export function RequestForQuotationForm() {
  return (
    <form className="flex-1 flex flex-col gap-4 p-6 border border-gray-200 rounded-md bg-white shadow-none min-w-[320px] max-w-md lg:translate-x-[-12rem] lg:ml-[-4rem]">
      <h2 className="text-xl font-semibold mb-2">Request for quotation</h2>
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
        <div className="flex flex-wrap gap-6 border p-2 rounded">
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
      <Button type="submit" className="mt-2">Submit</Button>
    </form>
  );
} 