import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const SenhaOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-900 font-montserrat h-[1024px] mx-auto pb-[130px] relative w-full">
        <div className="absolute h-[718px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[718px] m-auto object-cover w-full"
            src="images/img_rectangle22455.png"
            alt="rectangle22455"
          />
          <div className="absolute bg-blue_gray-900_b2 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[639px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-end p-7 sm:px-5 w-full">
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[88px] md:ml-[0] ml-[11px]"
                  onClick={() => navigate("/cadastrarseone")}
                  leftIcon={
                    <div className="mt-0.5 mb-[3px] mr-[17px] bg-gray-600">
                      <Img
                        src="images/img_arrowleft_gray_600.svg"
                        alt="arrow_left"
                      />
                    </div>
                  }
                >
                  <div className="font-light text-base text-gray-600 text-left tracking-[-0.23px] uppercase">
                    Voltar
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray-100 bottom-[13%] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[60px] md:px-5 rounded-[20px] w-[45%]">
          <Text
            className="text-base text-gray-600 tracking-[-0.23px] uppercase"
            size="txtMontserratRomanLight16Gray600"
          >
            fornecedor
          </Text>
          <Text
            className="capitalize mt-2.5 md:text-3xl sm:text-[28px] text-[32px] text-yellow-900 tracking-[-0.23px]"
            size="txtMontserratRomanMedium32"
          >
            Escolha a sua senha
          </Text>
          <div className="flex flex-col items-start justify-start mb-[42px] mt-[21px] w-[92%] md:w-full">
            <Line className="bg-black-900_23 h-px w-full" />
            <Text
              className="mt-[94px] text-gray-900_99 text-lg"
              size="txtMontserratRomanMedium18"
            >
              Senha{" "}
            </Text>
            <Input
              name="group379"
              placeholder="Lorem Ipsum"
              className="font-montserrat p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="mt-[19px] w-full"
              color="gray_600_21"
              variant="fill"
            ></Input>
            <Text
              className="mt-[26px] text-gray-900_99 text-lg"
              size="txtMontserratRomanMedium18"
            >
              Confirmação de senha
            </Text>
            <Input
              name="group378"
              placeholder="Lorem Ipsum"
              className="font-montserrat p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="mt-[17px] w-full"
              color="gray_600_21"
              variant="fill"
            ></Input>
            <Button
              className="common-pointer cursor-pointer font-bold font-lato min-w-[480px] sm:min-w-full mt-[46px] rounded-[12px] text-center text-lg"
              onClick={() => navigate("/homeone")}
              color="blue_gray_900"
              size="xl"
              variant="fill"
            >
              Prosseguir
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SenhaOnePage;
