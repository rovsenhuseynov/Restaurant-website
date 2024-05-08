import React, { useState } from "react";
import "./header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Импортируем иконку для закрытого состояния
import { NavLink } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import "../../assets/globalStyles.scss";

function Header() {
  // Используем useState для создания состояния isOpen и setOpen,
  // где isOpen отвечает за открытие/закрытие меню, а setOpen - функция для его установки
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header">
      <NavLink to="/">
        <FastfoodIcon fontSize="large" className="logo-color" />
        <span className="header__logo">Food Website</span>
      </NavLink>

      {/* Динамически применяем класс "active", если isOpen === true */}
      <nav className={`header__nav ${isOpen ? "active" : ""}`}>
        <div className="header__nav-list">
          <NavLink to="/" className="header__nav-item">
            Home
          </NavLink>
          <NavLink to="/about" className="header__nav-item">
            About
          </NavLink>
          <NavLink to="/menu" className="header__nav-item">
            Menu
          </NavLink>
          <NavLink to="/contacts" className="header__nav-item">
            Contacts
          </NavLink>
          <NavLink to="/login" className="header__nav-item">
            login
          </NavLink>
        </div>
      </nav>

      {/* Применяем класс "active", если меню открыто */}
      <button
        className={`header__menu-btn ${isOpen ? "active" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {/* Условное отображение иконок в зависимости от состояния */}
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  );
}

export default Header;
