import React from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

const DynamicCustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <button
      as={Link}
      to={to}
      className={`flex items-center justify-center min-w-[120px] relative shadow-md transition-all duration-150  text-black rounded-md border-2 border-red-600  hover:bg-red-600    hover:text-white ${
        isActive ? "bg-red-600 text-white" : "bg-white"
      } `}
    >
      <Link className={`flex gap-3 px-4 py-2`} to={to} {...props}>
        {children}
      </Link>
    </button>
  );
};

export default DynamicCustomLink;
