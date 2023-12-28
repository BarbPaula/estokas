import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const SelecioneoperfilOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-900 font-montserrat h-[1024px] mx-auto pb-[142px] relative w-full">
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
                  onClick={() => navigate("/")}
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
        <div className="absolute bg-gray-100 bottom-[14%] flex flex-col inset-x-[0] items-center justify-end max-w-[920px] mx-auto p-10 md:px-5 rounded-[20px] w-full">
          <div className="flex flex-col items-center justify-start mt-[22px] w-[95%] md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-yellow-900 tracking-[-0.23px]"
              size="txtMontserratRomanMedium32"
            >
              Selecione o perfil desejado
            </Text>
            <Line className="bg-black-900_23 h-px mt-[31px] w-full" />
            <div className="flex md:flex-col flex-row font-sora md:gap-10 items-center justify-between mt-[59px] w-[90%] md:w-full">
              <div
                className="common-pointer bg-gray-800_42 border border-solid border-white-A700 flex flex-col gap-[15px] items-center justify-end p-7 sm:px-5 rounded-[20px] w-[45%] md:w-full"
                onClick={() => navigate("/selecioneoperfil")}
              >
                <Img
                  className="h-[175px] md:h-auto mt-[29px] object-cover w-[175px]"
                  src="images/img_maskgroup_175x175.png"
                  alt="maskgroup"
                />
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtSoraRegular24"
                >
                  Fornecedor
                </Text>
              </div>
              <div
                className="common-pointer bg-yellow-900_af border-[3px] border-solid border-white-A700 flex flex-col items-center justify-end p-7 sm:px-5 rounded-[20px] shadow-bs w-[45%] md:w-full"
                onClick={() => navigate("/cadastrarseone")}
              >
                <Img
                  className="h-[218px] md:h-auto object-cover w-[218px]"
                  src="images/img_maskgroup_218x218.png"
                  alt="maskgroup_One"
                />
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtSoraRegular24"
                >
                  Vendedor
                </Text>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-bold font-lato min-w-[480px] sm:min-w-full mt-11 rounded-[12px] text-center text-lg"
              onClick={() => navigate("/cadastrarseone")}
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

export default SelecioneoperfilOnePage;
