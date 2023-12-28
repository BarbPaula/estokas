import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const IntegraesPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

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
                padding: 0,
                gap: "15px",
                color: "#0000008e",
                fontSize: "18px",
                paddingLeft: "4px",
                paddingRight: "4px",
                [`&:hover, &.ps-active`]: {
                  color: "#6c6c6c",
                  fontWeight: "400 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-start mt-[77px] pb-[165px] w-full"
          >
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
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
              <MenuItem>
                <div className="flex flex-col items-start justify-start">
                  <Text className="md:ml-[0] ml-[69px]">Notificações</Text>
                </div>
              </MenuItem>
            </div>
            <Text
              className="mt-[25px] text-xs text-yellow-900_63"
              size="txtMontserratRomanSemiBold12"
            >
              MARKETPLACE
            </Text>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[322px] mt-[26px]"
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
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[322px] mt-[30px]"
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
            <div className="flex flex-col items-center justify-start mt-[29px] pb-28 w-full">
              <div className="flex flex-col md:gap-10 gap-[193px] items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[34px] md:h-auto object-cover w-[34px]"
                      src="images/img_maskgroup.png"
                      alt="maskgroup"
                    />
                  }
                  active={window.location.pathname === "/envios"}
                  href="/envios"
                >
                  <Text>Envios</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-5 w-5"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                  }
                  active={window.location.pathname === "/suporte"}
                  href="/suporte"
                >
                  <Text>Suporte</Text>
                </MenuItem>
              </div>
              <Text
                className="text-xs text-yellow-900_63"
                size="txtMontserratRomanSemiBold12"
              >
                FUNCIONALIDADES
              </Text>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[322px]"
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
          </Menu>
          {!collapsed && (
            <Line className="bg-black-900_1e h-px mr-4 mt-[120px] w-[96%]" />
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

export default IntegraesPage;
