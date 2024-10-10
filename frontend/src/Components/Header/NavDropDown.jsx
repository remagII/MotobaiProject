import React from "react";
import DynamicCustomLink from "../DynamicComponents/DynamicCustomLink";

const NavDropDown = ({ navigationArr }) => {
  return (
    <div
      className={` absolute flex flex-col flex-wrap gap-2 bg-gray-100 border-2 border-t-0 border-red-800 rounded-lg p-2`}
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
