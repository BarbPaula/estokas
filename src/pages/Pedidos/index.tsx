import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const loremIpsumExemploOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PedidosPage: React.FC = () => {
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
  const [grouptwentysixvalue, setGrouptwentysixvalue] =
    React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-4 items-start justify-between w-full">
          <Sidebar className="!sticky !w-[322px] bg-white-A700 border border-black-900_0a border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs top-[0]">
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
            <div className="bg-blue_gray-900 flex flex-col h-8 items-center justify-start mb-[964px] ml-[290px] p-2.5 rounded-[50%] w-8">
              <Img
                className="h-[9px] w-2.5"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="h-[210px] md:h-[455px] relative w-full">
              <Header className="absolute bottom-[14%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto w-full" />
              <div className="absolute bg-gradient  h-[210px] inset-y-[0] my-auto right-[0] w-[26%]"></div>
            </div>
            <div className="bg-white-A700 border border-black-900_1c border-solid flex flex-col items-center justify-end p-[19px] rounded-[10px] shadow-bs w-[97%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-5 w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start mb-0.5 w-[22%] md:w-full">
                    <Text
                      className="lowercase text-2xl md:text-[22px] sm:text-xl text-yellow-900 tracking-[-0.23px]"
                      size="txtMontserratRomanMedium24Yellow900"
                    >
                      TODOS OS PEDIDOS
                    </Text>
                    <SelectBox
                      className="font-light text-base text-gray-600 text-left tracking-[-0.23px] uppercase w-full"
                      placeholderClassName="text-gray-600"
                      indicator={
                        <Img
                          className="h-2 mr-[0] w-3.5"
                          src="images/img_arrowdown_black_900_01.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group449"
                      options={loremIpsumExemploOptionsList}
                      isSearchable={false}
                      placeholder="lorem ipsum exemplo"
                    />
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-[3px] w-[69%] md:w-full">
                    <Input
                      name="groupTwentySix"
                      placeholder="Pesquisar"
                      value={grouptwentysixvalue}
                      onChange={(e) => setGrouptwentysixvalue(e)}
                      className="!placeholder:text-gray-600 !text-gray-600 p-0 text-base text-left tracking-[0.50px] w-full"
                      wrapClassName="flex md:w-full"
                      prefix={
                        <div className="h-5 mb-px mr-3.5 w-5 bg-gray-600">
                          <Img
                            className="cursor-pointer h-5 my-auto"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        </div>
                      }
                      suffix={
                        <CloseSVG
                          fillColor="#6c6c6c"
                          className="cursor-pointer h-5 my-auto"
                          onClick={() => setGrouptwentysixvalue("")}
                          style={{
                            visibility:
                              grouptwentysixvalue?.length <= 0
                                ? "hidden"
                                : "visible",
                          }}
                          height={20}
                          width={20}
                          viewBox="0 0 20 20"
                        />
                      }
                      color="black_900_3d"
                      size="sm"
                    ></Input>
                    <div className="bg-blue_gray-900 border border-black-900_3d border-solid flex flex-col items-center justify-end p-5 rounded-[10px] shadow-bs">
                      <List
                        className="flex flex-col gap-1.5 items-center w-[70%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Img
                            className="h-0.5 mt-0.5 rounded-[50%] w-1/4"
                            src="images/img_vector8.svg"
                            alt="vectorEight"
                          />
                          <div className="h-1 outline outline-[1px] outline-gray-100 rotate-[-90deg] rounded-[50%] w-1"></div>
                          <Img
                            className="h-0.5 mt-0.5 rounded-[50%] w-1/2"
                            src="images/img_vector8.svg"
                            alt="vectorSeven"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Img
                            className="h-0.5 mt-0.5 rounded-[50%] w-1/2"
                            src="images/img_vector8.svg"
                            alt="vectorTwelve"
                          />
                          <div className="h-1 outline outline-[1px] outline-gray-100 rotate-[-90deg] rounded-[50%] w-1"></div>
                          <Img
                            className="h-0.5 mt-0.5 rounded-[50%] w-[3px]"
                            src="images/img_vector8.svg"
                            alt="vectorEleven"
                          />
                        </div>
                      </List>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="common-pointer border border-blue_gray-900 border-solid pl-[35px] pr-[30px] sm:px-5 py-[17px] rounded-[10px] text-base text-blue_gray-900 tracking-[0.50px]"
                        size="txtMontserratRomanRegular16Bluegray900"
                        onClick={() => navigate("/simuladordefretes")}
                      >
                        Simulador de frete
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[244px] sm:h-[248px] md:h-[925px] mt-1.5 relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col gap-[47px] items-start justify-end pt-[22px] sm:px-5 px-[22px] w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[57px] w-[91%] md:w-full">
                        <Text
                          className="capitalize mb-0.5 text-blue_gray-900 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanRegular18"
                        >
                          Pedido
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[47px] text-blue_gray-900 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanRegular18"
                        >
                          Comprador
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[149px] text-blue_gray-900 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanRegular18"
                        >
                          Status
                        </Text>
                        <Text
                          className="capitalize mb-0.5 md:ml-[0] ml-[165px] text-blue_gray-900 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanRegular18"
                        >
                          Total
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[197px] md:mt-0 mt-0.5 text-blue_gray-900 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanRegular18"
                        >
                          Ações
                        </Text>
                      </div>
                      <List
                        className="flex flex-col gap-3 md:ml-[0] ml-[57px] w-[94%]"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                          <Text
                            className="capitalize md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanLight18"
                          >
                            Lorem{" "}
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[53px] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanLight18"
                          >
                            Lorem{" "}
                          </Text>
                          <Button
                            className="capitalize cursor-pointer min-w-[114px] md:ml-[0] ml-[165px] text-center text-lg tracking-[-0.23px]"
                            shape="round"
                            color="yellow_900_2d"
                            size="sm"
                            variant="fill"
                          >
                            Lorem
                          </Button>
                          <Text
                            className="capitalize ml-32 md:ml-[0] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanLight18"
                          >
                            Lorem
                          </Text>
                          <Button
                            className="flex h-9 items-center justify-center md:ml-[0] ml-[180px] md:mt-0 mt-3 w-9"
                            shape="round"
                            color="yellow_900_d6"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-5"
                              src="images/img_thumbsup_gray_100.svg"
                              alt="thumbsup"
                            />
                          </Button>
                          <Button
                            className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] md:mt-0 mt-3 w-9"
                            shape="round"
                            color="yellow_900_d6"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[19px]"
                              src="images/img_edit.svg"
                              alt="edit"
                            />
                          </Button>
                        </div>
                        <Line className="self-center h-px bg-black-900_16 w-full" />
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                          <Text
                            className="capitalize md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanLight18"
                          >
                            Lorem{" "}
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[53px] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanLight18"
                          >
                            Lorem{" "}
                          </Text>
                          <Button
                            className="capitalize cursor-pointer min-w-[114px] md:ml-[0] ml-[165px] text-center text-lg tracking-[-0.23px]"
                            shape="round"
                            color="yellow_900_2d"
                            size="sm"
                            variant="fill"
                          >
                            Lorem
                          </Button>
                          <Text
                            className="capitalize ml-32 md:ml-[0] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanLight18"
                          >
                            Lorem
                          </Text>
                          <Button
                            className="flex h-9 items-center justify-center md:ml-[0] ml-[180px] md:mt-0 mt-3 w-9"
                            shape="round"
                            color="yellow_900_d6"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-5"
                              src="images/img_thumbsup_gray_100.svg"
                              alt="thumbsup"
                            />
                          </Button>
                          <Button
                            className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] md:mt-0 mt-3 w-9"
                            shape="round"
                            color="yellow_900_d6"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[19px]"
                              src="images/img_edit.svg"
                              alt="edit"
                            />
                          </Button>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 border border-black-900_0a border-solid flex flex-col gap-4 h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[7px] rounded-[10px] shadow-bs w-[21%]">
                    <Button
                      className="capitalize cursor-pointer min-w-[193px] mt-[3px] rounded-[10px] text-center text-lg tracking-[-0.23px]"
                      color="yellow_900_26"
                      size="sm"
                      variant="fill"
                    >
                      Todos
                    </Button>
                    <div className="flex flex-col items-start justify-start mb-[15px]">
                      <Text
                        className="capitalize text-black-900 text-lg tracking-[-0.23px]"
                        size="txtMontserratRomanRegular18Black900"
                      >
                        Pendentes
                      </Text>
                      <Text
                        className="capitalize ml-5 md:ml-[0] mt-[17px] text-black-900 text-lg tracking-[-0.23px]"
                        size="txtMontserratRomanRegular18Black900"
                      >
                        Pagos
                      </Text>
                      <Text
                        className="capitalize md:ml-[0] ml-[9px] mt-4 text-black-900 text-lg tracking-[-0.23px]"
                        size="txtMontserratRomanRegular18Black900"
                      >
                        Enviados
                      </Text>
                      <Text
                        className="capitalize ml-1 md:ml-[0] mt-[21px] text-black-900 text-lg tracking-[-0.23px]"
                        size="txtMontserratRomanRegular18Black900"
                      >
                        Entregues
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-3 ml-20 md:ml-[0] mt-2.5 w-[90%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                    <Text
                      className="capitalize md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem{" "}
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[53px] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem{" "}
                    </Text>
                    <Button
                      className="capitalize cursor-pointer min-w-[114px] md:ml-[0] ml-[165px] text-center text-lg tracking-[-0.23px]"
                      shape="round"
                      color="yellow_900_2d"
                      size="sm"
                      variant="fill"
                    >
                      Lorem
                    </Button>
                    <Text
                      className="capitalize ml-32 md:ml-[0] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem
                    </Text>
                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[180px] md:mt-0 mt-3 w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_thumbsup_gray_100.svg"
                        alt="thumbsup"
                      />
                    </Button>
                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] md:mt-0 mt-3 w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[19px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-black-900_16 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                    <Text
                      className="capitalize md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem{" "}
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[53px] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem{" "}
                    </Text>
                    <Button
                      className="capitalize cursor-pointer min-w-[114px] md:ml-[0] ml-[165px] text-center text-lg tracking-[-0.23px]"
                      shape="round"
                      color="yellow_900_2d"
                      size="sm"
                      variant="fill"
                    >
                      Lorem
                    </Button>
                    <Text
                      className="capitalize ml-32 md:ml-[0] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem
                    </Text>
                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[180px] md:mt-0 mt-3 w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_thumbsup_gray_100.svg"
                        alt="thumbsup"
                      />
                    </Button>
                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] md:mt-0 mt-3 w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[19px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-black-900_16 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                    <Text
                      className="capitalize md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem{" "}
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[53px] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem{" "}
                    </Text>
                    <Button
                      className="capitalize cursor-pointer min-w-[114px] md:ml-[0] ml-[165px] text-center text-lg tracking-[-0.23px]"
                      shape="round"
                      color="yellow_900_2d"
                      size="sm"
                      variant="fill"
                    >
                      Lorem
                    </Button>
                    <Text
                      className="capitalize ml-32 md:ml-[0] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem
                    </Text>
                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[180px] md:mt-0 mt-3 w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_thumbsup_gray_100.svg"
                        alt="thumbsup"
                      />
                    </Button>
                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] md:mt-0 mt-3 w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[19px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-black-900_16 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                    <Text
                      className="capitalize md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem{" "}
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[53px] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem{" "}
                    </Text>
                    <Button
                      className="capitalize cursor-pointer min-w-[114px] md:ml-[0] ml-[165px] text-center text-lg tracking-[-0.23px]"
                      shape="round"
                      color="yellow_900_2d"
                      size="sm"
                      variant="fill"
                    >
                      Lorem
                    </Button>
                    <Text
                      className="capitalize ml-32 md:ml-[0] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem
                    </Text>
                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[180px] md:mt-0 mt-3 w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_thumbsup_gray_100.svg"
                        alt="thumbsup"
                      />
                    </Button>
                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] md:mt-0 mt-3 w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[19px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-black-900_16 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                    <Text
                      className="capitalize md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[53px] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem
                    </Text>
                    <Button
                      className="capitalize cursor-pointer min-w-[114px] md:ml-[0] ml-[165px] text-center text-lg tracking-[-0.23px]"
                      shape="round"
                      color="yellow_900_2d"
                      size="sm"
                      variant="fill"
                    >
                      Lorem
                    </Button>
                    <Text
                      className="capitalize ml-32 md:ml-[0] md:mt-0 my-3 text-gray-600 text-lg tracking-[-0.23px]"
                      size="txtMontserratRomanLight18"
                    >
                      Lorem
                    </Text>
                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[180px] md:mt-0 mt-3 w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_thumbsup_gray_100.svg"
                        alt="thumbsup"
                      />
                    </Button>
                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] md:mt-0 mt-3 w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[19px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </Button>
                  </div>
                </List>
                <div className="bg-gray-100 flex flex-row items-center justify-end md:ml-[0] ml-[868px] mt-[27px] sm:pl-5 pl-[22px] rounded-[5px] w-[14%] md:w-full">
                  <Text
                    className="capitalize text-lg text-yellow-900 tracking-[-0.23px]"
                    size="txtMontserratRomanRegular18Yellow900"
                  >
                    1
                  </Text>
                  <Line className="bg-black-900_2b h-[31px] mb-[7px] ml-[18px] mt-2.5 w-px" />
                  <Text
                    className="capitalize ml-[19px] text-black-900_38 text-lg tracking-[-0.23px]"
                    size="txtMontserratRomanRegular18Black90038"
                  >
                    2
                  </Text>
                  <div className="bg-yellow-900_35 flex flex-col items-center justify-end ml-[18px] p-4 rounded-[5px] w-[38%]">
                    <Img
                      className="h-3.5 mt-0.5"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PedidosPage;
