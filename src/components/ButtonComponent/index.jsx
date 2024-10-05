import React, { useState } from "react";
import "./style.scss";

const SingleButton = ({
  btnName = "Button", // Butonun üzerinde görünen metin
  bgColor = "var(--clr-light-cream)", // Butonun arkaplan rengi
  textColor = "var(--text-third)", // Butonun yazı rengi
  currentPage = false, // Sayfalama için aktif olan sayfayı belirler
  btnType = "showMoreButton", // Butonun türü (showMoreButton, buyButton, pagination)
}) => {
  const [isActive, setIsActive] = useState(false);

  // Butona hangi CSS sınıfının atanacağını belirler. Butonun türüne ve diğer parametrelere göre stil sınıfı ayarlanır.
  const btnClass =
    btnType === "pagination"
      ? currentPage
        ? "currentPage"
        : "normalPage"
      : btnType;

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`buttonComponent ${btnClass}`}
      style={{
        backgroundColor: isActive ? "var(--clr-orange)" : bgColor,
        color: isActive ? "var(--text-third)" : textColor,
      }}
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

const ButtonComponent = () => {
  const buttons = [
    {
      btnType: "showMoreButton",
      btnName: "Show More",
      bgColor: "var(--text-third)",
      textColor: "var(--clr-gold)",
    },
    {
      btnType: "buyButton",
      btnName: "BUY NOW",
      bgColor: "var(--clr-gold)",
      textColor: "var(--text-third)",
    },
  ];

  // Sayfalama Butonlarının Listesi
  const paginationButtons = [
    {
      btnType: "pagination",
      btnName: "1",
      currentPage: true,
      bgColor: "var(--clr-light-cream)",
      textColor: "var(--text-primary)",
    },
    {
      btnType: "pagination",
      btnName: "2",
      currentPage: false,
      bgColor: "var(--clr-light-cream)",
      textColor: "var(--text-primary)",
    },
    {
      btnType: "pagination",
      btnName: "3",
      currentPage: false,
      bgColor: "var(--clr-light-cream)",
      textColor: "var(--text-primary)",
    },
    {
      btnType: "pagination",
      btnName: "Next",
      currentPage: false,
      bgColor: "var(--clr-light-cream)",
      textColor: "var(--text-primary)",
    },
  ];

  // map Kullanımı
  return (
    <div className="buttons-container">
      {buttons.map((button, index) => (
        <SingleButton
          key={index}
          btnType={button.btnType}
          btnName={button.btnName}
          bgColor={button.bgColor}
          textColor={button.textColor}
        />
      ))}
      <div className="pagination">
        {paginationButtons.map((button, index) => (
          <SingleButton
            key={index}
            btnType={button.btnType}
            btnName={button.btnName}
            currentPage={button.currentPage}
            bgColor={button.bgColor}
            textColor={button.textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonComponent;
