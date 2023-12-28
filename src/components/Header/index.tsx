import React from "react";

import { Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 border border-solid border-yellow-900_6d flex flex-col items-end justify-end pl-[3px] py-[3px] rounded-[10px] shadow-bs w-[33%] md:w-full">
          <div className="flex flex-col gap-[13px] items-start justify-start mt-4 w-[97%] md:w-full">
            <Text
              className="text-center text-gray-600_02 text-lg"
              size="txtMontserratRomanMedium18Gray60002"
            >
              PENDENTES
            </Text>
            <div className="flex flex-row gap-2 items-start justify-between w-full">
              <Text
                className="mt-[13px] sm:text-[28.490000000000002px] md:text-[30.490000000000002px] text-[32.49px] text-center text-yellow-900_63"
                size="txtMontserratRomanLight3249"
              >
                21234
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start pb-5"
                style={{ backgroundImage: "url('images/img_group239.svg')" }}
              >
                <Img
                  className="h-[60px]"
                  src="images/img_vector61_gray_600_01.svg"
                  alt="vectorSixtyOne"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-solid border-yellow-900_6d flex flex-col items-end justify-end md:ml-[0] ml-[19px] pl-[3px] py-[3px] rounded-[10px] shadow-bs w-[33%] md:w-full">
          <div className="flex flex-col gap-[13px] items-start justify-start mt-4 w-[97%] md:w-full">
            <Text
              className="text-center text-gray-600_02 text-lg"
              size="txtMontserratRomanMedium18Gray60002"
            >
              PAGOS
            </Text>
            <div className="flex flex-row gap-2 items-start justify-between w-full">
              <Text
                className="mt-[13px] sm:text-[28.490000000000002px] md:text-[30.490000000000002px] text-[32.49px] text-center text-yellow-900_63"
                size="txtMontserratRomanLight3249"
              >
                21234
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start pb-5"
                style={{ backgroundImage: "url('images/img_group239.svg')" }}
              >
                <Img
                  className="h-[60px]"
                  src="images/img_vector61_gray_600_01.svg"
                  alt="vectorSixtyOne_One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-solid border-yellow-900_6d flex flex-col items-end justify-end ml-5 md:ml-[0] pl-[3px] py-[3px] rounded-[10px] shadow-bs w-[33%] md:w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start mt-4 w-[97%] md:w-full">
            <Text
              className="md:ml-[0] ml-[3px] text-center text-gray-600_02 text-lg"
              size="txtMontserratRomanMedium18Gray60002"
            >
              ENVIADAS/ ENTREGUES
            </Text>
            <div className="flex flex-row gap-2 items-start justify-between w-full">
              <Text
                className="mt-[13px] sm:text-[28.490000000000002px] md:text-[30.490000000000002px] text-[32.49px] text-center text-yellow-900_63"
                size="txtMontserratRomanLight3249"
              >
                21234
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start pb-5"
                style={{ backgroundImage: "url('images/img_group239.svg')" }}
              >
                <Img
                  className="h-[60px]"
                  src="images/img_vector61_gray_600_01.svg"
                  alt="vectorSixtyOne_Two"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
