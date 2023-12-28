import React from "react";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-600",
    yellow_900: "bg-yellow-900",
    yellow_900_26: "bg-yellow-900_26 text-yellow-900",
    yellow_900_2d: "bg-yellow-900_2d text-yellow-900",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    yellow_900_d6: "bg-yellow-900_d6",
  },
  outline: {
    blue_gray_900:
      "border border-blue_gray-900 border-solid text-blue_gray-900",
  },
} as const;
const sizes = {
  xs: "p-2",
  sm: "p-[13px]",
  md: "p-[17px]",
  lg: "p-[21px] sm:px-5",
  xl: "p-6 sm:px-5",
  "2xl": "p-[29px] sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
