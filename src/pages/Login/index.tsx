import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-900 font-montserrat h-[1024px] mx-auto relative w-full">
        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:h-[1166px] h-[786px] md:px-5 relative w-full">
              <Img
                className="h-[786px] m-auto object-cover w-full"
                src="images/img_rectangle22455.png"
                alt="rectangle22455"
              />
              <div className="absolute bg-blue_gray-900_b2 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[690px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Header1 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                </div>
              </div>
            </div>
            <div className="bg-yellow-900 h-[238px] shadow-bs1 w-full"></div>
          </div>
        </div>
        <div className="absolute bg-gray-100 bottom-[9%] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[39px] md:px-5 rounded-[20px] w-1/2">
          <div className="flex flex-col gap-[21px] items-center justify-start mb-[34px] w-[77%] md:w-full">
            <Img
              className="h-[81px] md:h-auto object-cover w-[85%]"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="leading-[150.00%] text-base text-center text-gray-600_01 w-full"
                size="txtMontserratRomanRegular16"
              >
                Lorem ipsum dolor sit amet. Non ratione velit At omnis vero ea
                nihil voluptatibus est autem vero et natus laudantium aut
              </Text>
              <Text
                className="mt-[45px] text-gray-900_99 text-lg"
                size="txtMontserratRomanMedium18"
              >
                Email
              </Text>
              <Input
                name="email_One"
                placeholder="Emailexemplo123@gmail.com"
                className="font-montserrat p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="mt-3.5 w-full"
                type="email"
                color="gray_600_21"
                size="md"
                variant="fill"
              ></Input>
              <Text
                className="mt-[22px] text-gray-900_99 text-lg"
                size="txtMontserratRomanMedium18"
              >
                Senha
              </Text>
              <Input
                name="password"
                placeholder="***************"
                className="font-montserrat p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="flex mt-3.5 w-full"
                suffix={
                  <div className="mt-[3px] mb-px ml-[35px] w-[19px] bg-black-900_66">
                    <Img
                      className="my-auto"
                      src="images/img_music.svg"
                      alt="music"
                    />
                  </div>
                }
                color="gray_600_21"
                size="xs"
                variant="fill"
              ></Input>
              <div className="flex sm:flex-col flex-row font-montserrat sm:gap-5 items-start justify-start mt-4 w-full">
                <div className="border border-black-900_66 border-solid h-[18px] sm:mt-0 mt-0.5 rounded-sm w-[5%]"></div>
                <Text
                  className="sm:ml-[0] ml-[9px] text-base text-black-900_66"
                  size="txtMontserratRomanRegular16Black90066"
                >
                  Lembrar de mim
                </Text>
                <Text
                  className="sm:ml-[0] ml-[184px] text-base text-black-900_66 underline"
                  size="txtMontserratRomanMedium16"
                >
                  Esqueci a senha
                </Text>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold font-lato min-w-[480px] sm:min-w-full mt-8 rounded-[12px] text-center text-lg"
                onClick={() => navigate("/home1")}
                color="blue_gray_900"
                size="lg"
                variant="fill"
              >
                Prosseguir
              </Button>
              <Button
                className="common-pointer cursor-pointer font-bold font-lato min-w-[480px] sm:min-w-full mt-3 rounded-[12px] text-center text-lg"
                onClick={() => navigate("/selecioneoperfil")}
                color="blue_gray_900"
                size="lg"
                variant="outline"
              >
                Cadastrar- se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
