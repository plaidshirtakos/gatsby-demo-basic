import React from "react";
import { Link } from "gatsby";

const MyLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      style={{ paddingRight: "10px" }}
      activeStyle={{ color: "blue" }}
    >
      {children}
    </Link>
  );
};

export default MyLink;
