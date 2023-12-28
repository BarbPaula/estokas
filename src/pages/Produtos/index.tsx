import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

type Table2RowType = {
  nome: string;
  categoria: string;
  preodecompra: string;
  preodevendas: string;
  integrao: string;
  aes: string;
};

const ProdutosPage: React.FC = () => {
  const table2Data = React.useRef<Table2RowType[]>([
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "Lorem",
      preodevendas: "Lorem",
      integrao: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "Lorem",
      preodevendas: "Lorem",
      integrao: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "Lorem",
      preodevendas: "Lorem",
      integrao: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "Lorem",
      preodevendas: "Lorem",
      integrao: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "Lorem",
      preodevendas: "Lorem",
      integrao: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "Lorem",
      preodevendas: "Lorem",
      integrao: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem",
      categoria: "Lorem",
      preodecompra: "Lorem",
      preodevendas: "Lorem",
      integrao: "Lorem",
      aes: "images/img_edit.svg",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper<Table2RowType>();
    return [
      table2ColumnHelper.accessor("nome", {
        cell: (info) => (
          <Text
            className="capitalize pb-[30px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[164px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            nome
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("categoria", {
        cell: (info) => (
          <Text
            className="capitalize pb-8 pl-[18px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[165px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Categoria
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("preodecompra", {
        cell: (info) => (
          <Text
            className="capitalize pb-[30px] pt-[35px] sm:px-5 px-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[210px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Preço de compra
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("preodevendas", {
        cell: (info) => (
          <Text
            className="capitalize pb-8 sm:pl-5 pl-[35px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[204px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Preço de vendas
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("integrao", {
        cell: (info) => (
          <Text
            className="capitalize pb-8 pl-4 pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[147px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Integração
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("aes", {
        cell: (info) => (
          <div className="flex flex-row gap-[17px] items-start justify-between py-[17px]">
            <Button
              className="flex h-9 items-center justify-center mt-[42px] w-9"
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
              className="flex h-9 items-center justify-center mt-[42px] w-9"
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
            className="capitalize min-w-[89px] pl-[11px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Ações
          </Text>
        ),
      }),
    ];
  }, []);

  const [groupthirtythreevalue, setGroupthirtythreevalue] =
    React.useState<string>("");

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
              onClick={() => navigate("/configuraes")}
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
                  paddingLeft: "39px",
                  paddingRight: "39px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ce8d0d",
                    fontWeight: "400 !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mt-[77px] pb-[212px] w-full"
            >
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
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
              <div className="flex flex-col items-center justify-start mt-[26px] pb-[123px] w-full">
                <div className="flex flex-col md:gap-10 gap-[292px] items-center justify-start w-full">
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
                    <Text className="mt-1">Catalogo</Text>
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
                <Text
                  className="text-xs text-yellow-900_63"
                  size="txtMontserratRomanSemiBold12"
                >
                  FUNCIONALIDADES
                </Text>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[322px] mt-[29px]"
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
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[322px]"
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
              <Line className="bg-black-900_1e h-px mr-4 mt-[135px] w-[96%]" />
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
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="h-[210px] md:h-[455px] relative w-full">
              <Header className="absolute bottom-[14%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto w-full" />
              <div className="absolute bg-gradient  h-[210px] inset-y-[0] my-auto right-[0] w-[26%]"></div>
            </div>
            <div className="bg-white-A700 border border-black-900_1c border-solid flex flex-col items-center justify-end p-[19px] rounded-[10px] shadow-bs w-[97%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-5 w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start">
                    <Text
                      className="lowercase text-2xl md:text-[22px] sm:text-xl text-yellow-900 tracking-[-0.23px]"
                      size="txtMontserratRomanMedium24Yellow900"
                    >
                      TODOS OS PEDIDOS
                    </Text>
                    <Text
                      className="text-base text-gray-600 tracking-[-0.23px] uppercase"
                      size="txtMontserratRomanLight16Gray600"
                    >
                      lorem ipsum exemplo
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row gap-3.5 items-center justify-between md:mt-0 mt-0.5 w-[44%] md:w-full">
                    <Input
                      name="groupThirtyThree"
                      placeholder="Pesquisar"
                      value={groupthirtythreevalue}
                      onChange={(e) => setGroupthirtythreevalue(e)}
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
                          onClick={() => setGroupthirtythreevalue("")}
                          style={{
                            visibility:
                              groupthirtythreevalue?.length <= 0
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
                <Line className="bg-black-900_16 h-px mt-[23px] w-full" />
                <div className="overflow-auto w-[98%]">
                  <ReactTable
                    columns={table2Columns}
                    data={table2Data.current}
                    rowClass={""}
                    headerClass=""
                  />
                </div>
                <Line className="bg-black-900_16 h-px mt-[63px] w-full" />
                <Line className="bg-black-900_16 h-px mt-[18px] w-full" />
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

export default ProdutosPage;
