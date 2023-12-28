import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const oRdenarPorMAisRelevanteOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CatalagoPage: React.FC = () => {
  const navigate = useNavigate();

  const [group254value, setGroup254value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 font-montserrat h-[1024px] mx-auto relative w-full">
        <div className="absolute bg-white-A700 flex flex-col items-center justify-end p-[26px] md:px-5 right-[0] shadow-bs1 top-[0] w-[79%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[22px] w-[96%] md:w-full">
            <div className="flex flex-col gap-[13px] items-start justify-start w-[34%] md:w-full">
              <Text
                className="lowercase md:text-3xl sm:text-[28px] text-[32px] text-yellow-900 tracking-[-0.23px]"
                size="txtMontserratRomanMedium32"
              >
                <span className="text-yellow-900 font-montserrat uppercase text-left font-medium">
                  C
                </span>
                <span className="text-yellow-900 font-montserrat text-left font-medium">
                  ATALOGO DE PRODUTOS
                </span>
              </Text>
              <SelectBox
                className="font-medium text-black-900_2b text-left text-sm tracking-[-0.23px] uppercase w-[74%] sm:w-full"
                placeholderClassName="text-black-900_2b"
                indicator={
                  <Img
                    className="h-1 mr-[0] w-[7px]"
                    src="images/img_arrowdown_black_900_01.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="group485"
                options={oRdenarPorMAisRelevanteOptionsList}
                isSearchable={false}
                placeholder="oRDENAR POR : mAIS RELEVANTE"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between w-[43%] md:w-full">
              <Input
                name="group254"
                placeholder="Pesquisar"
                value={group254value}
                onChange={(e) => setGroup254value(e)}
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
                    onClick={() => setGroup254value("")}
                    style={{
                      visibility:
                        group254value?.length <= 0 ? "hidden" : "visible",
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
        </div>
        <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 right-[3%] w-[72%]">
          <div className="bg-white-A700 border border-black-900_1c border-solid flex flex-col items-start justify-center mb-[336px] p-[13px] rounded-[10px] shadow-bs w-[29%] md:w-full">
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px] mt-2.5">
              <Text
                className="italic text-base text-yellow-900"
                size="txtMontserratItalicSemiBold16"
              >
                Categorias
              </Text>
            </div>
            <Line className="bg-gray-100 h-px mt-[19px] w-[97%]" />
            <div className="flex flex-col items-start justify-start mb-[31px] md:ml-[0] ml-[7px] mt-[26px] w-[61%] md:w-full">
              <CheckBox
                className="sm:pl-5 text-base text-left"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                name="loremipsum"
                id="loremipsum"
                label="Lorem Ipsum"
              ></CheckBox>
              <CheckBox
                className="mt-[25px] sm:pl-5 text-base text-left"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                name="loremipsum_One"
                id="loremipsum_One"
                label="Lorem Ipsum"
              ></CheckBox>
              <CheckBox
                className="mt-[25px] sm:pl-5 text-base text-left"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                name="loremipsum_Two"
                id="loremipsum_Two"
                label="Lorem Ipsum"
              ></CheckBox>
              <Text
                className="mt-[29px] text-xs text-yellow-900_bc uppercase"
                size="txtMontserratRomanSemiBold12Yellow900bc"
              >
                Lorem Ipsum
              </Text>
              <div className="flex flex-col items-center justify-start mt-[25px] w-full">
                <CheckBox
                  className="sm:pl-5 text-base text-left"
                  inputClassName="h-[15px] mr-[5px] w-[15px]"
                  name="loremipsum_Four"
                  id="loremipsum_Four"
                  label="Lorem Ipsum"
                ></CheckBox>
              </div>
              <CheckBox
                className="mt-[21px] sm:pl-5 text-base text-left"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                name="loremipsum_Five"
                id="loremipsum_Five"
                label="Lorem Ipsum"
              ></CheckBox>
              <CheckBox
                className="mt-[25px] sm:pl-5 text-base text-left"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                name="loremipsum_Six"
                id="loremipsum_Six"
                label="Lorem Ipsum"
              ></CheckBox>
              <CheckBox
                className="mt-[25px] sm:pl-5 text-base text-left"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                name="loremipsum_Seven"
                id="loremipsum_Seven"
                label="Lorem Ipsum"
              ></CheckBox>
              <Text
                className="mt-[27px] text-xs text-yellow-900_bc uppercase"
                size="txtMontserratRomanSemiBold12Yellow900bc"
              >
                Lorem Ipsum
              </Text>
              <div className="flex flex-col items-center justify-start mt-[27px] w-full">
                <CheckBox
                  className="sm:pl-5 text-base text-left"
                  inputClassName="h-[15px] mr-[5px] w-[15px]"
                  name="loremipsum_Nine"
                  id="loremipsum_Nine"
                  label="Lorem Ipsum"
                ></CheckBox>
              </div>
              <CheckBox
                className="mt-[25px] sm:pl-5 text-base text-left"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                name="loremipsum_Ten"
                id="loremipsum_Ten"
                label="Lorem Ipsum"
              ></CheckBox>
              <CheckBox
                className="mt-[25px] sm:pl-5 text-base text-left"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                name="loremipsum_Eleven"
                id="loremipsum_Eleven"
                label="Lorem Ipsum"
              ></CheckBox>
              <CheckBox
                className="mt-[25px] sm:pl-5 text-base text-left"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                name="loremipsum_Twelve"
                id="loremipsum_Twelve"
                label="Lorem Ipsum"
              ></CheckBox>
              <CheckBox
                className="mt-[25px] sm:pl-5 text-base text-left"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                name="loremipsum_Thirteen"
                id="loremipsum_Thirteen"
                label="Lorem Ipsum"
              ></CheckBox>
              <div className="flex flex-col items-center justify-start mt-[25px] w-full">
                <CheckBox
                  className="sm:pl-5 text-base text-left"
                  inputClassName="h-[15px] mr-[5px] w-[15px]"
                  name="loremipsum_Fourteen"
                  id="loremipsum_Fourteen"
                  label="Lorem Ipsum"
                ></CheckBox>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[55px] w-[59%] md:w-full">
            <div className="sm:gap-5 gap-[50px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col items-end justify-start mb-1.5 mt-[21px] w-[97%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-[91%] md:w-full">
                    <div className="bg-blue_gray-100_6b h-[157px] rounded-[10px] w-full"></div>
                    <Text
                      className="text-blue_gray-900_a5 text-center text-lg w-full"
                      size="txtMontserratRomanMedium18Bluegray900a5"
                    >
                      Nome lorem Ipsum exemplo
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-start justify-between mt-[25px] w-[96%] md:w-full">
                    <Img
                      className="h-[13px] w-3.5"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <div className="h-[18px] relative w-[92%] sm:w-full">
                      <CheckBox
                        className="font-light leading-[normal] sm:pr-5 text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="Forty"
                        id="Forty"
                        label="4,0"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                      <CheckBox
                        className="font-light leading-[normal] text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="emestoque"
                        id="emestoque"
                        label="Em estoque"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                    </div>
                  </div>
                  <Line className="bg-gray-600_19 h-px mt-2 w-full" />
                  <div className="flex flex-row items-start justify-start mt-2 w-[96%] md:w-full">
                    <div className="bg-blue_gray-100 h-[25px] rounded-[5px] w-[18%]"></div>
                    <Text
                      className="lowercase ml-1.5 mt-1.5 text-blue_gray-900_a5 text-xs"
                      size="txtMontserratRomanLight12"
                    >
                      São paulo
                    </Text>
                    <Text
                      className="ml-[50px] text-blue_gray-900 text-xl uppercase"
                      size="txtMontserratRomanMedium20"
                    >
                      R$ 25,00
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col items-end justify-start mb-1.5 mt-[21px] w-[97%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-[91%] md:w-full">
                    <div className="bg-blue_gray-100_6b h-[157px] rounded-[10px] w-full"></div>
                    <Text
                      className="text-blue_gray-900_a5 text-center text-lg w-full"
                      size="txtMontserratRomanMedium18Bluegray900a5"
                    >
                      Nome lorem Ipsum exemplo
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-start justify-between mt-[25px] w-[96%] md:w-full">
                    <Img
                      className="h-[13px] w-3.5"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <div className="h-[18px] relative w-[92%] sm:w-full">
                      <CheckBox
                        className="font-light leading-[normal] sm:pr-5 text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="Forty"
                        id="Forty2"
                        label="4,0"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                      <CheckBox
                        className="font-light leading-[normal] text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="emestoque"
                        id="emestoque2"
                        label="Em estoque"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                    </div>
                  </div>
                  <Line className="bg-gray-600_19 h-px mt-2 w-full" />
                  <div className="flex flex-row items-start justify-start mt-2 w-[96%] md:w-full">
                    <div className="bg-blue_gray-100 h-[25px] rounded-[5px] w-[18%]"></div>
                    <Text
                      className="lowercase ml-1.5 mt-1.5 text-blue_gray-900_a5 text-xs"
                      size="txtMontserratRomanLight12"
                    >
                      São paulo
                    </Text>
                    <Text
                      className="ml-[50px] text-blue_gray-900 text-xl uppercase"
                      size="txtMontserratRomanMedium20"
                    >
                      R$ 25,00
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col items-end justify-start mb-1.5 mt-[21px] w-[97%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-[91%] md:w-full">
                    <div className="bg-blue_gray-100_6b h-[157px] rounded-[10px] w-full"></div>
                    <Text
                      className="text-blue_gray-900_a5 text-center text-lg w-full"
                      size="txtMontserratRomanMedium18Bluegray900a5"
                    >
                      Nome lorem Ipsum exemplo
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-start justify-between mt-[25px] w-[96%] md:w-full">
                    <Img
                      className="h-[13px] w-3.5"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <div className="h-[18px] relative w-[92%] sm:w-full">
                      <CheckBox
                        className="font-light leading-[normal] sm:pr-5 text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="Forty"
                        id="Forty3"
                        label="4,0"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                      <CheckBox
                        className="font-light leading-[normal] text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="emestoque"
                        id="emestoque3"
                        label="Em estoque"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                    </div>
                  </div>
                  <Line className="bg-gray-600_19 h-px mt-2 w-full" />
                  <div className="flex flex-row items-start justify-start mt-2 w-[96%] md:w-full">
                    <div className="bg-blue_gray-100 h-[25px] rounded-[5px] w-[18%]"></div>
                    <Text
                      className="lowercase ml-1.5 mt-1.5 text-blue_gray-900_a5 text-xs"
                      size="txtMontserratRomanLight12"
                    >
                      São paulo
                    </Text>
                    <Text
                      className="ml-[50px] text-blue_gray-900 text-xl uppercase"
                      size="txtMontserratRomanMedium20"
                    >
                      R$ 25,00
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col items-end justify-start mb-1.5 mt-[21px] w-[97%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-[91%] md:w-full">
                    <div className="bg-blue_gray-100_6b h-[157px] rounded-[10px] w-full"></div>
                    <Text
                      className="text-blue_gray-900_a5 text-center text-lg w-full"
                      size="txtMontserratRomanMedium18Bluegray900a5"
                    >
                      Nome lorem Ipsum exemplo
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-start justify-between mt-[25px] w-[96%] md:w-full">
                    <Img
                      className="h-[13px] w-3.5"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <div className="h-[18px] relative w-[92%] sm:w-full">
                      <CheckBox
                        className="font-light leading-[normal] sm:pr-5 text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="Forty"
                        id="Forty4"
                        label="4,0"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                      <CheckBox
                        className="font-light leading-[normal] text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="emestoque"
                        id="emestoque4"
                        label="Em estoque"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                    </div>
                  </div>
                  <Line className="bg-gray-600_19 h-px mt-2 w-full" />
                  <div className="flex flex-row items-start justify-start mt-2 w-[96%] md:w-full">
                    <div className="bg-blue_gray-100 h-[25px] rounded-[5px] w-[18%]"></div>
                    <Text
                      className="lowercase ml-1.5 mt-1.5 text-blue_gray-900_a5 text-xs"
                      size="txtMontserratRomanLight12"
                    >
                      São paulo
                    </Text>
                    <Text
                      className="ml-[50px] text-blue_gray-900 text-xl uppercase"
                      size="txtMontserratRomanMedium20"
                    >
                      R$ 25,00
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-end p-[7px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col items-end justify-start mb-[7px] mt-[21px] w-[97%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-[91%] md:w-full">
                    <div className="bg-blue_gray-100_6b h-[157px] rounded-[10px] w-full"></div>
                    <Text
                      className="text-blue_gray-900_a5 text-center text-lg w-full"
                      size="txtMontserratRomanMedium18Bluegray900a5"
                    >
                      Nome lorem Ipsum exemplo
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-start justify-between mt-6 w-[96%] md:w-full">
                    <Img
                      className="h-[13px] w-3.5"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <div className="md:h-[17px] h-[18px] relative w-[92%] sm:w-full">
                      <CheckBox
                        className="font-light leading-[normal] sm:pr-5 text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="Forty"
                        id="Forty5"
                        label="4,0"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                      <CheckBox
                        className="font-light leading-[normal] text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="emestoque"
                        id="emestoque5"
                        label="Em estoque"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                    </div>
                  </div>
                  <Line className="bg-gray-600_19 h-px mt-2.5 w-full" />
                  <div className="flex flex-row items-center justify-start mt-2 w-[96%] md:w-full">
                    <div className="bg-blue_gray-100 h-[25px] rounded-[5px] w-[18%]"></div>
                    <Text
                      className="lowercase ml-1.5 text-blue_gray-900_a5 text-xs"
                      size="txtMontserratRomanLight12"
                    >
                      São paulo
                    </Text>
                    <Text
                      className="ml-[50px] text-blue_gray-900 text-xl uppercase"
                      size="txtMontserratRomanMedium20"
                    >
                      R$ 25,00
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-end p-[7px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col items-end justify-start mb-[7px] mt-[21px] w-[97%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-[91%] md:w-full">
                    <div className="bg-blue_gray-100_6b h-[157px] rounded-[10px] w-full"></div>
                    <Text
                      className="text-blue_gray-900_a5 text-center text-lg w-full"
                      size="txtMontserratRomanMedium18Bluegray900a5"
                    >
                      Nome lorem Ipsum exemplo
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-start justify-between mt-6 w-[96%] md:w-full">
                    <Img
                      className="h-[13px] w-3.5"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <div className="md:h-[17px] h-[18px] relative w-[92%] sm:w-full">
                      <CheckBox
                        className="font-light leading-[normal] sm:pr-5 text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="Forty"
                        id="Forty6"
                        label="4,0"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                      <CheckBox
                        className="font-light leading-[normal] text-left text-sm uppercase"
                        inputClassName="absolute h-3.5 mr-[5px] w-3.5"
                        name="emestoque"
                        id="emestoque6"
                        label="Em estoque"
                        shape="square"
                        color="yellow_900"
                        variant="fill"
                      ></CheckBox>
                    </div>
                  </div>
                  <Line className="bg-gray-600_19 h-px mt-2.5 w-full" />
                  <div className="flex flex-row items-center justify-start mt-2 w-[96%] md:w-full">
                    <div className="bg-blue_gray-100 h-[25px] rounded-[5px] w-[18%]"></div>
                    <Text
                      className="lowercase ml-1.5 text-blue_gray-900_a5 text-xs"
                      size="txtMontserratRomanLight12"
                    >
                      São paulo
                    </Text>
                    <Text
                      className="ml-[50px] text-blue_gray-900 text-xl uppercase"
                      size="txtMontserratRomanMedium20"
                    >
                      R$ 25,00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-100 flex flex-col items-center justify-start mb-[295px] md:ml-[0] ml-[82px] pb-[646px] rounded-[3px] w-[1%] md:w-full">
            <div className="bg-yellow-900 h-44 rounded-[3px] w-full"></div>
          </div>
        </div>
        <Sidebar className="!sticky !w-[322px] bg-white-A700 border border-black-900_0a border-solid flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs top-[0]">
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
                color: "#ce8d0d",
                fontSize: "18px",
                paddingLeft: "39px",
                paddingRight: "39px",
                [`&:hover, &.ps-active`]: {
                  color: "#6c6c6c",
                  fontWeight: "400 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-start mt-[77px] pb-[159px] w-full"
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
            <div className="flex flex-col items-center justify-start mt-[26px] pb-[123px] w-full">
              <div className="flex flex-col md:gap-10 gap-[294px] items-center justify-start w-full">
                <SubMenu
                  icon={
                    <Img
                      className="h-[19px] w-5"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                  label={<Text className="mt-0.5">Catalogo</Text>}
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
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
      </div>
    </>
  );
};

export default CatalagoPage;
