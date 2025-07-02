import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default:
        "text-[1.4rem] font-medium group transition-all shadow-03 cursor-pointer group duration-200  bg-[#FF4F3F] inline-flex font-normal items-center gap-[.5rem] justify-center px-[1.4rem] py-[1rem] text-white rounded-[.8rem]",
      dark: "text-[1.4rem] font-medium group transition-all shadow-03 cursor-pointer group duration-200 bg-(--base-color-01) inline-flex font-normal items-center gap-[.5rem] justify-center px-[1.4rem] py-[1rem] text-white rounded-[.8rem]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
