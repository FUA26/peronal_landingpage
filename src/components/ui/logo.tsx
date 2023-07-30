import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const logoVariants = cva("", {
  variants: {
    size: {
      default: "h-9",
      sm: "h-8",
      lg: "h-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface LogoProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof logoVariants> {}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  const logoClasses = cn(logoVariants(props), className);
  const full = false;
  // className = { logoClasses };
  return (
    <svg
      className={logoClasses}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M96.7182 80V95.4482C96.7182 95.6344 96.7182 95.8205 96.7073 96.0066C96.4117 104.59 89.3609 111.455 80.7117 111.455C72.0624 111.455 65.0226 104.59 64.727 96.0066H64.716V64.0044H80.7117C89.547 64.0044 96.7182 71.1647 96.7182 80Z"
        fill="#F8B501"
      />
      <path
        d="M96.7182 144.004V160H80.7117C71.8763 160 64.716 152.84 64.716 144.004C64.716 135.169 71.8763 128.009 80.7117 128.009C89.547 128.009 96.7182 135.169 96.7182 144.004Z"
        fill="#F8B501"
      />
      <path
        d="M160 64.0044V144.004C160 152.84 152.84 160 144.004 160H127.998V80C127.998 71.1647 135.169 64.0044 144.004 64.0044H160Z"
        fill="#F8B501"
      />
      <path
        d="M160 0V16.0066C160 24.8419 152.84 32.0022 144.004 32.0022H48.7204C39.8741 32.0022 32.7138 39.1734 32.7138 48.0088V144.004C32.7138 152.84 25.5536 160 16.7182 160H0V16.0066C0 7.17121 7.16026 0 15.9956 0H160Z"
        fill="#F8B501"
      />
    </svg>
  );
};

export default Logo;
