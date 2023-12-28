import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = { round: "rounded-[10px]" } as const;
const variants = {
  outline: {
    black_900_3d: "border border-black-900_3d border-solid",
    black_900_66: "border border-black-900_66 border-solid text-black-900_66",
  },
  fill: { gray_600_21: "bg-gray-600_21 text-black-900_66" },
} as const;
const sizes = {
  xs: "pb-6 pt-[17px] px-[17px]",
  sm: "pb-4 pt-[18px] px-4",
  md: "pb-[18px] pt-[23px] px-[18px]",
  lg: "pb-6 pl-[21px] pr-6 pt-[27px] sm:px-5",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      size = "lg",
      variant = "outline",
      color = "black_900_66",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]?.[color]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
