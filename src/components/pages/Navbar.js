import React, { useState } from "react";

import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Resume from "./resume";
import Navtabs from "./Navtabs";

function Navbar() {
  const pageList = ["About me", "Portfolio", "Contact", "Resume"];
  const [currentPage, setCurrentPage] = useState("About me");

  const renderPage = () => {
    switch (currentPage) {
      case "About me":
        return <About handlePageChange={handlePageChange}/>;

      case "Portfolio":
        return <Portfolio />;

      case "Contact":
        return <Contact />;

      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navtabs
        list={pageList}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      {renderPage()}
    </div>
  );
}

export default Navbar;
