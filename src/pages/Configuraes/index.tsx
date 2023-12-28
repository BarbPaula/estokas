import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const ConfiguraesPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 font-montserrat h-[1024px] mx-auto relative w-full">
        <div className="absolute md:h-[266px] h-[370px] md:px-5 right-[0] top-[0] w-[79%] md:w-full">
          <div className="absolute bg-white-A700 h-[266px] inset-x-[0] mx-auto shadow-bs1 top-[0] w-full"></div>
          <Img
            className="absolute bottom-[0] h-[220px] left-[38%] rounded-[50%] w-[220px]"
            src="images/img_ellipse1_220x220.png"
            alt="ellipseOne"
          />
        </div>
        <Button
          className="absolute border-[5px] border-gray-100 border-solid flex h-[71px] items-center justify-center right-[35%] rounded-[35px] top-[30%] w-[71px]"
          color="yellow_900"
          size="xl"
          variant="fill"
        >
          <Img
            className="h-[25px]"
            src="images/img_user_gray_100.svg"
            alt="user"
          />
        </Button>
        <div className="absolute bottom-[14%] flex flex-col items-start justify-start md:px-5 right-[9%] w-[66%]">
          <div className="flex flex-row sm:gap-10 items-start justify-between w-[57%] md:w-full">
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Nome completo
            </Text>
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Email
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-[23px] w-full">
            <Input
              name="groupFiftyEight"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
            <Input
              name="groupFiftySeven"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between mt-[25px] w-[63%] md:w-full">
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              CPF/ CNPJ
            </Text>
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Razão social
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-[25px] w-full">
            <Input
              name="groupFiftySix"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
            <Input
              name="groupFiftyFour"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
          </div>
          <Text
            className="mt-[25px] text-gray-900_99 text-lg"
            size="txtMontserratRomanRegular18Gray90099"
          >
            Senha{" "}
          </Text>
          <Input
            name="groupFiftyFive"
            placeholder="Campo em branco"
            className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
            wrapClassName="mt-[25px] w-[49%]"
          ></Input>
          <Text
            className="md:ml-[0] ml-[315px] mt-[22px] text-lg text-yellow-900 underline"
            size="txtMontserratRomanMedium18Yellow900"
          >
            Modificar senha
          </Text>
        </div>
        <Sidebar1 className="!sticky !w-[322px] bg-white-A700 border border-black-900_0a border-solid flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs top-[0]" />
      </div>
    </>
  );
};

export default ConfiguraesPage;
