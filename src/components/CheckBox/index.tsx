import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: { yellow_900: "bg-yellow-900 text-blue_gray-900_a5" },
  outline: {
    blue_gray_900:
      "border border-blue_gray-900 border-solid text-blue_gray-900",
  },
};
const shapes = { square: "rounded-none", round: "rounded-sm" };

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    errors: string[];
    id: string;
    onChange: Function;
    color: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
  }>;

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      errors = [],
      id = "checkbox_id",
      onChange,
      color = "blue_gray_900",
      shape = "round",
      variant = "outline",

      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (variant && variants[variant]?.[color]) || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

export { CheckBox };
