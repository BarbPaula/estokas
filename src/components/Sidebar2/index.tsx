import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

type Sidebar2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Sidebar2: React.FC<Sidebar2Props> = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img className="h-[19px] w-5" src="images/img_lock.svg" alt="lock" />
      ),
      label: "Catalogo",
    },
    {
      icon: <Img className="h-3" src="images/img_user.svg" alt="user" />,
      label: "Pedidos",
      href: "/pedidos",
      active: window.location.pathname === "/pedidos",
    },
    {
      icon: (
        <Img
          className="h-[19px] w-[18px]"
          src="images/img_thumbsup.svg"
          alt="thumbsup"
        />
      ),
      label: "Produtos selecionados",
      href: "/produtos",
      active: window.location.pathname === "/produtos",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="h-[119px] md:h-[178px] md:ml-[0] ml-[91px] mr-[102px] mt-[66px] relative w-[37%]">
          <Img
            className="absolute h-28 inset-x-[0] mx-auto rounded-[50%] top-[0] w-28"
            src="images/img_ellipse1.png"
            alt="ellipseOne"
          />
          <div className="absolute bg-yellow-900 border-[3px] border-gray-100 border-solid bottom-[0] h-9 right-[4%] rounded-[50%] w-9"></div>
        </div>
        <Text
          className="md:ml-[0] mt-0.5 mx-[88px] text-blue_gray-900_a5 text-lg"
          size="txtMontserratRomanMedium18Bluegray900a5"
        >
          Nome usuário
        </Text>
        <Text
          className="md:ml-[0] ml-[104px] mr-[93px] mt-1 text-blue_gray-900_a5 text-xs underline uppercase"
          size="txtMontserratRomanLight12"
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
              fontFamily: "Montserrat",
              borderRadius: "10px",
              [`&:hover, &.ps-active`]: {
                color: "#ce8d0d",
                fontWeight: "400 !important",
                backgroundColor: "#ce8d0d26 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[66px] mt-[43px] pl-4 pr-[13px] pt-4 w-[91%]"
        >
          <div className="flex flex-col items-center justify-start pt-0.5 w-full">
            <MenuItem
              icon={
                <Img className="h-5 w-5" src="images/img_home.svg" alt="home" />
              }
              active={window.location.pathname === "/homeone"}
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
            >
              <Text className="my-1">Notificações</Text>
            </MenuItem>
          </div>
          <div className="flex flex-col gap-[26px] items-center justify-start mt-[30px] w-full">
            <Text
              className="text-xs text-yellow-900_63"
              size="txtMontserratRomanSemiBold12"
            >
              MARKETPLACE
            </Text>
            <div className="flex flex-col gap-0.5 items-center justify-start w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
          </div>
          <Text
            className="mt-9 text-xs text-yellow-900_63"
            size="txtMontserratRomanSemiBold12"
          >
            FUNCIONALIDADES
          </Text>
          <div className="flex flex-col gap-1.5 items-center justify-start mt-[38px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-5 w-5"
                  src="images/img_contrast_gray_600_20x20.svg"
                  alt="contrast"
                />
              }
            >
              <Text>Integrações</Text>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-5 w-5"
                  src="images/img_contrast.svg"
                  alt="contrast_One"
                />
              }
              active={window.location.pathname === "/suporte"}
            >
              <Text>Suporte</Text>
            </MenuItem>
          </div>
          <Line className="bg-black-900_1e h-px mt-[168px] w-full" />
          <div className="flex flex-col items-center justify-end mt-[21px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              }
            >
              <Text>Sair da conta</Text>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar2.defaultProps = {};

export default Sidebar2;
