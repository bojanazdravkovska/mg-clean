import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-[#3AA655] text-white shadow-xs hover:bg-[#338F4B] focus-visible:ring-[#3AA655]/30",
        destructive:
          "bg-error text-white shadow-xs hover:bg-error/90 focus-visible:ring-error-100 dark:focus-visible:ring-error-300 dark:bg-error-500",
        outline:
          "border border-[#3AA655] text-[#3AA655] bg-transparent shadow-xs hover:bg-[#3AA655]/10 dark:border-[#3AA655] dark:hover:bg-[#3AA655]/10",
        secondary: "bg-[#F97D1C] text-white shadow-xs hover:bg-[#D86200] focus-visible:ring-[#F97D1C]/30",
        ghost: "text-[#3AA655] hover:bg-[#3AA655]/10 hover:text-[#3AA655] dark:hover:bg-[#3AA655]/10",
        link: "text-[#3AA655] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-12 rounded-md px-6 text-base",
        icon: "size-10",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  fullWidth,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, fullWidth, className }))} {...props} />
}
Button.displayName = "Button"

export { Button, buttonVariants }
