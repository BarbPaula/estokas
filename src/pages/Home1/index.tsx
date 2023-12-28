import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

type Table3RowType = {
  nome: string;
  rowquantidade: string;
  cliente: string;
  dados: string;
  aes: string;
};

const maisVendidosOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Home1Page: React.FC = () => {
  const table3Data = React.useRef<Table3RowType[]>([
    {
      nome: "Lorem exemplo lorem",
      rowquantidade: "Lorem",
      cliente: "Lorem",
      dados: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem exemplo lorem",
      rowquantidade: "Lorem",
      cliente: "Lorem",
      dados: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem exemplo lorem",
      rowquantidade: "Lorem",
      cliente: "Lorem",
      dados: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem exemplo lorem",
      rowquantidade: "Lorem",
      cliente: "Lorem",
      dados: "Lorem",
      aes: "images/img_edit.svg",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper<Table3RowType>();
    return [
      table3ColumnHelper.accessor("nome", {
        cell: (info) => (
          <Text
            className="capitalize pb-[27px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[238px] pb-[5px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Nome
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("rowquantidade", {
        cell: (info) => (
          <div className="flex flex-row gap-[98px] items-start justify-center p-3">
            <Text
              className="capitalize ml-3 mt-[37px] text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem
            </Text>
            <Button
              className="capitalize cursor-pointer min-w-[114px] mr-[43px] mt-[35px] text-center text-lg tracking-[-0.23px]"
              shape="round"
              color="yellow_900_2d"
              size="sm"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[106px] items-start justify-center min-w-[347px] pb-[5px] pr-[5px]">
            <Text
              className="capitalize text-blue_gray-900 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanRegular18"
            >
              Quantidade
            </Text>
            <Text
              className="capitalize text-blue_gray-900 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanRegular18"
            >
              Valor
            </Text>
          </div>
        ),
      }),
      table3ColumnHelper.accessor("cliente", {
        cell: (info) => (
          <Text
            className="capitalize pb-[30px] pl-[3px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[147px] pb-[5px] pt-0.5 text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Cliente
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("dados", {
        cell: (info) => (
          <Text
            className="capitalize pb-[27px] pl-[3px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[158px] pb-0.5 pt-[5px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            dados
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("aes", {
        cell: (info) => (
          <div className="flex flex-row gap-[17px] items-start justify-between py-3">
            <Button
              className="flex h-9 items-center justify-center mt-[47px] w-9"
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
              className="flex h-9 items-center justify-center mt-[47px] w-9"
              shape="round"
              color="yellow_900_d6"
              size="xs"
              variant="fill"
            >
              <Img className="h-[19px]" alt="edit" src={info?.getValue()} />
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[89px] pl-[11px] pt-[7px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Ações
          </Text>
        ),
      }),
    ];
  }, []);

  const [group129value, setGroup129value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between overflow-auto w-full">
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
              <div className="bg-blue_gray-900 flex flex-col h-8 items-center justify-start mb-[964px] ml-[290px] p-2.5 rounded-[50%] w-8">
                <Img
                  className="h-[9px] w-2.5"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[9px] items-start justify-start md:mt-0 mt-[60px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[22px] items-start justify-start mb-[27px] w-[67%] md:w-full">
                <Text
                  className="leading-[35.00px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-[59%] sm:w-full"
                  size="txtMontserratRomanMedium24"
                >
                  <span className="text-blue_gray-900 font-montserrat text-left font-normal">
                    Seja Bem vindo á plataforma{" "}
                  </span>
                  <span className="text-yellow-900 font-montserrat text-left font-semibold">
                    Estokaz!
                  </span>
                  <span className="text-blue_gray-900 font-montserrat text-left font-medium">
                    {" "}
                    Nome exemplo.
                  </span>
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[22px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end rounded-[10px] shadow-bs w-full">
                    <div className="flex flex-col items-center justify-start mt-[13px] w-full">
                      <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-center text-gray-600_02 text-lg"
                            size="txtMontserratRomanMedium18Gray60002"
                          >
                            VENDAS TOTAIS
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-center sm:text-xl text-yellow-900_63"
                            size="txtMontserratRomanLight24"
                          >
                            21234
                          </Text>
                        </div>
                        <div className="flex flex-row items-end justify-start w-[49%] md:w-full">
                          <Img
                            className="h-[3px] mb-0.5 mt-3.5 rounded-[1px] w-[3px]"
                            src="images/img_vector307.svg"
                            alt="vector307"
                          />
                          <Img
                            className="h-[9px] mb-0.5 mt-2 rounded-[1px]"
                            src="images/img_vector309.svg"
                            alt="vector309"
                          />
                          <Img
                            className="h-[5px] ml-0.5 my-[7px] rounded-[1px]"
                            src="images/img_vector307.svg"
                            alt="vector308"
                          />
                          <Img
                            className="h-[3px] my-2 rounded-[1px] w-[3px]"
                            src="images/img_vector309.svg"
                            alt="vector310"
                          />
                          <Line className="bg-blue_gray-900 h-[15px] mb-1 rounded-[1px] w-[3px]" />
                          <Text
                            className="ml-[7px] text-base text-center text-gray-800"
                            size="txtMontserratRomanLight16"
                          >
                            0%
                          </Text>
                          <Text
                            className="ml-[9px] text-base text-center text-gray-800"
                            size="txtMontserratRomanLight16"
                          >
                            Desde ontem
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[110px] items-center justify-start mt-0.5 w-full"
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
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end rounded-[10px] shadow-bs w-full">
                    <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                      <div className="flex flex-row gap-[25px] items-start justify-between w-[93%] md:w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
                          <Text
                            className="text-center text-gray-600_02 text-lg"
                            size="txtMontserratRomanMedium18Gray60002"
                          >
                            PENDENTES DE PAGAMENTO
                          </Text>
                          <div className="flex flex-row items-end justify-start w-[64%] md:w-full">
                            <Img
                              className="h-[3px] mb-0.5 mt-3.5 rounded-[1px] w-[3px]"
                              src="images/img_vector307.svg"
                              alt="vector307"
                            />
                            <Img
                              className="h-[9px] mb-0.5 mt-2 rounded-[1px]"
                              src="images/img_vector309.svg"
                              alt="vector309"
                            />
                            <Img
                              className="h-[5px] ml-0.5 my-[7px] rounded-[1px]"
                              src="images/img_vector307.svg"
                              alt="vector308"
                            />
                            <Img
                              className="h-[3px] my-2 rounded-[1px] w-[3px]"
                              src="images/img_vector309.svg"
                              alt="vector310"
                            />
                            <Line className="bg-blue_gray-900 h-[15px] mb-1 rounded-[1px] w-[3px]" />
                            <Text
                              className="ml-[7px] text-base text-center text-gray-800"
                              size="txtMontserratRomanLight16"
                            >
                              0%
                            </Text>
                            <Text
                              className="ml-[9px] text-base text-center text-gray-800"
                              size="txtMontserratRomanLight16"
                            >
                              Desde ontem
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-2xl md:text-[22px] text-center sm:text-xl text-yellow-900_63"
                          size="txtMontserratRomanLight24"
                        >
                          21234
                        </Text>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[110px] items-center justify-start mt-0.5 w-full"
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
                </List>
              </div>
              <div className="h-[270px] md:mt-0 mt-[29px] relative w-[33%] md:w-full">
                <Img
                  className="absolute h-[270px] inset-[0] justify-center m-auto object-cover w-[42%]"
                  src="images/img_rectangle2065_270x161.png"
                  alt="rectangle2065"
                />
                <div className="absolute bg-white-A700 bottom-[10%] flex flex-col gap-[5px] inset-x-[0] justify-end mx-auto rounded-[10px] shadow-bs w-full">
                  <Text
                    className="md:ml-[0] ml-[13px] mr-[163px] mt-4 text-center text-gray-600_02 text-lg"
                    size="txtMontserratRomanMedium18Gray60002"
                  >
                    TOTAL DE CATEGORIAS
                  </Text>
                  <div className="md:h-[108px] h-[133px] relative w-full">
                    <Text
                      className="absolute right-[5%] text-2xl md:text-[22px] text-center sm:text-xl text-yellow-900_63 top-[0]"
                      size="txtMontserratRomanLight24"
                    >
                      21234
                    </Text>
                    <div className="absolute flex flex-row items-end justify-start left-[4%] top-[0] w-[45%]">
                      <Img
                        className="h-[3px] mb-0.5 mt-3.5 rounded-[1px] w-[3px]"
                        src="images/img_vector307.svg"
                        alt="vector307"
                      />
                      <Img
                        className="h-[9px] mb-0.5 mt-2 rounded-[1px]"
                        src="images/img_vector309.svg"
                        alt="vector309"
                      />
                      <Img
                        className="h-[5px] ml-0.5 my-[7px] rounded-[1px]"
                        src="images/img_vector307.svg"
                        alt="vector308"
                      />
                      <Img
                        className="h-[3px] my-2 rounded-[1px] w-[3px]"
                        src="images/img_vector309.svg"
                        alt="vector310"
                      />
                      <Line className="bg-blue_gray-900 h-[15px] mb-1 rounded-[1px] w-[3px]" />
                      <Text
                        className="ml-[7px] text-base text-center text-gray-800"
                        size="txtMontserratRomanLight16"
                      >
                        0%
                      </Text>
                      <Text
                        className="ml-[9px] text-base text-center text-gray-800"
                        size="txtMontserratRomanLight16"
                      >
                        Desde ontem
                      </Text>
                    </div>
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
            </div>
            <div className="bg-white-A700 border border-black-900_1c border-solid flex flex-col items-center justify-end p-[13px] rounded-[10px] shadow-bs w-[88%] md:w-full">
              <div className="h-[158px] sm:h-[178px] md:h-[271px] mt-[30px] relative w-[98%] md:w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col gap-[42px] items-center justify-start pb-[45px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-2 items-center justify-start w-1/5 md:w-full">
                        <SelectBox
                          className="font-medium text-2xl md:text-[22px] text-left sm:text-xl text-yellow-900 tracking-[-0.23px] uppercase w-full"
                          placeholderClassName="text-yellow-900"
                          indicator={
                            <Img
                              className="h-2 mr-[0] w-3.5"
                              src="images/img_arrowdown_yellow_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group467"
                          options={maisVendidosOptionsList}
                          isSearchable={false}
                          placeholder="Mais Vendidos"
                        />
                        <Text
                          className="text-base text-gray-600 tracking-[-0.23px] uppercase"
                          size="txtMontserratRomanLight16Gray600"
                        >
                          lorem ipsum exemplo
                        </Text>
                      </div>
                      <div className="flex md:flex-1 sm:flex-col flex-row gap-3.5 items-center justify-between md:mt-0 mt-[5px] w-[44%] md:w-full">
                        <Input
                          name="group129"
                          placeholder="Pesquisar"
                          value={group129value}
                          onChange={(e) => setGroup129value(e)}
                          className="!placeholder:text-gray-600 !text-gray-600 p-0 text-base text-left tracking-[0.50px] w-full"
                          wrapClassName="flex sm:w-full"
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
                              onClick={() => setGroup129value("")}
                              style={{
                                visibility:
                                  group129value?.length <= 0
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
                        <div className="bg-blue_gray-900 border border-black-900_3d border-solid flex flex-col items-center justify-end p-5 rounded-[10px]">
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
                      </div>
                    </div>
                    <Line className="bg-black-900_16 h-px w-full" />
                  </div>
                </div>
                <div className="absolute bg-white-A700 border border-black-900_0a border-solid bottom-[0] flex flex-col gap-3.5 items-center justify-start left-[0] p-[7px] rounded-[10px] shadow-bs w-[21%]">
                  <Button
                    className="capitalize cursor-pointer min-w-[193px] mt-[3px] rounded-[10px] text-center text-lg tracking-[-0.23px]"
                    color="yellow_900_26"
                    size="sm"
                    variant="fill"
                  >
                    Mais vendidos
                  </Button>
                  <Text
                    className="capitalize mb-[18px] text-black-900 text-lg tracking-[-0.23px]"
                    size="txtMontserratRomanRegular18Black900"
                  >
                    Ordens recentes
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[46px] w-[98%] md:w-full">
                <div className="overflow-auto w-[98%]">
                  <ReactTable
                    columns={table3Columns}
                    data={table3Data.current}
                    rowClass={""}
                    headerClass=""
                  />
                </div>
                <Line className="bg-black-900_16 h-px w-full" />
                <Line className="bg-black-900_16 h-px mt-[63px] w-full" />
                <div className="bg-gray-100 flex flex-row items-center justify-end md:ml-[0] ml-[868px] mt-2 sm:pl-5 pl-[22px] rounded-[5px] w-[14%] md:w-full">
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

export default Home1Page;
