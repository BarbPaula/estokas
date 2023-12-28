import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, List, ReactTable, Text } from "components";
import Header2 from "components/Header2";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];
type Table6RowType = {
  nome: string;
  categoria: string;
  preodecompra: string;
  aes: string;
};

const ImportareimportarPage: React.FC = () => {
  const table6Data = React.useRef<Table6RowType[]>([
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      nome: "Lorem ",
      categoria: "Lorem ",
      preodecompra: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
    {
      nome: "Lorem",
      categoria: "Lorem",
      preodecompra: "images/img_thumbsup_blue_gray_900.svg",
      aes: "images/img_group39854.png",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table6Columns = React.useMemo(() => {
    const table6ColumnHelper = createColumnHelper<Table6RowType>();
    return [
      table6ColumnHelper.accessor("nome", {
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
            className="capitalize min-w-[444px] pb-[3px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            nome
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("categoria", {
        cell: (info) => (
          <Text
            className="capitalize pb-[25px] pl-[18px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[173px] py-0.5 text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Categoria
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("preodecompra", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between p-2">
            <Text
              className="capitalize ml-[41px] text-gray-600 text-lg tracking-[-0.23px]"
              size="txtMontserratRomanLight18"
            >
              Lorem
            </Text>
            <Button
              className="flex h-9 items-center justify-center mb-2.5 mt-[43px] w-9"
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
            className="capitalize min-w-[284px] pt-[3px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Preço de compra
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("aes", {
        cell: (info) => (
          <div className="flex flex-row gap-[17px] items-start justify-between pl-[9px] py-[9px]">
            <Button
              className="flex h-9 items-center justify-center mb-[9px] mt-[42px] w-9"
              shape="round"
              color="blue_gray_900"
              size="xs"
              variant="fill"
            >
              <Img className="h-[19px]" src="images/img_edit.svg" alt="edit" />
            </Button>
            <Button
              className="flex h-9 items-center justify-center mb-[9px] mt-[42px] w-9"
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

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-[19px] my-auto w-5"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Produtos",
      href: "/produtos",
      active: window.location.pathname === "/produtos",
    },
    {
      icon: <Img className="h-3 my-1" src="images/img_user.svg" alt="user" />,
      label: "Ordens",
      href: "/ordens",
      active: window.location.pathname === "/ordens",
    },
    {
      icon: (
        <Img
          className="h-[34px] md:h-auto object-cover w-[34px]"
          src="images/img_maskgroup.png"
          alt="maskgroup"
        />
      ),
      label: "Envios",
      href: "/envios",
      active: window.location.pathname === "/envios",
    },
    {
      icon: (
        <Img
          className="h-[17px] w-[18px]"
          src="images/img_thumbsup_gray_600.svg"
          alt="thumbsup_Seven"
        />
      ),
      label: "Financeiro",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 font-montserrat h-[1024px] mx-auto relative w-full">
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto md:px-5 right-[3%] w-[74%]">
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <Header2 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <div className="bg-white-A700 border border-black-900_1c border-solid flex flex-col items-center justify-end p-[19px] rounded-[10px] shadow-bs w-full">
              <div className="flex flex-col items-start justify-start mt-5 w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start mb-0.5">
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
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-0.5 w-[76%] md:w-full">
                    <div className="border border-black-900_3d border-solid flex flex-row gap-3.5 items-center justify-start p-4 rounded-[10px] w-[49%] md:w-full">
                      <Img
                        className="h-5 ml-[3px] w-5"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <Text
                        className="mt-0.5 text-base text-gray-600 tracking-[0.50px]"
                        size="txtMontserratRomanRegular16Gray600"
                      >
                        Pesquisar
                      </Text>
                    </div>
                    <div className="bg-blue_gray-900 border border-black-900_3d border-solid flex flex-col items-center justify-end p-5 rounded-[10px] shadow-bs w-[9%] md:w-full">
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
                    <div className="bg-white-A700 border border-black-900_3d border-solid flex flex-col items-center justify-start p-4 rounded-[10px] shadow-bs w-[9%] md:w-full">
                      <Img
                        className="h-5 mb-[3px]"
                        src="images/img_download.svg"
                        alt="download"
                      />
                    </div>
                    <div className="border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-[17px] rounded-[10px]">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[0.50px]"
                        size="txtMontserratRomanRegular16Bluegray900"
                      >
                        Novo Produto
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-black-900_16 h-px mt-[22px] w-full" />
                <div className="overflow-auto w-full">
                  <ReactTable
                    columns={table6Columns}
                    data={table6Data.current}
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
        <div className="absolute bg-gradient  h-[210px] md:px-5 right-[0] top-[0] w-1/5"></div>
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
            className="ml-[104px] mr-[109px] mt-1 text-blue_gray-900_a5 text-xs underline uppercase"
            size="txtMontserratRomanLight12"
          >
            CONFIGURAÇÕES
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                paddingLeft: "39px",
                gap: "15px",
                paddingRight: "13px",
                color: "#0000008e",
                fontSize: "18px",
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
                  <Text className="md:ml-[0] ml-[72px] text-gray-600">
                    Notificações
                  </Text>
                </div>
              </MenuItem>
            </div>
            <div className="flex flex-col gap-[9px] items-center justify-start mt-7 w-full">
              <Text
                className="text-xs text-yellow-900_63"
                size="txtMontserratRomanSemiBold12"
              >
                MARKETPLACE
              </Text>
              <div className="flex flex-col gap-[28.37px] items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[27px] items-center justify-start mt-[38px] w-full">
              <Text
                className="text-xs text-yellow-900_63"
                size="txtMontserratRomanSemiBold12"
              >
                FUNCIONALIDADES
              </Text>
              <div className="flex flex-col gap-[39px] items-center justify-start w-full">
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
                  href="/suporte"
                >
                  <Text>Suporte</Text>
                </MenuItem>
              </div>
            </div>
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
        <div className="absolute bg-blue_gray-900_68 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[213px] md:px-10 sm:px-5 w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-start mb-[5px] p-7 md:px-5 rounded-[20px] w-full">
            <div className="flex flex-col justify-start mb-6 mt-1 w-[99%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[250px] w-[71%] md:w-full">
                <Text
                  className="capitalize mt-[13px] md:text-3xl sm:text-[28px] text-[32px] text-yellow-900 tracking-[-0.23px]"
                  size="txtMontserratRomanMedium32"
                >
                  Importar e exportar
                </Text>
                <Img
                  className="common-pointer h-3.5 w-3.5"
                  src="images/img_close.svg"
                  alt="close"
                  onClick={() => navigate("/produtosone")}
                />
              </div>
              <Line className="bg-black-900_23 h-px md:ml-[0] ml-[9px] mr-[46px] mt-[26px] w-[94%]" />
              <div className="bg-blue_gray-900_21 border border-black-900_a0 border-solid flex flex-col gap-[37px] items-center justify-center md:ml-[0] ml-[242px] mr-[269px] mt-[77px] p-[37px] sm:px-5 rounded-[10px] w-2/5 md:w-full">
                <Img
                  className="h-[81px] mt-[23px]"
                  src="images/img_file.svg"
                  alt="file"
                />
                <Text
                  className="text-black-900 text-lg underline"
                  size="txtMontserratRomanRegular18Black900"
                >
                  Selecione o arquivo desejado
                </Text>
              </div>
              <div className="flex md:flex-col flex-row font-lato gap-9 items-center justify-between mr-[27px] mt-[42px] w-[97%] md:w-full">
                <Button
                  className="cursor-pointer font-bold min-w-[392px] sm:min-w-full rounded-[12px] text-center text-lg"
                  color="blue_gray_900"
                  size="xl"
                  variant="fill"
                >
                  Baixar modelo - exel
                </Button>
                <Button
                  className="!text-white-A700 cursor-pointer font-bold min-w-[392px] sm:min-w-full rounded-[12px] text-center text-lg"
                  color="yellow_900"
                  size="xl"
                  variant="fill"
                >
                  Baixar modelo - CVS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportareimportarPage;
