import React from "react";

import { Button, Img, Line, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[19px] ml-10 md:ml-[0] md:mt-0 my-[38px] w-5"
          src="images/img_lock.svg"
          alt="lock"
        />
        <Text
          className="mb-[35px] ml-5 md:ml-[0] md:mt-0 mt-[38px] text-black-900_8e text-lg"
          size="txtMontserratRomanRegular18Black9008e"
        >
          Catalogo
        </Text>
        <Line className="bg-black-900_16 h-14 md:h-px md:ml-[0] ml-[30px] md:mt-0 my-5 md:w-full w-px" />
        <Img
          className="h-5 ml-9 md:ml-[0] md:mt-0 my-[38px] w-5"
          src="images/img_contrast.svg"
          alt="contrast"
        />
        <Text
          className="mb-[35px] md:ml-[0] ml-[15px] md:mt-0 mt-[38px] text-black-900_8e text-lg"
          size="txtMontserratRomanRegular18Black9008e"
        >
          Suporte
        </Text>
        <Button
          className="cursor-pointer flex items-center justify-center mb-[17px] min-w-[230px] md:ml-[0] ml-[834px] mr-10 md:mt-0 mt-[25px] rounded-[10px]"
          leftIcon={
            <Img
              className="mr-[15px] my-px"
              src="images/img_lock_gray_100.svg"
              alt="lock"
            />
          }
          color="yellow_900"
          size="md"
          variant="fill"
        >
          <div className="!text-gray-100 font-montserrat leading-[normal] text-left text-lg">
            Cadastrar -se
          </div>
        </Button>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
