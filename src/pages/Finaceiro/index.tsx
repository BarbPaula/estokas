import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const FinaceiroPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-montserrat gap-3.5 items-start mx-auto overflow-auto w-full">
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
            className="flex flex-col items-center justify-start mt-[77px] w-full"
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
            <div className="flex flex-col gap-7 items-center justify-start mt-[29px] w-full">
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
              <SubMenu
                icon={
                  <Img
                    className="h-[17px] w-[18px]"
                    src="images/img_thumbsup_yellow_900.svg"
                    alt="thumbsup"
                  />
                }
                label={<Text className="text-yellow-900">Financeiro</Text>}
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
            </div>
            <div className="flex flex-col gap-[27px] items-center justify-start mt-[38px] w-full">
              <Text
                className="text-xs text-yellow-900_63"
                size="txtMontserratRomanSemiBold12"
              >
                FUNCIONALIDADES
              </Text>
              <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                <MenuItem>
                  <div className="flex flex-row items-center justify-start sm:px-5">
                    <Button
                      className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[141px]"
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
                  </div>
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
            </div>
          </Menu>
          <Line className="bg-black-900_1e h-px mr-4 mt-[120px] w-[96%]" />
          <div className="bg-blue_gray-900 flex flex-col h-8 items-center justify-start mb-[964px] ml-[290px] p-2.5 rounded-[50%] w-8">
            <Img
              className="h-[9px] w-2.5"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
        </Sidebar>
        <div className="flex-1 md:h-[1474px] sm:h-[675px] h-[946px] md:px-5 relative w-full">
          <div className="absolute md:h-[1474px] sm:h-[675px] h-[946px] inset-y-[0] left-[0] my-auto w-[90%] md:w-full">
            <div className="absolute bg-white-A700 border border-black-900_1c border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-[10px] shadow-bs w-[97%]">
              <div className="flex flex-col items-center justify-start mb-[57px] mt-[23px] w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-[95%] md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <Text
                      className="lowercase md:text-3xl sm:text-[28px] text-[32px] text-yellow-900 tracking-[-0.23px]"
                      size="txtMontserratRomanMedium32"
                    >
                      <span className="text-yellow-900 font-montserrat uppercase text-left font-normal">
                        V
                      </span>
                      <span className="text-yellow-900 font-montserrat text-left font-normal">
                        endas totais
                      </span>
                    </Text>
                    <Text
                      className="text-base text-gray-600 tracking-[-0.23px] uppercase"
                      size="txtMontserratRomanLight16Gray600"
                    >
                      lorem ipsum{" "}
                    </Text>
                  </div>
                  <div className="border border-black-900 border-solid flex flex-col items-center justify-end mt-[3px] p-5 rounded-[10px] w-[7%]">
                    <List
                      className="flex flex-col gap-1.5 items-center w-[70%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Img
                          className="h-0.5 mt-0.5 rounded-[50%] w-1/4"
                          src="images/img_vector8_blue_gray_900.svg"
                          alt="vectorEight"
                        />
                        <div className="h-1 outline outline-[1px] outline-blue_gray-900 rotate-[-90deg] rounded-[50%] w-1"></div>
                        <Img
                          className="h-0.5 mt-0.5 rounded-[50%] w-1/2"
                          src="images/img_vector8_blue_gray_900.svg"
                          alt="vectorSeven"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Img
                          className="h-0.5 mt-0.5 rounded-[50%] w-1/2"
                          src="images/img_vector8_blue_gray_900.svg"
                          alt="vectorTwelve"
                        />
                        <div className="h-1 outline outline-[1px] outline-blue_gray-900 rotate-[-90deg] rounded-[50%] w-1"></div>
                        <Img
                          className="h-0.5 mt-0.5 rounded-[50%] w-[3px]"
                          src="images/img_vector8_blue_gray_900.svg"
                          alt="vectorEleven"
                        />
                      </div>
                    </List>
                  </div>
                </div>
                <Line className="bg-black-900_16 h-px mt-5 w-full" />
                <div className="flex flex-row gap-[19px] items-center justify-center mt-[30px] w-[24%] md:w-full">
                  <div className="flex flex-row gap-[10.12px] h-[21px] md:h-auto items-center justify-start w-[114px]">
                    <div className="bg-blue_gray-900 h-[21px] rounded-[10px] w-[44%]"></div>
                    <Text
                      className="text-gray-800_01 text-xs w-auto"
                      size="txtMontserratRomanRegular12"
                    >
                      Dataset 1
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10.12px] h-[21px] md:h-auto items-center justify-start w-[117px]">
                    <div className="bg-yellow-900 h-[21px] rounded-[10px] w-[43%]"></div>
                    <Text
                      className="text-gray-800_01 text-xs w-auto"
                      size="txtMontserratRomanRegular12"
                    >
                      Dataset 2
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between mt-[35px] w-[96%] md:w-full">
                  <div className="flex flex-col gap-7 items-start justify-start w-[3%] md:w-full">
                    <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] w-auto">
                      <Text
                        className="text-[9.55px] text-center text-gray-800_01 w-auto"
                        size="txtMontserratRomanRegular955"
                      >
                        800
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] w-auto">
                      <Text
                        className="text-[9.55px] text-center text-gray-800_01 w-auto"
                        size="txtMontserratRomanRegular955"
                      >
                        600
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] w-auto">
                      <Text
                        className="text-[9.55px] text-center text-gray-800_01 w-auto"
                        size="txtMontserratRomanRegular955"
                      >
                        400
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] w-auto">
                      <Text
                        className="text-[9.55px] text-center text-gray-800_01 w-auto"
                        size="txtMontserratRomanRegular955"
                      >
                        200
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-auto">
                      <Text
                        className="text-[9.55px] text-center text-gray-800_01 w-auto"
                        size="txtMontserratRomanRegular955"
                      >
                        0
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-0.5 md:ml-[0] w-auto">
                      <Text
                        className="text-[9.55px] text-center text-gray-800_01 w-auto"
                        size="txtMontserratRomanRegular955"
                      >
                        -200
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-[9.55px] text-center text-gray-800_01 w-auto"
                        size="txtMontserratRomanRegular955"
                      >
                        -400
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-[9.55px] text-center text-gray-800_01 w-auto"
                        size="txtMontserratRomanRegular955"
                      >
                        -600
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-[9.55px] text-center text-gray-800_01 w-auto"
                        size="txtMontserratRomanRegular955"
                      >
                        -800
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-[9.55px] text-center text-gray-800_01 w-auto"
                        size="txtMontserratRomanRegular955"
                      >
                        -1 000
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-roboto gap-1.5 items-center justify-start md:mt-0 mt-1 w-[95%] md:w-full">
                    <div className="h-[389px] md:h-[798px] relative w-full">
                      <div className="absolute h-[389px] md:h-[798px] inset-[0] justify-center m-auto w-full">
                        <div className="h-[389px] md:h-[798px] m-auto w-full">
                          <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="h-[389px] relative w-full">
                              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                                <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                                  <Line className="bg-gray-400 h-px w-full" />
                                  <Line className="bg-gray-400 h-px w-full" />
                                  <Line className="bg-gray-400 h-px w-full" />
                                  <Line className="bg-gray-400 h-px w-full" />
                                  <Line className="bg-gray-400 h-px w-full" />
                                  <Line className="bg-gray-400 h-px w-full" />
                                  <Line className="bg-gray-400 h-px w-full" />
                                  <Line className="bg-gray-400 h-px w-full" />
                                  <Line className="bg-gray-400 h-px w-full" />
                                  <Line className="bg-gray-400 h-px w-full" />
                                </div>
                              </div>
                              <Line className="absolute bg-gray-400 h-[389px] inset-y-[0] left-[3%] my-auto w-px" />
                              <Line className="absolute bg-gray-400 h-[389px] inset-y-[0] left-[19%] my-auto w-px" />
                              <Line className="absolute bg-gray-400 h-[389px] inset-y-[0] left-[35%] my-auto w-px" />
                              <Line className="absolute bg-gray-400 h-[389px] inset-[0] justify-center m-auto w-px" />
                              <Line className="absolute bg-gray-400 h-[389px] inset-y-[0] my-auto right-[32%] w-px" />
                              <Line className="absolute bg-gray-400 h-[389px] inset-y-[0] my-auto right-[16%] w-px" />
                            </div>
                            <Line className="bg-gray-400 h-[389px] md:h-px md:w-full w-px" />
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-[270px] inset-x-[0] items-center justify-start mx-auto p-[17px] top-[4%] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group384.png')",
                            }}
                          >
                            <div className="border-2 border-solid border-yellow-900 h-3.5 mb-[220px] rounded-[50%] w-3.5"></div>
                          </div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[15%] flex flex-col gap-[29px] h-[245px] inset-x-[0] justify-start mx-auto p-[11px] w-[98%]"
                          style={{
                            backgroundImage: "url('images/img_group385.png')",
                          }}
                        >
                          <div className="flex flex-col md:gap-10 gap-[108px] items-center justify-start md:ml-[0] ml-[752px] w-[2%] md:w-full">
                            <div className="border-2 border-solid border-yellow-900 h-3.5 rounded-[50%] w-3.5"></div>
                            <div className="border-2 border-solid border-yellow-900 h-3.5 rounded-[50%] w-3.5"></div>
                          </div>
                          <div className="flex flex-col justify-start mb-6 md:ml-[0] ml-[134px] mr-[289px] w-[53%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="border-2 border-solid border-yellow-900 h-3.5 mb-0.5 rounded-[50%] w-3.5"></div>
                              <div className="border-2 border-solid border-yellow-900 h-3.5 mt-0.5 rounded-[50%] w-3.5"></div>
                            </div>
                            <div className="border-2 border-solid border-yellow-900 h-3.5 md:ml-[0] ml-[154px] rounded-[50%] w-3.5"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col md:gap-10 gap-[137px] items-start justify-start left-[2%] top-[19%] w-[18%]">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="border-2 border-solid border-yellow-900 h-3.5 mt-2.5 rounded-[50%] w-3.5"></div>
                          <div className="border-2 border-solid border-yellow-900 h-3.5 mb-2.5 rounded-[50%] w-3.5"></div>
                        </div>
                        <div className="border-2 border-solid border-yellow-900 h-3.5 rounded-[50%] w-3.5"></div>
                      </div>
                      <div className="absolute border-2 border-solid border-yellow-900 bottom-[14%] h-3.5 inset-x-[0] mx-auto rounded-[50%] w-3.5"></div>
                      <div className="absolute border-2 border-blue_gray-100_01 border-solid h-3.5 right-[32%] rounded-[50%] top-[2%] w-3.5"></div>
                      <div className="absolute border-2 border-amber-200_b2 border-solid h-3.5 right-[0] rounded-[50%] top-[3%] w-3.5"></div>
                      <div className="absolute border-2 border-solid border-yellow-900 h-3.5 right-[0] rounded-[50%] top-[35%] w-3.5"></div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-800_01 text-xs w-auto"
                          size="txtRobotoRomanRegular12"
                        >
                          January
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-800_01 text-xs w-auto"
                          size="txtRobotoRomanRegular12"
                        >
                          February
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-800_01 text-xs w-auto"
                          size="txtRobotoRomanRegular12"
                        >
                          March
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-800_01 text-xs w-auto"
                          size="txtRobotoRomanRegular12"
                        >
                          April
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-800_01 text-xs w-auto"
                          size="txtRobotoRomanRegular12"
                        >
                          May
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-800_01 text-xs w-auto"
                          size="txtRobotoRomanRegular12"
                        >
                          June
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-800_01 text-xs w-auto"
                          size="txtRobotoRomanRegular12"
                        >
                          July
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-[26px] items-start justify-start left-[0] top-[0] w-[74%]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtMontserratRomanRegular32"
              >
                <span className="text-blue_gray-900 font-montserrat text-left font-normal">
                  Resumo de{" "}
                </span>
                <span className="text-blue_gray-900 font-montserrat text-left font-semibold">
                  vendas
                </span>
              </Text>
              <List
                className="sm:flex-col flex-row gap-[25px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end rounded-[10px] shadow-bs w-full">
                  <div className="flex flex-col gap-4 justify-start mt-3.5 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start ml-3.5 md:ml-[0] w-[45%] md:w-full">
                      <Text
                        className="text-center text-gray-600_02 text-lg"
                        size="txtMontserratRomanMedium18Gray60002"
                      >
                        VENDAS TOTAIS
                      </Text>
                      <Img
                        className="h-3.5"
                        src="images/img_arrowleft_gray_600_02.svg"
                        alt="arrowleft"
                      />
                    </div>
                    <div className="md:h-[108px] h-[126px] relative w-full">
                      <Text
                        className="absolute left-[3%] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl top-[0]"
                        size="txtMontserratRomanMedium24"
                      >
                        R$ 00,00
                      </Text>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[110px] inset-x-[0] items-center justify-start mx-auto w-full"
                        style={{
                          backgroundImage: "url('images/img_group239.svg')",
                        }}
                      >
                        <Img
                          className="h-[82px] mb-[26px]"
                          src="images/img_vector61.svg"
                          alt="vectorSixtyOne"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end rounded-[10px] shadow-bs w-full">
                  <div className="flex flex-col gap-4 justify-start mt-3.5 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start ml-3.5 md:ml-[0] w-[45%] md:w-full">
                      <Text
                        className="text-center text-gray-600_02 text-lg"
                        size="txtMontserratRomanMedium18Gray60002"
                      >
                        VENDAS TOTAIS
                      </Text>
                      <Img
                        className="h-3.5"
                        src="images/img_arrowleft_gray_600_02.svg"
                        alt="arrowleft"
                      />
                    </div>
                    <div className="md:h-[108px] h-[126px] relative w-full">
                      <Text
                        className="absolute left-[3%] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl top-[0]"
                        size="txtMontserratRomanMedium24"
                      >
                        R$ 00,00
                      </Text>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[110px] inset-x-[0] items-center justify-start mx-auto w-full"
                        style={{
                          backgroundImage: "url('images/img_group239.svg')",
                        }}
                      >
                        <Img
                          className="h-[82px] mb-[26px]"
                          src="images/img_vector61.svg"
                          alt="vectorSixtyOne"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="absolute bg-gradient  h-[270px] right-[0] top-[0] w-[15%]"></div>
          </div>
          <div className="absolute bg-white-A700 flex flex-col items-center justify-end right-[0] rounded-[10px] shadow-bs top-[7%] w-[32%]">
            <div className="flex flex-col gap-4 justify-start mt-3.5 w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start ml-3.5 md:ml-[0] w-[45%] md:w-full">
                <Text
                  className="text-center text-gray-600_02 text-lg"
                  size="txtMontserratRomanMedium18Gray60002"
                >
                  VENDAS TOTAIS
                </Text>
                <Img
                  className="h-3.5"
                  src="images/img_arrowleft_gray_600_02.svg"
                  alt="arrowleft"
                />
              </div>
              <div className="md:h-[108px] h-[126px] relative w-full">
                <Text
                  className="absolute left-[3%] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl top-[0]"
                  size="txtMontserratRomanMedium24"
                >
                  R$ 00,00
                </Text>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[110px] inset-x-[0] items-center justify-start mx-auto w-full"
                  style={{ backgroundImage: "url('images/img_group239.svg')" }}
                >
                  <Img
                    className="h-[82px] mb-[26px]"
                    src="images/img_vector61.svg"
                    alt="vectorSixtyOne"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinaceiroPage;
