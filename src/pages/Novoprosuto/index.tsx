import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";

const NovoprosutoPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 font-montserrat h-[1822px] mx-auto relative w-full">
        <div className="absolute flex flex-col items-center justify-start md:px-5 right-[0] top-[0] w-[79%]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex flex-col gap-[17px] items-end justify-end p-10 sm:px-5 shadow-bs1 w-full">
              <Text
                className="mr-[458px] mt-[25px] text-base text-gray-600 tracking-[-0.23px] uppercase"
                size="txtMontserratRomanLight16Gray600"
              >
                lorem ipsum exemplo
              </Text>
              <Text
                className="mr-[458px] md:text-3xl sm:text-[28px] text-[32px] text-yellow-900 tracking-[-0.23px] uppercase"
                size="txtMontserratRomanMedium32"
              >
                <span className="text-yellow-900 font-montserrat text-left font-medium">
                  N
                </span>
                <span className="text-yellow-900 font-montserrat text-left font-medium">
                  ovo produto
                </span>
              </Text>
            </div>
            <Line className="bg-black-900_16 h-px w-full" />
          </div>
        </div>
        <div className="absolute bottom-[4%] flex flex-col gap-[51px] items-center justify-start md:px-5 right-[6%] w-[71%]">
          <div className="flex flex-col gap-6 items-start justify-start w-[94%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[61%] md:w-full">
              <Text
                className="text-gray-900_99 text-lg"
                size="txtMontserratRomanRegular18Gray90099"
              >
                Titulo
              </Text>
              <Text
                className="text-gray-900_99 text-lg"
                size="txtMontserratRomanRegular18Gray90099"
              >
                Categoria
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
              <Input
                name="groupNinetyEight"
                placeholder="Campo em branco"
                className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="sm:flex-1 sm:w-full"
              ></Input>
              <Input
                name="groupNinetySix"
                placeholder="Campo em branco"
                className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="sm:flex-1 sm:w-full"
              ></Input>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[58%] md:w-full">
              <Text
                className="mt-0.5 text-gray-900_99 text-lg"
                size="txtMontserratRomanRegular18Gray90099"
              >
                Preço - BR (R$) real
              </Text>
              <Text
                className="mb-0.5 text-gray-900_99 text-lg"
                size="txtMontserratRomanRegular18Gray90099"
              >
                Moeda
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
              <Input
                name="groupNinetyFour"
                placeholder="Campo em branco"
                className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="sm:flex-1 sm:w-full"
              ></Input>
              <Input
                name="groupEightyNine"
                placeholder="Campo em branco"
                className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="sm:flex-1 sm:w-full"
              ></Input>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <Line className="bg-black-900_60 h-px w-full" />
            <div className="flex flex-row font-montserrat sm:gap-10 items-center justify-between md:ml-[0] ml-[22px] mt-[38px] w-[59%] md:w-full">
              <Text
                className="text-gray-900_99 text-lg"
                size="txtMontserratRomanRegular18Gray90099"
              >
                SKU
              </Text>
              <Text
                className="text-gray-900_99 text-lg"
                size="txtMontserratRomanRegular18Gray90099"
              >
                Quantidade
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-montserrat gap-[22px] items-center justify-between md:ml-[0] ml-[22px] mt-6 w-[93%] md:w-full">
              <Input
                name="groupNinetySeven"
                placeholder="Campo em branco"
                className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="md:w-full"
              ></Input>
              <Input
                name="groupNinetyFive"
                placeholder="Campo em branco"
                className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="md:w-full"
              ></Input>
            </div>
            <div className="flex flex-row font-montserrat items-center justify-between md:ml-[0] ml-[22px] mt-6 w-[51%] md:w-full">
              <Text
                className="text-gray-900_99 text-lg"
                size="txtMontserratRomanRegular18Gray90099"
              >
                Tamanho
              </Text>
              <Text
                className="text-gray-900_99 text-lg"
                size="txtMontserratRomanRegular18Gray90099"
              >
                Cor
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-montserrat gap-[22px] items-center justify-between md:ml-[0] ml-[22px] mt-6 w-[93%] md:w-full">
              <Input
                name="groupNinetyThree"
                placeholder="Campo em branco"
                className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="md:w-full"
              ></Input>
              <Input
                name="groupEightyEight"
                placeholder="Campo em branco"
                className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="md:w-full"
              ></Input>
            </div>
            <div className="flex flex-row font-montserrat sm:gap-10 items-center justify-between md:ml-[0] ml-[22px] mt-[25px] w-[53%] md:w-full">
              <Text
                className="text-gray-900_99 text-lg"
                size="txtMontserratRomanRegular18Gray90099"
              >
                Material
              </Text>
              <Text
                className="text-gray-900_99 text-lg"
                size="txtMontserratRomanRegular18Gray90099"
              >
                Estilo
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-montserrat gap-[22px] items-center justify-between md:ml-[0] ml-[22px] mt-[25px] w-[93%] md:w-full">
              <Input
                name="groupNinetyTwo"
                placeholder="Campo em branco"
                className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="md:w-full"
              ></Input>
              <Input
                name="groupNinety"
                placeholder="Campo em branco"
                className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
                wrapClassName="md:w-full"
              ></Input>
            </div>
            <Text
              className="md:ml-[0] ml-[22px] mt-[25px] text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Material
            </Text>
            <TextArea
              className="bg-transparent border border-black-900_66 border-solid font-light font-montserrat md:ml-[0] ml-[22px] mt-[25px] pb-[35px] pl-[21px] pr-[35px] pt-[27px] sm:px-5 rounded-[10px] placeholder:text-black-900_66 text-black-900_66 text-left text-lg w-[93%] sm:w-full"
              name="groupNinetyOne"
              placeholder="Campo em branco"
            ></TextArea>
            <Line className="bg-black-900_60 h-px mt-8 w-full" />
            <Text
              className="md:ml-[0] ml-[22px] mt-[33px] text-gray-900_99 text-lg uppercase"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Adicionar imagens do produto
            </Text>
            <div className="bg-gray-900_26 flex flex-col items-center justify-start md:ml-[0] ml-[22px] mr-[743px] mt-[34px] p-[117px] md:px-10 sm:px-5 rounded-[10px] w-1/4 md:w-full">
              <Img
                className="h-4 my-[27px] w-4"
                src="images/img_plus.svg"
                alt="plus"
              />
            </div>
            <Button
              className="common-pointer cursor-pointer font-bold font-lato min-w-[480px] sm:min-w-full md:ml-[0] ml-[252px] mr-[283px] mt-[57px] rounded-[12px] text-center text-lg"
              onClick={() => navigate("/produtosone")}
              color="blue_gray_900"
              size="lg"
              variant="fill"
            >
              Cadastrar produto
            </Button>
          </div>
        </div>
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[322px] bg-white-A700 border border-black-900_0a border-solid flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs top-[0]"
        >
          <div className="h-[119px] md:h-[178px] ml-[91px] mr-[118px] mt-[66px] relative w-[35%]">
            <Img
              className="absolute h-28 inset-x-[0] mx-auto rounded-[50%] top-[0] w-28"
              src="images/img_ellipse1.png"
              alt="ellipseOne"
            />
            <div className="absolute bg-yellow-900 border-[3px] border-gray-100 border-solid bottom-[0] h-9 right-[4%] rounded-[50%] w-9"></div>
          </div>
          <Text
            className="ml-[89px] mr-[104px] mt-0.5 text-blue_gray-900_a5 text-lg"
            size="txtMontserratRomanMedium18Bluegray900a5"
          >
            Nome usuário
          </Text>
          <Text
            className="common-pointer ml-[104px] mr-[109px] mt-1 text-blue_gray-900_a5 text-xs underline uppercase"
            size="txtMontserratRomanLight12"
            onClick={() => navigate("/configuraesone")}
          >
            CONFIGURAÇÕES
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "7px 7px 7px 22px",
                gap: "15px",
                color: "#0000008e",
                fontSize: "18px",
                borderRadius: "10px",
                [`&:hover, &.ps-active`]: {
                  color: "#ce8d0d",
                  fontWeight: "400 !important",
                  backgroundColor: "#ce8d0d26 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-end mt-[43px] pl-4 sm:pr-5 pr-[29px] pt-[18px] w-[87%]"
          >
            <MenuItem
              icon={
                <Img className="h-5 w-5" src="images/img_home.svg" alt="home" />
              }
              active={window.location.pathname === "/homeone"}
              href="/homeone"
            >
              <Text>Home</Text>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-5 w-5"
                  src="images/img_group5_gray_600.svg"
                  alt="groupFive"
                />
              }
              href="/notificaes"
            >
              <Text className="mb-[9px] mt-1">Notificações</Text>
            </MenuItem>
          </Menu>
          {!collapsed && (
            <Text
              className="ml-[29px] mr-[198px] mt-[46px] text-xs text-yellow-900_63"
              size="txtMontserratRomanSemiBold12"
            >
              MARKETPLACE
            </Text>
          )}
          {!collapsed && (
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[118px] ml-[39px] mr-[165px] mt-[26px]"
              onClick={() => navigate("/produtosone")}
              leftIcon={
                <Img
                  className="mb-1 mr-[15px]"
                  src="images/img_lock.svg"
                  alt="lock"
                />
              }
            >
              <div className="leading-[normal] text-black-900_8e text-left text-lg">
                Produtos
              </div>
            </Button>
          )}
          {!collapsed && (
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[102px] ml-[39px] mr-[181px] mt-[30px]"
              onClick={() => navigate("/ordens")}
              leftIcon={
                <div className="mt-[5px] mb-1 mr-[15px] bg-gray-600">
                  <Img src="images/img_user.svg" alt="user" />
                </div>
              }
            >
              <div className="leading-[normal] text-black-900_8e text-left text-lg">
                Ordens
              </div>
            </Button>
          )}
          {!collapsed && (
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[130px] ml-10 mr-[152px] mt-[91px]"
              onClick={() => navigate("/finaceiro")}
              leftIcon={
                <Img
                  className="mt-px mb-1 mr-4"
                  src="images/img_thumbsup_gray_600.svg"
                  alt="thumbs_up"
                />
              }
            >
              <div className="leading-[normal] text-black-900_8e text-left text-lg">
                Financeiro
              </div>
            </Button>
          )}
          {!collapsed && (
            <Text
              className="ml-[29px] mr-[169px] mt-[38px] text-xs text-yellow-900_63"
              size="txtMontserratRomanSemiBold12"
            >
              FUNCIONALIDADES
            </Text>
          )}
          {!collapsed && (
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[141px] ml-[39px] mr-[142px] mt-[27px]"
              onClick={() => navigate("/integraes")}
              leftIcon={
                <div className="h-5 mb-0.5 mr-[15px] w-5 bg-gray-600">
                  <Img
                    className="h-5"
                    src="images/img_contrast_gray_600_20x20.svg"
                    alt="contrast"
                  />
                </div>
              }
            >
              <div className="leading-[normal] text-black-900_8e text-left text-lg">
                Integrações
              </div>
            </Button>
          )}
          {!collapsed && (
            <Line className="bg-black-900_1e h-px mr-4 mt-[182px] w-[96%]" />
          )}
          {!collapsed && (
            <div className="bg-blue_gray-900 flex flex-col h-8 items-center justify-start mb-[1762px] ml-[290px] p-2.5 rounded-[50%] w-8">
              <Img
                className="h-[9px] w-2.5"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          )}
        </Sidebar>
      </div>
    </>
  );
};

export default NovoprosutoPage;
