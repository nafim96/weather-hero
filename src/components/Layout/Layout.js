import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen overflow-x-hidden">
      <h1>{children}</h1>
    </div>
  );
};

export default Layout;
