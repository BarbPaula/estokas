import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const NotificaesPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 font-montserrat h-[1024px] mx-auto relative w-full">
        <div className="absolute flex flex-col items-center justify-start md:px-5 right-[0] top-[0] w-[79%]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-white-A700 flex flex-col gap-[19px] items-center justify-end p-[39px] sm:px-5 shadow-bs1 w-full">
              <Text
                className="mt-[26px] text-base text-gray-600 tracking-[-0.23px] uppercase"
                size="txtMontserratRomanLight16Gray600"
              >
                lorem ipsum exemplo
              </Text>
              <Text
                className="lowercase md:text-3xl sm:text-[28px] text-[32px] text-yellow-900 tracking-[-0.23px]"
                size="txtMontserratRomanMedium32"
              >
                <span className="text-yellow-900 font-montserrat uppercase text-left font-medium">
                  N
                </span>
                <span className="text-yellow-900 font-montserrat text-left font-medium">
                  OTIFICAÇÕES DA
                </span>
                <span className="text-yellow-900 font-montserrat uppercase text-left font-medium">
                  {" "}
                  P
                </span>
                <span className="text-yellow-900 font-montserrat text-left font-medium">
                  LATAFORMA
                </span>
              </Text>
            </div>
            <Line className="bg-black-900_16 h-px ml-0.5 md:ml-[0] w-full" />
            <Text
              className="md:ml-[0] ml-[61px] mt-[35px] text-base text-gray-600 tracking-[-0.23px] uppercase"
              size="txtMontserratRomanMedium16Gray600"
            >
              hoje
            </Text>
            <Text
              className="md:ml-[0] ml-[61px] mt-[195px] text-base text-gray-600 tracking-[-0.23px] uppercase"
              size="txtMontserratRomanMedium16Gray600"
            >
              ontem
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col gap-9 items-center justify-start md:px-5 right-[4%] top-[27%] w-[71%]">
          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between w-full">
              <div className="bg-yellow-900 flex flex-col h-[78px] items-center justify-start p-[22px] sm:px-5 rounded-[10px] w-[78px]">
                <Img className="h-8" src="images/img_fire.svg" alt="fire" />
              </div>
              <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[89%] md:w-full">
                <div className="flex flex-row gap-4 items-center justify-start w-[33%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtMontserratRomanMedium18Bluegray900"
                  >
                    Lorem ipsum dolor sit amet.{" "}
                  </Text>
                  <div className="bg-yellow-900 h-2.5 my-[5px] rounded-[50%] w-2.5"></div>
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtMontserratRomanLight16Black900"
                >
                  Lorem ipsum dolor sit amet. Aut quia iusto eos deleniti
                  veritatis qui velit internos nam fugit culpa. Hic ipsa soluta{" "}
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_1e h-px w-full" />
        </div>
        <List
          className="absolute bottom-[23%] flex flex-col gap-7 md:px-5 right-[5%] w-[70%]"
          orientation="vertical"
        >
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between w-full">
              <div className="bg-blue_gray-900_87 flex flex-col h-[78px] items-center justify-start p-[22px] sm:px-5 rounded-[10px] w-[78px]">
                <Img className="h-8" src="images/img_fire.svg" alt="fire" />
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtMontserratRomanMedium18Bluegray900"
                >
                  Lorem ipsum dolor sit amet.{" "}
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtMontserratRomanLight16Black900"
                >
                  Lorem ipsum dolor sit amet. Aut quia iusto eos deleniti
                  veritatis qui velit internos nam fugit culpa. Hic ipsa soluta{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between w-full">
              <div className="bg-blue_gray-900_87 flex flex-col h-[78px] items-center justify-start p-[22px] sm:px-5 rounded-[10px] w-[78px]">
                <Img className="h-8" src="images/img_fire.svg" alt="fire" />
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtMontserratRomanMedium18Bluegray900"
                >
                  Lorem ipsum dolor sit amet.{" "}
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtMontserratRomanLight16Black900"
                >
                  Lorem ipsum dolor sit amet. Aut quia iusto eos deleniti
                  veritatis qui velit internos nam fugit culpa. Hic ipsa soluta{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between w-full">
              <div className="bg-blue_gray-900_87 flex flex-col h-[78px] items-center justify-start p-[22px] sm:px-5 rounded-[10px] w-[78px]">
                <Img className="h-8" src="images/img_fire.svg" alt="fire" />
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtMontserratRomanMedium18Bluegray900"
                >
                  Lorem ipsum dolor sit amet.{" "}
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtMontserratRomanLight16Black900"
                >
                  Lorem ipsum dolor sit amet. Aut quia iusto eos deleniti
                  veritatis qui velit internos nam fugit culpa. Hic ipsa soluta{" "}
                </Text>
              </div>
            </div>
          </div>
        </List>
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
                padding: "9px 9px 9px 38px",
                gap: "15px",
                color: "#ce8d0d",
                fontSize: "18px",
                [`&:hover, &.ps-active`]: {
                  color: "#6c6c6c",
                  fontWeight: "400 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-end mt-[63px] w-full"
          >
            <MenuItem
              icon={
                <Img
                  className="h-5 w-5"
                  src="images/img_home_gray_600.svg"
                  alt="home"
                />
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
                  src="images/img_user_yellow_900.svg"
                  alt="user"
                />
              }
            >
              <Text className="my-1">Notificações</Text>
            </MenuItem>
          </Menu>
          {!collapsed && (
            <Text
              className="ml-[29px] mr-[198px] mt-11 text-xs text-yellow-900_63"
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
            <div className="bg-blue_gray-900 flex flex-col h-8 items-center justify-start mb-[964px] ml-[290px] p-2.5 rounded-[50%] w-8">
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

export default NotificaesPage;
