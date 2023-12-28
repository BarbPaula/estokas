import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const todosOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EnviosPage: React.FC = () => {
  const navigate = useNavigate();

  const [group352value, setGroup352value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-montserrat gap-3.5 items-start mx-auto w-full">
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
                <Text className="text-yellow-900">Home</Text>
              </MenuItem>
              <MenuItem>
                <div className="flex flex-col items-start justify-start">
                  <Text className="md:ml-[0] ml-[69px] text-black-900_8e">
                    Notificações
                  </Text>
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
                <SubMenu
                  icon={
                    <Img
                      className="h-[34px] md:h-auto object-cover w-[34px]"
                      src="images/img_maskgroup.png"
                      alt="maskgroup"
                    />
                  }
                  label={<Text className="text-yellow-900">Envios</Text>}
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
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
                  <Text className="text-black-900_8e">Suporte</Text>
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
          <Line className="bg-black-900_1e h-px mr-4 mt-[120px] w-[96%]" />
          <div className="bg-blue_gray-900 flex flex-col h-8 items-center justify-start mb-[964px] ml-[290px] p-2.5 rounded-[50%] w-8">
            <Img
              className="h-[9px] w-2.5"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
        </Sidebar>
        <div className="flex-1 md:h-[3000px] sm:h-[648px] h-[957px] md:px-5 relative w-full">
          <Text
            className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 top-[0]"
            size="txtMontserratRomanRegular32"
          >
            <span className="text-blue_gray-900 font-montserrat text-left font-normal">
              Etiquetas e{" "}
            </span>
            <span className="text-blue_gray-900 font-montserrat text-left font-medium">
              Envios
            </span>
          </Text>
          <div className="absolute md:h-[3000px] sm:h-[648px] h-[935px] inset-[0] justify-center m-auto w-full">
            <div className="md:h-[3000px] sm:h-[648px] h-[935px] m-auto w-full">
              <div className="absolute bg-white-A700 border border-black-900_1c border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[19px] rounded-[10px] shadow-bs w-[97%]">
                <div className="flex flex-col items-start justify-start mt-[30px] w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                    <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[21%] md:w-full">
                      <Text
                        className="lowercase text-2xl md:text-[22px] sm:text-xl text-yellow-900 tracking-[-0.23px]"
                        size="txtMontserratRomanMedium24Yellow900"
                      >
                        TODOS OS PEDIDOS
                      </Text>
                      <SelectBox
                        className="font-light text-base text-gray-600 text-left tracking-[-0.23px] uppercase w-2/5 sm:w-full"
                        placeholderClassName="text-gray-600"
                        indicator={
                          <Img
                            className="h-2 mr-[0] w-3.5"
                            src="images/img_arrowdown_black_900_01.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group533"
                        options={todosOptionsList}
                        isSearchable={false}
                        placeholder="TODOS"
                      />
                    </div>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[68%] md:w-full">
                      <Input
                        name="group352"
                        placeholder="Pesquisar"
                        value={group352value}
                        onChange={(e) => setGroup352value(e)}
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
                            onClick={() => setGroup352value("")}
                            style={{
                              visibility:
                                group352value?.length <= 0
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
                      <Button
                        className="cursor-pointer min-w-[232px] rounded-[10px] text-base text-center tracking-[0.50px]"
                        color="blue_gray_900"
                        size="md"
                        variant="outline"
                      >
                        Imprimir{" "}
                      </Button>
                    </div>
                  </div>
                  <div className="sm:h-[205px] h-[216px] md:h-[905px] mt-4 relative w-full">
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col gap-[52px] justify-end pt-[23px] sm:px-5 px-[23px] w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[49px] mr-[27px] w-[92%] md:w-full">
                          <Text
                            className="capitalize md:mt-0 mt-0.5 text-blue_gray-900 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanRegular18"
                          >
                            Transportadora
                          </Text>
                          <Text
                            className="capitalize mb-0.5 md:ml-[0] ml-[94px] text-blue_gray-900 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanRegular18"
                          >
                            Destinatário
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[67px] text-blue_gray-900 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanRegular18"
                          >
                            Rastreio
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[52px] md:mt-0 mt-0.5 text-blue_gray-900 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanRegular18"
                          >
                            Expira em
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[209px] text-blue_gray-900 text-lg tracking-[-0.23px]"
                            size="txtMontserratRomanRegular18"
                          >
                            Ações
                          </Text>
                        </div>
                        <List
                          className="flex flex-col gap-[18px] md:ml-[0] ml-[88px] mr-[35px] w-[87%]"
                          orientation="vertical"
                        >
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <Text
                              className="capitalize md:mt-0 mt-[11px] text-gray-600 text-lg tracking-[-0.23px]"
                              size="txtMontserratRomanLight18"
                            >
                              Lorem{" "}
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[154px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                              size="txtMontserratRomanLight18"
                            >
                              Lorem{" "}
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[106px] md:mt-0 mt-2.5 text-gray-600 text-lg tracking-[-0.23px]"
                              size="txtMontserratRomanLight18"
                            >
                              Lorem{" "}
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[76px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                              size="txtMontserratRomanLight18"
                            >
                              Lorem
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[62px] md:mt-0 mt-[11px] text-blue_gray-900 text-lg tracking-[-0.23px] underline"
                              size="txtMontserratRomanRegular18"
                            >
                              Gerar{" "}
                            </Text>
                            <Button
                              className="flex h-9 items-center justify-center md:ml-[0] ml-[72px] w-9"
                              shape="round"
                              color="blue_gray_900"
                              size="xs"
                              variant="outline"
                            >
                              <Img
                                className="h-5"
                                src="images/img_thumbsup_blue_gray_900.svg"
                                alt="thumbsup"
                              />
                            </Button>
                            <Button
                              className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] w-9"
                              shape="round"
                              color="blue_gray_900"
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
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <Text
                              className="capitalize md:mt-0 mt-[11px] text-gray-600 text-lg tracking-[-0.23px]"
                              size="txtMontserratRomanLight18"
                            >
                              Lorem{" "}
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[154px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                              size="txtMontserratRomanLight18"
                            >
                              Lorem{" "}
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[106px] md:mt-0 mt-2.5 text-gray-600 text-lg tracking-[-0.23px]"
                              size="txtMontserratRomanLight18"
                            >
                              Lorem{" "}
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[76px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                              size="txtMontserratRomanLight18"
                            >
                              Lorem
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[62px] md:mt-0 mt-[13px] text-blue_gray-900 text-lg tracking-[-0.23px] underline"
                              size="txtMontserratRomanRegular18"
                            >
                              Gerar{" "}
                            </Text>
                            <Button
                              className="flex h-9 items-center justify-center md:ml-[0] ml-[72px] w-9"
                              shape="round"
                              color="blue_gray_900"
                              size="xs"
                              variant="outline"
                            >
                              <Img
                                className="h-5"
                                src="images/img_thumbsup_blue_gray_900.svg"
                                alt="thumbsup"
                              />
                            </Button>
                            <Button
                              className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] w-9"
                              shape="round"
                              color="blue_gray_900"
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
                    <Button
                      className="absolute bottom-[33%] flex h-9 items-center justify-center right-[1%] w-9"
                      shape="round"
                      color="yellow_900_d6"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                    </Button>
                    <div className="absolute bg-yellow-900_d6 bottom-[0] h-9 md:h-[18px] p-2 right-[1%] rounded-[5px] w-9">
                      <Img
                        className="absolute h-[18px] inset-[0] justify-center m-auto object-cover w-[18px]"
                        src="images/img_group39854.png"
                        alt="maskgroup_One"
                      />
                      <Img
                        className="absolute h-[18px] inset-x-[0] mx-auto top-[22%] w-[18px]"
                        src="images/img_reply.svg"
                        alt="reply_One"
                      />
                    </div>
                    <div className="absolute border border-black-900_38 border-solid bottom-[37%] h-[18px] left-[2%] rounded-[3px] w-[18px]"></div>
                    <div className="absolute border border-black-900_38 border-solid bottom-[4%] h-[18px] left-[2%] rounded-[3px] w-[18px]"></div>
                    <div className="absolute bg-white-A700 border border-black-900_0a border-solid flex flex-col gap-4 items-center justify-center left-[0] p-2 rounded-[10px] shadow-bs top-[0] w-[21%]">
                      <Button
                        className="capitalize cursor-pointer min-w-[193px] mt-3.5 rounded-[10px] text-center text-lg tracking-[-0.23px]"
                        color="yellow_900_26"
                        size="sm"
                        variant="fill"
                      >
                        envios liberados
                      </Button>
                      <div className="flex flex-col gap-5 items-start justify-start mb-5">
                        <Text
                          className="capitalize ml-0.5 md:ml-[0] text-black-900 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanRegular18Black900"
                        >
                          Envios Postados
                        </Text>
                        <Text
                          className="capitalize text-black-900 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanRegular18Black900"
                        >
                          Aguardando pag.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-[18px] items-center ml-5 md:ml-[0] mt-9 w-[98%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <div className="border border-black-900_38 border-solid h-[18px] rounded-[3px] w-[18px]"></div>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[75px] w-[86%] md:w-full">
                        <Text
                          className="capitalize md:mt-0 mt-[11px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[154px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[106px] md:mt-0 mt-2.5 text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[76px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[62px] md:mt-0 mt-[13px] text-blue_gray-900 text-lg tracking-[-0.23px] underline"
                          size="txtMontserratRomanRegular18"
                        >
                          Gerar{" "}
                        </Text>
                        <Button
                          className="flex h-9 items-center justify-center md:ml-[0] ml-[72px] w-9"
                          shape="round"
                          color="blue_gray_900"
                          size="xs"
                          variant="outline"
                        >
                          <Img
                            className="h-5"
                            src="images/img_thumbsup_blue_gray_900.svg"
                            alt="thumbsup"
                          />
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] w-9"
                          shape="round"
                          color="blue_gray_900"
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
                      <div className="bg-yellow-900_d6 h-9 md:h-[18px] md:ml-[0] ml-[17px] p-2 relative rounded-[5px] w-9">
                        <Img
                          className="absolute h-[18px] inset-[0] justify-center m-auto object-cover w-[18px]"
                          src="images/img_group39854.png"
                          alt="maskgroup"
                        />
                        <Img
                          className="absolute h-[18px] inset-x-[0] mx-auto top-[22%] w-[18px]"
                          src="images/img_reply.svg"
                          alt="reply"
                        />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-black-900_16 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <div className="border border-black-900_38 border-solid h-[18px] rounded-[3px] w-[18px]"></div>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[75px] w-[86%] md:w-full">
                        <Text
                          className="capitalize md:mt-0 mt-[11px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[154px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[106px] md:mt-0 mt-2.5 text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[76px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[62px] md:mt-0 mt-[13px] text-blue_gray-900 text-lg tracking-[-0.23px] underline"
                          size="txtMontserratRomanRegular18"
                        >
                          Gerar{" "}
                        </Text>
                        <Button
                          className="flex h-9 items-center justify-center md:ml-[0] ml-[72px] w-9"
                          shape="round"
                          color="blue_gray_900"
                          size="xs"
                          variant="outline"
                        >
                          <Img
                            className="h-5"
                            src="images/img_thumbsup_blue_gray_900.svg"
                            alt="thumbsup"
                          />
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] w-9"
                          shape="round"
                          color="blue_gray_900"
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
                      <div className="bg-yellow-900_d6 h-9 md:h-[18px] md:ml-[0] ml-[17px] p-2 relative rounded-[5px] w-9">
                        <Img
                          className="absolute h-[18px] inset-[0] justify-center m-auto object-cover w-[18px]"
                          src="images/img_group39854.png"
                          alt="maskgroup"
                        />
                        <Img
                          className="absolute h-[18px] inset-x-[0] mx-auto top-[22%] w-[18px]"
                          src="images/img_reply.svg"
                          alt="reply"
                        />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-black-900_16 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <div className="border border-black-900_38 border-solid h-[18px] rounded-[3px] w-[18px]"></div>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[75px] w-[86%] md:w-full">
                        <Text
                          className="capitalize md:mt-0 mt-[11px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[154px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[106px] md:mt-0 mt-2.5 text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[76px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[62px] md:mt-0 mt-[13px] text-blue_gray-900 text-lg tracking-[-0.23px] underline"
                          size="txtMontserratRomanRegular18"
                        >
                          Gerar{" "}
                        </Text>
                        <Button
                          className="flex h-9 items-center justify-center md:ml-[0] ml-[72px] w-9"
                          shape="round"
                          color="blue_gray_900"
                          size="xs"
                          variant="outline"
                        >
                          <Img
                            className="h-5"
                            src="images/img_thumbsup_blue_gray_900.svg"
                            alt="thumbsup"
                          />
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] w-9"
                          shape="round"
                          color="blue_gray_900"
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
                      <div className="bg-yellow-900_d6 h-9 md:h-[18px] md:ml-[0] ml-[17px] p-2 relative rounded-[5px] w-9">
                        <Img
                          className="absolute h-[18px] inset-[0] justify-center m-auto object-cover w-[18px]"
                          src="images/img_group39854.png"
                          alt="maskgroup"
                        />
                        <Img
                          className="absolute h-[18px] inset-x-[0] mx-auto top-[22%] w-[18px]"
                          src="images/img_reply.svg"
                          alt="reply"
                        />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-black-900_16 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <div className="border border-black-900_38 border-solid h-[18px] rounded-[3px] w-[18px]"></div>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[75px] w-[86%] md:w-full">
                        <Text
                          className="capitalize md:mt-0 mt-[11px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[154px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[106px] md:mt-0 mt-2.5 text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem{" "}
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[76px] md:mt-0 mt-[9px] text-gray-600 text-lg tracking-[-0.23px]"
                          size="txtMontserratRomanLight18"
                        >
                          Lorem
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[62px] md:mt-0 mt-[13px] text-blue_gray-900 text-lg tracking-[-0.23px] underline"
                          size="txtMontserratRomanRegular18"
                        >
                          Gerar{" "}
                        </Text>
                        <Button
                          className="flex h-9 items-center justify-center md:ml-[0] ml-[72px] w-9"
                          shape="round"
                          color="blue_gray_900"
                          size="xs"
                          variant="outline"
                        >
                          <Img
                            className="h-5"
                            src="images/img_thumbsup_blue_gray_900.svg"
                            alt="thumbsup"
                          />
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center md:ml-[0] ml-[17px] w-9"
                          shape="round"
                          color="blue_gray_900"
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
                      <div className="bg-yellow-900_d6 h-9 md:h-[18px] md:ml-[0] ml-[17px] p-2 relative rounded-[5px] w-9">
                        <Img
                          className="absolute h-[18px] inset-[0] justify-center m-auto object-cover w-[18px]"
                          src="images/img_group39854.png"
                          alt="maskgroup"
                        />
                        <Img
                          className="absolute h-[18px] inset-x-[0] mx-auto top-[22%] w-[18px]"
                          src="images/img_reply.svg"
                          alt="reply"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="bg-gray-100 flex flex-row items-center justify-end md:ml-[0] ml-[867px] mt-[37px] sm:pl-5 pl-[22px] rounded-[5px] w-[14%] md:w-full">
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
              <div className="absolute bg-gradient  h-[210px] right-[0] top-[0] w-[26%]"></div>
            </div>
            <List
              className="absolute sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] justify-center mx-auto top-[4%] w-[97%]"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-solid border-yellow-900_6d flex flex-col items-end justify-end pl-[3px] py-[3px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start mt-[15px] w-[97%] md:w-full">
                  <Text
                    className="text-center text-gray-600_02 text-lg"
                    size="txtMontserratRomanMedium18Gray60002"
                  >
                    TODAS AS ORDENS
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-between w-full">
                    <Text
                      className="mt-[13px] sm:text-[28.490000000000002px] md:text-[30.490000000000002px] text-[32.49px] text-center text-yellow-900_63"
                      size="txtMontserratRomanLight3249"
                    >
                      21234
                    </Text>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start pb-5"
                      style={{
                        backgroundImage: "url('images/img_group239.svg')",
                      }}
                    >
                      <Img
                        className="h-[60px]"
                        src="images/img_vector61_gray_600_01.svg"
                        alt="vectorSixtyOne"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-solid border-yellow-900_6d flex flex-col items-end justify-end pl-[3px] py-[3px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start mt-4 w-[97%] md:w-full">
                  <Text
                    className="text-center text-gray-600_02 text-lg"
                    size="txtMontserratRomanMedium18Gray60002"
                  >
                    ORDENS{" "}
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-between w-full">
                    <Text
                      className="mt-[13px] sm:text-[28.490000000000002px] md:text-[30.490000000000002px] text-[32.49px] text-center text-yellow-900_63"
                      size="txtMontserratRomanLight3249"
                    >
                      21234
                    </Text>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start pb-5"
                      style={{
                        backgroundImage: "url('images/img_group239.svg')",
                      }}
                    >
                      <Img
                        className="h-[60px]"
                        src="images/img_vector61_gray_600_01.svg"
                        alt="vectorSixtyOne"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-solid border-yellow-900_6d flex flex-col items-end justify-end pl-[3px] py-[3px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start mt-[11px] w-[97%] md:w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] text-center text-gray-600_02 text-lg"
                    size="txtMontserratRomanMedium18Gray60002"
                  >
                    lOREM iPSUM
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-between w-full">
                    <Text
                      className="mt-[13px] sm:text-[28.490000000000002px] md:text-[30.490000000000002px] text-[32.49px] text-center text-yellow-900_63"
                      size="txtMontserratRomanLight3249"
                    >
                      21234
                    </Text>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start pb-5"
                      style={{
                        backgroundImage: "url('images/img_group239.svg')",
                      }}
                    >
                      <Img
                        className="h-[60px]"
                        src="images/img_vector61_gray_600_01.svg"
                        alt="vectorSixtyOne"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnviosPage;
