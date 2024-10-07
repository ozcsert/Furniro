import "./style.scss";
import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import UserImg from "../../assets/icons/user-icon.svg";
import SearchImg from "../../assets/icons/search-icon.svg";
import HeartImg from "../../assets/icons/heart-icon.svg";
import CartImg from "../../assets/icons/cart-icon.svg";
import CloseImg from "../../assets/icons/close-icon.svg";
import LineImg from "../../assets/images/line.svg";
import { NavLink } from "react-router-dom";

const customStyles = {
  overlay: {
    background: "#3A3A3A33",
  },
  content: {
    top: "0",
    left: "auto",
    right: "0",
    bottom: "auto",
    width: "422px",
    height: "736px",
    padding: "0",
    border: "none",
    borderRadius: "0",
    background: "#FFFFFF",
  },
};

Modal.setAppElement("#root");

const NavbarActions = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);

  const openModal = (content) => {
    setSelectedContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedContent(null);
  };

  const searchBarHandler = () => {
    setSearchBarIsOpen(!searchBarIsOpen);
  };

  const modalContent = {
    Heart: (
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Favourites</h5>
          <div className="close-img-box">
            <img
              className="close-img"
              src={CloseImg}
              alt=""
              onClick={closeModal}
            />
          </div>
        </div>
        <div className="line-box">
          <img className="line-img" src={LineImg} alt="" />
        </div>
        <div></div>
        <div className="line-box">
          <img className="line-img" src={LineImg} alt="" />
        </div>
        <div className="modal-btns">
          <button className="modal-btn">See More</button>
        </div>
      </div>
    ),
    Cart: (
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Shopping Cart</h5>
          <div className="close-img-box">
            <img
              className="close-img"
              src={CloseImg}
              alt=""
              onClick={closeModal}
            />
          </div>
        </div>
        <div className="line-box">
          <img className="line-img" src={LineImg} alt="" />
        </div>
        <div></div>
        <div className="line-box">
          <img className="line-img" src={LineImg} alt="" />
        </div>
        <div className="modal-btns">
          <button className="modal-btn">Cart</button>
          <button className="modal-btn">Checkout</button>
          <button className="modal-btn">Comparison</button>
        </div>
      </div>
    ),
  };

  return (
    <div className="navbar-actions">
      <NavLink className="actions-btns" to="/profile" >
        <img src={UserImg} alt="" onClick={() => openModal("User")} />
      </NavLink>
      {!searchBarIsOpen ? (
        <img
          className="actions-btns"
          src={SearchImg}
          alt=""
          onClick={() => searchBarHandler()}
        />
      ) : (
        <div className="search-container">
          <img
            className="actions-btns"
            src={CloseImg}
            alt=""
            onClick={() => searchBarHandler()}
          />

          <div className="search-bar">
            <div className="search-content-box">
              <div className="search-input-and-img-box">
                <input
                  className="search-input"
                  type="search"
                  placeholder="What are you looking for?"
                />
                <div className="search-img-box">
                  <img src={SearchImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <img
        className="actions-btns"
        src={HeartImg}
        alt=""
        onClick={() => openModal("Heart")}
      />
      <img
        className="actions-btns"
        src={CartImg}
        alt=""
        onClick={() => openModal("Cart")}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {selectedContent && modalContent[selectedContent]}
      </Modal>
    </div>
  );
};

export default NavbarActions;
