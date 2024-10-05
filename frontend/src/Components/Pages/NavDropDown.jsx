import React from "react";
import DynamicCustomLink from "../DynamicCustomLink";

const NavDropDown = ({ navigationArr }) => {
  return (
    <div
      className={`absolute flex flex-col gap-2 bg-gray-100 border-2  border-red-800 rounded-lg ml-[6px] p-2`}
    >
      {navigationArr.map(({ route, navName }, index) => {
        return (
          <div key={index}>
            <DynamicCustomLink to={route}>{navName}</DynamicCustomLink>
          </div>
        );
      })}
    </div>
  );
};

export default NavDropDown;
