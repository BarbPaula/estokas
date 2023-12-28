import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];
type Table8RowType = {
  nome: string;
  categoria: string;
  integrado: string;
  aes: string;
};

const SeucadastrofoiconcluidocomsucessoPage: React.FC = () => {
  const table8Data = React.useRef<Table8RowType[]>([
    {
      nome: "Lorem exemplo lorem",
      categoria: "Lorem",
      integrado: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem exemplo lorem",
      categoria: "Lorem",
      integrado: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem exemplo lorem",
      categoria: "Lorem",
      integrado: "Lorem",
      aes: "images/img_edit.svg",
    },
    {
      nome: "Lorem exemplo lorem",
      categoria: "Lorem",
      integrado: "Lorem",
      aes: "images/img_edit.svg",
    },
  ]);
  const table8Columns = React.useMemo(() => {
    const table8ColumnHelper = createColumnHelper<Table8RowType>();
    return [
      table8ColumnHelper.accessor("nome", {
        cell: (info) => (
          <Text
            className="capitalize pb-[23px] pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[308px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Nome
          </Text>
        ),
      }),
      table8ColumnHelper.accessor("categoria", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-3 py-3">
            <Button
              className="capitalize cursor-pointer min-w-[114px] mr-[126px] mt-[35px] text-center text-lg tracking-[-0.23px]"
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
          <Text
            className="capitalize min-w-[252px] pl-3.5 text-blue_gray-900 text-center text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            categoria
          </Text>
        ),
      }),
      table8ColumnHelper.accessor("integrado", {
        cell: (info) => (
          <Text
            className="capitalize pb-[25px] pl-3.5 pt-[35px] text-gray-600 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanLight18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[251px] text-blue_gray-900 text-lg tracking-[-0.23px]"
            size="txtMontserratRomanRegular18"
          >
            Integrado
          </Text>
        ),
      }),
      table8ColumnHelper.accessor("aes", {
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
                alt="thumbsup_One"
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
            className="capitalize min-w-[89px] pl-[11px] text-blue_gray-900 text-lg tracking-[-0.23px]"
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
  const [group275value, setGroup275value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="h-[1024px] overflow-auto md:px-5 relative w-full">
          <div className="absolute h-[1024px] inset-[0] justify-center m-auto w-full">
            <Sidebar2 className="!sticky !w-[306px] bg-white-A700 border border-black-900_0a border-solid flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto shadow-bs top-[0]" />
            <Button
              className="absolute flex h-8 items-center justify-center left-[20%] top-[3%] w-8"
              shape="circle"
              color="blue_gray_900"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_arrowdown.svg" alt="arrowdown" />
            </Button>
            <div className="absolute flex flex-col gap-[22px] inset-x-[0] items-start justify-start mx-auto top-[6%] w-[56%]">
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
                  <div className="flex flex-col items-center justify-start mt-4 w-full">
                    <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                      <div className="flex flex-col gap-[5px] items-start justify-start">
                        <Text
                          className="text-center text-gray-600_02 text-lg"
                          size="txtMontserratRomanMedium18Gray60002"
                        >
                          TOTAL DE CATEGORIAS
                        </Text>
                        <div className="flex flex-row items-end justify-start w-[81%] md:w-full">
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
                        className="mt-[3px] text-2xl md:text-[22px] text-center sm:text-xl text-yellow-900_63"
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
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end rounded-[10px] shadow-bs w-full">
                  <div className="flex flex-col items-center justify-start mt-4 w-full">
                    <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                      <div className="flex flex-col gap-[5px] items-start justify-start">
                        <Text
                          className="text-center text-gray-600_02 text-lg"
                          size="txtMontserratRomanMedium18Gray60002"
                        >
                          TOTAL DE CATEGORIAS
                        </Text>
                        <div className="flex flex-row items-end justify-start w-[81%] md:w-full">
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
                        className="mt-[3px] text-2xl md:text-[22px] text-center sm:text-xl text-yellow-900_63"
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
            <div className="absolute bg-white-A700 border border-black-900_1c border-solid bottom-[2%] flex flex-col items-center justify-end p-[13px] right-[3%] rounded-[10px] shadow-bs w-[74%]">
              <div className="flex flex-col items-start justify-start mt-[30px] w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="lowercase text-2xl md:text-[22px] sm:text-xl text-yellow-900 tracking-[-0.23px]"
                      size="txtMontserratRomanLight24Yellow900"
                    >
                      <span className="text-yellow-900 font-montserrat uppercase text-left font-medium">
                        P
                      </span>
                      <span className="text-yellow-900 font-montserrat text-left font-medium">
                        rodutos FORA DE LINHA{" "}
                      </span>
                    </Text>
                    <Text
                      className="text-base text-gray-600 tracking-[-0.23px] uppercase"
                      size="txtMontserratRomanLight16Gray600"
                    >
                      lorem ipsum exemplo
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row gap-3.5 items-center justify-between md:mt-0 mt-[5px] w-[44%] md:w-full">
                    <Input
                      name="group275"
                      placeholder="Pesquisar"
                      value={group275value}
                      onChange={(e) => setGroup275value(e)}
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
                          onClick={() => setGroup275value("")}
                          style={{
                            visibility:
                              group275value?.length <= 0 ? "hidden" : "visible",
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
                <Line className="bg-black-900_16 h-px mt-[42px] w-full" />
                <div className="overflow-auto ml-20 md:ml-[0] w-[90%]">
                  <ReactTable
                    columns={table8Columns}
                    data={table8Data.current}
                    rowClass={""}
                    headerClass=""
                  />
                </div>
                <Line className="bg-black-900_16 h-px mt-[63px] w-full" />
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
            <Img
              className="absolute h-[270px] object-cover right-[0] top-[9%] w-[12%]"
              src="images/img_rectangle2065_2.png"
              alt="rectangle2065"
            />
            <div className="absolute bg-blue_gray-900_b2 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[206px] md:px-10 sm:px-5 w-full">
              <div className="bg-gray-100 flex flex-col items-center justify-start mb-[9px] md:ml-[0] ml-[163px] p-[63px] md:px-10 sm:px-5 rounded-[20px] w-[63%] md:w-full">
                <Text
                  className="text-base text-gray-600 tracking-[-0.23px] uppercase"
                  size="txtMontserratRomanLight16Gray600"
                >
                  COMECE AGORA!
                </Text>
                <Text
                  className="leading-[40.00px] mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-center text-yellow-900 tracking-[-0.23px] w-[89%] sm:w-full"
                  size="txtMontserratRomanMedium32"
                >
                  <span className="text-yellow-900 font-montserrat font-medium">
                    Parabéns{" "}
                  </span>
                  <span className="text-blue_gray-900 font-montserrat font-normal">
                    sua conta foi criada com sucesso!
                  </span>
                </Text>
                <Img
                  className="h-[151px] md:h-auto mt-[51px] object-cover w-[151px]"
                  src="images/img_maskgroup_151x151.png"
                  alt="maskgroup"
                />
                <Text
                  className="bg-blue_gray-900 h-[71px] justify-center mb-[3px] mt-[76px] pb-[22px] pt-[26px] sm:px-5 px-[35px] rounded-[12px] text-lg text-white-A700 w-[480px]"
                  size="txtLatoBold18"
                >
                  Prosseguir
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute overflow-x-auto right-[0] top-[15%] w-[28%]">
            <div className="bg-white-A700 flex flex-col gap-[5px] justify-end rounded-[10px] shadow-bs w-full">
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

export default SeucadastrofoiconcluidocomsucessoPage;
