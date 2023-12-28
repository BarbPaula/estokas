import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

type Sidebar11Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Sidebar11: React.FC<Sidebar11Props> = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="h-[119px] md:h-[178px] ml-[91px] mr-[118px] mt-[66px] relative w-[35%]">
          <Img
            className="absolute h-28 inset-x-[0] mx-auto rounded-[50%] top-[0] w-28"
            src="images/img_ellipse1.png"
            alt="ellipseOne_One"
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
          className="ml-[104px] mr-[109px] mt-1 text-blue_gray-900_a5 text-xs underline uppercase"
          size="txtMontserratRomanLight12"
        >
          CONFIGURAÇÕES
        </Text>
        <Menu
          menuItemStyles={{
            button: {
              padding: "12px",
              gap: "15px",
              color: "#0000008e",
              fontSize: "18px",
              fontFamily: "Montserrat",
              [`&:hover, &.ps-active`]: {
                color: "#6c6c6c",
                fontWeight: "400 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-end mt-[61px] w-full"
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
          >
            <Text>Home</Text>
          </MenuItem>
          <MenuItem>
            <div className="flex flex-col items-start justify-start md:w-full">
              <Text className="mb-[5px] md:ml-[0] ml-[61px]">Notificações</Text>
            </div>
          </MenuItem>
        </Menu>
        {!collapsed && (
          <Text
            className="ml-[29px] mr-[198px] mt-[42px] text-xs text-yellow-900_63"
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
            <div className="font-montserrat leading-[normal] text-black-900_8e text-left text-lg">
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
            <div className="font-montserrat leading-[normal] text-black-900_8e text-left text-lg">
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
            <div className="font-montserrat leading-[normal] text-black-900_8e text-left text-lg">
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
            <div className="font-montserrat leading-[normal] text-gray-600 text-left text-lg">
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
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
