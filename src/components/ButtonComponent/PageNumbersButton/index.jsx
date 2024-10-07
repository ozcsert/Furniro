import React, { useState } from "react";
import "./style.scss";

const PageNumbersButton = () => {
  const [activePage, setActivePage] = useState(1);

  const pageNumbersButtons = [
    { btnName: "1", page: 1 },
    { btnName: "2", page: 2 },
    { btnName: "3", page: 3 },
    { btnName: "Next", page: "next" },
  ];

  const handlePageClick = (page) => {
    if (page !== "next") {
      setActivePage(page);
    } else {
      setActivePage((prev) => (prev < 3 ? prev + 1 : 1));
    }
  };

  return (
    <div className="pageNumbers">
      {pageNumbersButtons.map((button, index) => (
        <button
          key={index}
          className={`pageNumbersButton ${
            activePage === button.page ? "currentPage" : "normalPage"
          }`}
          onClick={() => handlePageClick(button.page)}
        >
          {button.btnName}
        </button>
      ))}
    </div>
  );
};

export default PageNumbersButton;
