import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const SuportePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-montserrat items-start justify-start mx-auto w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[322px] bg-white-A700 border border-black-900_0a border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs top-[0]"
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
            onClick={() => navigate("/configuraes")}
          >
            CONFIGURAÇÕES
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "12px 12px 12px 22px",
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
            className="flex flex-col items-center justify-start mt-[60px] pl-4 sm:pr-5 pr-[29px] py-4 w-[87%]"
          >
            <div className="flex flex-col items-center justify-start w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_home.svg"
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
                    src="images/img_group5_gray_600.svg"
                    alt="groupFive"
                  />
                }
                href="/notificaesone"
              >
                <Text className="my-1">Notificações</Text>
              </MenuItem>
            </div>
            <Text
              className="mt-[30px] text-xs text-yellow-900_63"
              size="txtMontserratRomanSemiBold12"
            >
              MARKETPLACE
            </Text>
            <div className="flex flex-col items-center justify-end mt-[26px] pb-[123px] w-full">
              <div className="flex flex-col md:gap-10 gap-[260px] items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[19px] w-5"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  }
                  href="/catalago"
                >
                  <Text className="my-1">Catalogo</Text>
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
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[277px] mt-[29px]"
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
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-[126px] min-w-[277px] mt-[30px]"
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
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[277px]"
              onClick={() => navigate("/pedidos")}
              leftIcon={
                <div className="mt-[5px] mb-1 mr-[15px] bg-gray-600">
                  <Img src="images/img_user.svg" alt="user" />
                </div>
              }
            >
              <div className="leading-[normal] text-black-900_8e text-left text-lg">
                Pedidos
              </div>
            </Button>
          </Menu>
          {!collapsed && (
            <Line className="bg-black-900_1e h-px mr-4 mt-[152px] w-[96%]" />
          )}
          {!collapsed && (
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

export default SuportePage;
