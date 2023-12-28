import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const IntegraesOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 font-montserrat h-[1024px] mx-auto relative w-full">
        <div className="absolute bg-white-A700 flex flex-col gap-[26px] items-start justify-end p-[38px] md:px-5 right-[0] shadow-bs1 top-[0]">
          <Text
            className="md:ml-[0] ml-[387px] mt-[22px] text-base text-gray-600 tracking-[-0.23px] uppercase"
            size="txtMontserratRomanLight16Gray600"
          >
            lorem ipsum exemplo
          </Text>
          <Text
            className="lowercase md:ml-[0] ml-[392px] md:text-3xl sm:text-[28px] text-[32px] text-yellow-900 tracking-[-0.23px]"
            size="txtMontserratRomanMedium32"
          >
            Integrações
          </Text>
        </div>
        <List
          className="absolute sm:flex-col flex-row gap-[34px] grid md:grid-cols-1 grid-cols-2 inset-x-[0] justify-center mx-auto md:px-5 top-[24%] w-[51%]"
          orientation="horizontal"
        >
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-end p-3 rounded-[10px] shadow-bs w-full">
              <div className="flex flex-col items-start justify-start mt-4 w-[94%] md:w-full">
                <Img
                  className="h-[199px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_rectangle2071.png"
                  alt="rectangle2071"
                />
                <Text
                  className="md:ml-[0] ml-[5px] mt-5 text-black-900 text-lg"
                  size="txtMontserratRomanMedium18Black900"
                >
                  Lorem ipsum dolor sit amet.{" "}
                </Text>
                <Text
                  className="leading-[30.00px] md:ml-[0] ml-[5px] mt-3 text-base text-black-900 w-[97%] sm:w-full"
                  size="txtMontserratRomanLight16Black900"
                >
                  Lorem ipsum dolor sit amet. Aut quia iusto eos deleniti{" "}
                </Text>
              </div>
              <Line className="bg-black-900_38 h-px mt-[23px] w-full" />
              <Text
                className="mb-[5px] mt-[19px] text-lg text-yellow-900"
                size="txtMontserratRomanMedium18Yellow900"
              >
                Integrar{" "}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-end p-3 rounded-[10px] shadow-bs w-full">
              <div className="flex flex-col items-start justify-start mt-4 w-[94%] md:w-full">
                <div className="bg-black-900_19 h-[199px] rounded-[10px] w-full"></div>
                <Text
                  className="md:ml-[0] ml-[5px] mt-5 text-black-900 text-lg"
                  size="txtMontserratRomanMedium18Black900"
                >
                  Lorem ipsum dolor sit amet.{" "}
                </Text>
                <Text
                  className="leading-[30.00px] md:ml-[0] ml-[5px] mt-3 text-base text-black-900 w-[97%] sm:w-full"
                  size="txtMontserratRomanLight16Black900"
                >
                  Lorem ipsum dolor sit amet. Aut quia iusto eos deleniti{" "}
                </Text>
              </div>
              <Line className="bg-black-900_38 h-px mt-[23px] w-full" />
              <Text
                className="mb-[5px] mt-[19px] text-lg text-yellow-900"
                size="txtMontserratRomanMedium18Yellow900"
              >
                Nova integração
              </Text>
            </div>
          </div>
        </List>
        <Sidebar1 className="!sticky !w-[322px] bg-white-A700 border border-black-900_0a border-solid flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs top-[0]" />
      </div>
    </>
  );
};

export default IntegraesOnePage;
