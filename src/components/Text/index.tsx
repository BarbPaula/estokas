import React from "react";

const sizeClasses = {
  txtLatoBold18: "font-bold font-lato",
  txtMontserratRomanRegular32: "font-montserrat font-normal",
  txtSoraRegular24: "font-normal font-sora",
  txtMontserratRomanMedium18Bluegray900a5: "font-medium font-montserrat",
  txtMontserratItalicSemiBold16: "font-montserrat font-semibold italic",
  txtMontserratRomanRegular12: "font-montserrat font-normal",
  txtMontserratRomanLight24: "font-light font-montserrat",
  txtMontserratRomanMedium18Bluegray900: "font-medium font-montserrat",
  txtMontserratRomanSemiBold12: "font-montserrat font-semibold",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtMontserratRomanMedium18: "font-medium font-montserrat",
  txtMontserratRomanLight16Black900: "font-light font-montserrat",
  txtMontserratRomanRegular16Gray600: "font-montserrat font-normal",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtMontserratRomanRegular18Gray600: "font-montserrat font-normal",
  txtMontserratRomanMedium32: "font-medium font-montserrat",
  txtMontserratRomanSemiBold12Yellow900bc: "font-montserrat font-semibold",
  txtMontserratRomanRegular16Bluegray900: "font-montserrat font-normal",
  txtMontserratRomanRegular18Yellow900: "font-montserrat font-normal",
  txtMontserratRomanMedium24Yellow900: "font-medium font-montserrat",
  txtMontserratRomanMedium18Yellow900: "font-medium font-montserrat",
  txtMontserratRomanRegular16Black90066: "font-montserrat font-normal",
  txtMontserratRomanMedium18Gray60002: "font-medium font-montserrat",
  txtMontserratRomanLight24Yellow900: "font-light font-montserrat",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtMontserratRomanRegular16: "font-montserrat font-normal",
  txtMontserratRomanLight16: "font-light font-montserrat",
  txtMontserratRomanMedium16Gray600: "font-medium font-montserrat",
  txtMontserratRomanLight3249: "font-light font-montserrat",
  txtMontserratRomanSemiBold24: "font-montserrat font-semibold",
  txtMontserratRomanLight16Gray600: "font-light font-montserrat",
  txtMontserratRomanLight18: "font-light font-montserrat",
  txtMontserratRomanRegular955: "font-montserrat font-normal",
  txtMontserratRomanRegular18Black9008e: "font-montserrat font-normal",
  txtMontserratRomanMedium20: "font-medium font-montserrat",
  txtMontserratRomanMedium18Black900: "font-medium font-montserrat",
  txtMontserratRomanRegular18Black900: "font-montserrat font-normal",
  txtRobotoRomanRegular12: "font-normal font-roboto",
  txtMontserratRomanRegular18Gray90099: "font-montserrat font-normal",
  txtMontserratRomanMedium24: "font-medium font-montserrat",
  txtMontserratRomanRegular18Black90038: "font-montserrat font-normal",
  txtMontserratRomanLight12: "font-light font-montserrat",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
