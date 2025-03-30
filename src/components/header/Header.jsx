import "./Header.css";
import logo from "../../assets/logo.png";
import LanguageSelector from '../language-selector/LanguageSelector.jsx';
import '../i18n/i18n.js';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRecipesSubmenuOpen, setIsRecipesSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Cerrar submenú al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setIsRecipesSubmenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleRecipesSubmenu = (e) => {
    e.preventDefault();
    setIsRecipesSubmenuOpen(!isRecipesSubmenuOpen);
  };

  return (
    <header className="header-container">
      {/* Normal menu for screens > 600px */}
      <ul className="header-menu">
        <li><a href="/add-recipes">{t("Añade recetas")}</a></li>
        <a href="/home" className="logo-container">
          <li className="logo-container"><img src={logo} alt="logo" className="logo" /></li>
        </a>
        <li
          className="recipes-menu-item"
          ref={submenuRef}
        >
          <a href="/recipes" onClick={toggleRecipesSubmenu}>
            {t("Recetas")}
            {isRecipesSubmenuOpen ? <FaChevronUp size={12} style={{ marginLeft: '5px' }} /> : <FaChevronDown size={12} style={{ marginLeft: '5px' }} />}
          </a>
          {isRecipesSubmenuOpen && (
            <ul className="submenu">
              <li><a href="/recipes">{t("Todas las recetas")}</a></li>
              <li><a href="/gluten-free">{t("Sin Gluten")}</a></li>
            </ul>
          )}
        </li>
        <li><a href="/desserts">{t("Postres")}</a></li>
        <LanguageSelector />
      </ul>

      {/* Mobile menu for screens ≤ 600px */}
      <div className="mobile-menu-wrapper">
        <div className="mobile-header">
          <div className="mobile-left-section">
            <div className="language-selector-mobile">
              <LanguageSelector />
            </div>
          </div>
          <a href="/home" className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <button className="menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div 
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          ref={mobileMenuRef}
        >
          <ul>
            <li><a href="/add-recipes" onClick={toggleMobileMenu}>{t("Añade recetas")}</a></li>
            <li><a href="/recipes" onClick={toggleMobileMenu}>{t("Recetas")}</a></li>
            <li><a href="/gluten-free" onClick={toggleMobileMenu}>{t("Sin Gluten")}</a></li>
            <li><a href="/desserts" onClick={toggleMobileMenu}>{t("Postres")}</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header