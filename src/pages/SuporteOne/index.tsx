import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const SuporteOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-montserrat items-start justify-start mx-auto w-full">
        <Sidebar11 className="!sticky !w-[322px] bg-white-A700 border border-black-900_0a border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs top-[0]" />
      </div>
    </>
  );
};

export default SuporteOnePage;
