import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";

import { CloseSVG } from "../../assets/images";

type Table5RowType = {
  id: string;
  nome: string;
  comprador: string;
  categoria: string;
  endereo: string;
  codrastreio: string;
  aes: string;
};

const OrdensPage: React.FC = () => {
  const table5Data = React.useRef<Table5RowType[]>([
    {
      id: "Lorem ",
      nome: "Lorem ",
      comprador: "Lorem ",
      categoria: "Lorem ",
      endereo: "Lorem ",
      codrastreio: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      id: "Lorem ",
      nome: "Lorem ",
      comprador: "Lorem ",
      categoria: "Lorem ",
      endereo: "Lorem ",
      codrastreio: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      id: "Lorem ",
      nome: "Lorem ",
      comprador: "Lorem ",
      categoria: "Lorem ",
      endereo: "Lorem ",
      codrastreio: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      id: "Lorem ",
      nome: "Lorem ",
      comprador: "Lorem ",
      categoria: "Lorem ",
      endereo: "Lorem ",
      codrastreio: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      id: "Lorem ",
      nome: "Lorem ",
      comprador: "Lorem ",
      categoria: "Lorem ",
      endereo: "Lorem ",
      codrastreio: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      id: "Lorem ",
      nome: "Lorem ",
      comprador: "Lorem ",
      categoria: "Lorem ",
      endereo: "Lorem ",
      codrastreio: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      id: "Lorem",
      nome: "Lorem",
      comprador: "Lorem",
      categoria: "Lorem",
      endereo: "Lorem",
      codrastreio: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table5Columns = React.useMemo(() => {
    const table5ColumnHelper = createColumnHelper<Table5RowType>();
    return [
      table5ColumnHelper.accessor("id", {
        cell: (info) => (
          <Text
            className="capitalize pb-[25px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[86px] pb-1 pl-[18px] sm:pr-5 pr-[35px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            iD
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("nome", {
        cell: (info) => (
          <Text
            className="capitalize pb-[25px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[178px] pb-1 text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            nome
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("comprador", {
        cell: (info) => (
          <Text
            className="capitalize pb-[25px] sm:pl-5 pl-[22px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[137px] py-0.5 text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            comprador
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("categoria", {
        cell: (info) => (
          <Text
            className="capitalize pb-[23px] pl-[18px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[130px] py-0.5 text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Categoria
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("endereo", {
        cell: (info) => (
          <Text
            className="capitalize pb-[21px] pl-[18px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[128px] pt-1 text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Endereço
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("codrastreio", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-between p-2">
            <Text
              className="capitalize ml-[21px] mt-[45px] text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem
            </Text>
            <Button
              className="flex h-9 items-center justify-center mb-2.5 mt-[42px] w-9"
              shape="round"
              color="blue_gray_900"
              size="xs"
              variant="outline"
            >
              <Img className="h-5" alt="thumbsup" src={info?.getValue()} />
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[242px] py-0.5 text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Cod. rastreio
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("aes", {
        cell: (info) => (
          <div className="flex flex-row gap-[17px] items-start justify-between pl-[9px] py-[9px]">
            <Button
              className="flex h-9 items-center justify-center mb-[9px] mt-[41px] w-9"
              shape="round"
              color="blue_gray_900"
              size="xs"
              variant="fill"
            >
              <Img className="h-[19px]" src="images/img_edit.svg" alt="edit" />
            </Button>
            <Button
              className="flex h-9 items-center justify-center mb-[9px] mt-[41px] w-9"
              shape="round"
              color="yellow_900_d6"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-[18px]"
                alt="group39854"
                src={info?.getValue()}
              />
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[98px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Ações
          </Text>
        ),
      }),
    ];
  }, []);

  const [group172value, setGroup172value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-4 items-start justify-between w-full">
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
              <div className="flex flex-col gap-[29px] items-center justify-start mt-[30px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-3 my-1"
                      src="images/img_sort.svg"
                      alt="sort"
                    />
                  }
                  active={window.location.pathname === "/ordens"}
                  href="/ordens"
                >
                  <Text className="text-yellow-900">Ordens</Text>
                </MenuItem>
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
                  <Text className="text-black-900_8e">Envios</Text>
                </MenuItem>
              </div>
            </Menu>
            {!collapsed && (
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[130px] ml-10 mr-[152px] mt-7"
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
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="h-[210px] md:h-[455px] relative w-full">
              <header className="absolute bottom-[14%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto w-full">
                <div className="bg-white-A700 border border-solid border-yellow-900_6d flex md:flex-1 flex-col items-end justify-end pl-[3px] py-[3px] rounded-[10px] shadow-bs w-[33%] md:w-full">
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
                <div className="bg-white-A700 border border-solid border-yellow-900_6d flex md:flex-1 flex-col items-end justify-end md:ml-[0] ml-[19px] pl-[3px] py-[3px] rounded-[10px] shadow-bs w-[33%] md:w-full">
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
                          alt="vectorSixtyOne_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-solid border-yellow-900_6d flex md:flex-1 flex-col items-end justify-end ml-5 md:ml-[0] pl-[3px] py-[3px] rounded-[10px] shadow-bs w-[33%] md:w-full">
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
                          alt="vectorSixtyOne_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="absolute bg-gradient  h-[210px] inset-y-[0] my-auto right-[0] w-[26%]"></div>
            </div>
            <div className="bg-white-A700 border border-black-900_1c border-solid flex flex-col items-center justify-end p-[19px] rounded-[10px] shadow-bs w-[97%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-[18px] w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-2 items-start justify-start mb-1.5">
                    <Text
                      className="text-2xl md:text-[22px] sm:text-xl text-yellow-900 tracking-[-0.23px]"
                      size="txtMontserratRomanMedium24Yellow900"
                    >
                      vendas
                    </Text>
                    <Text
                      className="text-base text-gray-600 tracking-[-0.23px] uppercase"
                      size="txtMontserratRomanLight16Gray600"
                    >
                      lorem ipsum exemplo
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row gap-3.5 items-center justify-between md:mt-0 mt-[9px] w-[44%] md:w-full">
                    <Input
                      name="group172"
                      placeholder="Pesquisar"
                      value={group172value}
                      onChange={(e) => setGroup172value(e)}
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
                          onClick={() => setGroup172value("")}
                          style={{
                            visibility:
                              group172value?.length <= 0 ? "hidden" : "visible",
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
                  </div>
                </div>
                <Line className="bg-black-900_16 h-px mt-[18px] w-full" />
                <div className="overflow-auto w-full">
                  <ReactTable
                    columns={table5Columns}
                    data={table5Data.current}
                    rowClass={""}
                    headerClass=""
                  />
                </div>
                <Line className="bg-black-900_16 h-px mt-[63px] w-full" />
                <Line className="bg-black-900_16 h-px mt-6 w-full" />
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

export default OrdensPage;
