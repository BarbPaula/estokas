import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const SimuladordefretesPage: React.FC = () => {
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_home_gray_600.svg"
          alt="home"
        />
      ),
      label: "Home",
      href: "/homeone",
      active: window.location.pathname === "/homeone",
    },
    { label: "Notificações" },
    { label: "MARKETPLACE" },
    {
      icon: (
        <Img className="h-[19px] w-5" src="images/img_lock.svg" alt="lock" />
      ),
      label: "Catalogo",
      href: "/catalago",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 font-montserrat h-[1566px] mx-auto relative w-full">
        <div className="absolute flex flex-col items-center justify-start md:px-5 right-[0] top-[0] w-[79%]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex flex-col gap-4 items-center justify-end p-[41px] md:px-10 sm:px-5 shadow-bs1 w-full">
              <Text
                className="mt-6 text-base text-gray-600 tracking-[-0.23px] uppercase"
                size="txtMontserratRomanLight16Gray600"
              >
                lorem ipsum exemplo
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-yellow-900 tracking-[-0.23px] uppercase"
                size="txtMontserratRomanMedium32"
              >
                <span className="text-yellow-900 font-montserrat text-left font-medium">
                  S
                </span>
                <span className="text-yellow-900 font-montserrat text-left font-medium">
                  imulador de frete
                </span>
              </Text>
            </div>
            <Line className="bg-black-900_16 h-px w-full" />
          </div>
        </div>
        <div className="absolute bottom-[8%] flex flex-col items-start justify-start md:px-5 right-[9%] w-[66%]">
          <div className="flex flex-row items-center justify-between w-[54%] md:w-full">
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              CEP - Destino
            </Text>
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              N°
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-between mt-[25px] w-full">
            <Input
              name="group113"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
            <Input
              name="group111"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between mt-6 w-[58%] md:w-full">
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Bairro
            </Text>
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Cidade
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-between mt-6 w-full">
            <Input
              name="group109"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
            <Input
              name="group105"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between mt-[33px] w-[56%] md:w-full">
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Rua
            </Text>
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Obs
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-between mt-6 w-full">
            <Input
              name="group107"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
            <Input
              name="group103"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
          </div>
          <Line className="bg-black-900_26 h-px mt-[55px] w-full" />
          <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-11 w-[54%] md:w-full">
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              CEP - Envio do produto
            </Text>
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              N°
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-between ml-0.5 md:ml-[0] mt-[23px] w-full">
            <Input
              name="group112"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
            <Input
              name="group110"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-6 w-[58%] md:w-full">
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Bairro
            </Text>
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Cidade
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-between ml-0.5 md:ml-[0] mt-6 w-full">
            <Input
              name="group108"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
            <Input
              name="group104"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-[33px] w-[56%] md:w-full">
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Rua
            </Text>
            <Text
              className="text-gray-900_99 text-lg"
              size="txtMontserratRomanRegular18Gray90099"
            >
              Obs
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-between ml-0.5 md:ml-[0] mt-6 w-full">
            <Input
              name="group106"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
            <Input
              name="group102"
              placeholder="Campo em branco"
              className="font-light p-0 placeholder:text-black-900_66 text-left text-lg w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
          </div>
          <Line className="bg-black-900_26 h-px ml-0.5 md:ml-[0] mt-[83px] w-full" />
          <Text
            className="mt-[18px] text-2xl md:text-[22px] text-gray-900_99 sm:text-xl"
            size="txtMontserratRomanSemiBold24"
          >
            Valor de envios
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-0.5 md:ml-[0] mt-[38px] w-full">
            <Text
              className="capitalize text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem{" "}
            </Text>
            <Text
              className="capitalize sm:ml-[0] ml-[53px] text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem{" "}
            </Text>
            <Text
              className="capitalize sm:ml-[0] ml-[61px] text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem{" "}
            </Text>
            <Text
              className="capitalize sm:ml-[0] ml-[597px] text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem{" "}
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[49px] w-full">
            <Text
              className="capitalize text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem{" "}
            </Text>
            <Text
              className="capitalize sm:ml-[0] ml-[53px] text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem{" "}
            </Text>
            <Text
              className="capitalize sm:ml-[0] ml-[61px] text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem
            </Text>
            <Text
              className="capitalize sm:ml-[0] ml-[597px] text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem
            </Text>
          </div>
        </div>
        <Sidebar className="!sticky !w-[322px] bg-white-A700 border border-black-900_0a border-solid flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs top-[0]">
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
            onClick={() => navigate("/configuraes")}
          >
            CONFIGURAÇÕES
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                gap: "15px",
                marginTop: "29px",
                fontSize: "18px",
                paddingLeft: "39px",
                paddingRight: "39px",
                [`&:hover, &.ps-active`]: {
                  color: "#6c6c6c",
                  fontWeight: "400 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-start mt-[77px] w-full"
          >
            <div className="flex flex-col items-center justify-start w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
              <SubMenu
                icon={
                  <Img
                    className="h-3 my-1"
                    src="images/img_sort.svg"
                    alt="sort"
                  />
                }
                label={<Text className="text-yellow-900">Pedidos</Text>}
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[322px] mt-[30px]"
              onClick={() => navigate("/reembolsos")}
              leftIcon={
                <div className="h-5 mt-0.5 mr-4 w-5 bg-gray-600">
                  <Img
                    className="h-5"
                    src="images/img_contrast_gray_600.svg"
                    alt="contrast"
                  />
                </div>
              }
            >
              <div className="leading-[normal] text-black-900_8e text-left text-lg">
                Reembolsos
              </div>
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[322px] mt-[30px]"
              onClick={() => navigate("/produtos")}
              leftIcon={
                <Img
                  className="mb-1 mr-4"
                  src="images/img_thumbsup.svg"
                  alt="thumbs_up"
                />
              }
            >
              <div className="leading-[normal] text-black-900_8e text-left text-lg">
                Produtos selecionados
              </div>
            </Button>
            <Text
              className="mt-5 text-xs text-yellow-900_63"
              size="txtMontserratRomanSemiBold12"
            >
              FUNCIONALIDADES
            </Text>
            <div className="flex flex-col gap-[39px] items-center justify-start mt-[38px] w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_contrast_gray_600_20x20.svg"
                    alt="contrast"
                  />
                }
              >
                <Text className="text-black-900_8e">Integrações</Text>
              </MenuItem>
              <MenuItem>
                <div className="flex flex-row items-center justify-start sm:px-5">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[107px]"
                    onClick={() => navigate("/suporte")}
                    leftIcon={
                      <Img
                        className="h-5 mb-[3px] mr-[15px]"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    }
                  >
                    <div className="leading-[normal] text-black-900_8e text-left text-lg">
                      Suporte
                    </div>
                  </Button>
                </div>
              </MenuItem>
            </div>
          </Menu>
          <Line className="bg-black-900_1e h-px mr-4 mt-[135px] w-[96%]" />
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[158px] ml-[47px] mr-[117px] mt-[21px]"
            onClick={() => navigate("/")}
            leftIcon={
              <div className="h-5 mr-5 w-5 bg-gray-600 my-px">
                <Img
                  className="h-5"
                  src="images/img_arrowleft.svg"
                  alt="arrow_left"
                />
              </div>
            }
          >
            <div className="leading-[normal] text-black-900_8e text-left text-lg">
              Sair da conta
            </div>
          </Button>
          <div className="bg-blue_gray-900 flex flex-col h-8 items-center justify-start mb-[1506px] ml-[290px] p-2.5 rounded-[50%] w-8">
            <Img
              className="h-[9px] w-2.5"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default SimuladordefretesPage;
