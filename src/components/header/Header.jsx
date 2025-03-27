import "./Header.css";
import logo from "../../assets/logo.png";
import LanguageSelector from '../languageSelector/LanguageSelector.jsx';
import '../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  return (
    <header className="header-container">
      <ul className="header-menu">
        <li><a href="/add-recipes">Añade recetas</a></li>
        <a href="/home" className="logo-container">
          <li className="logo-container"><img src={logo} alt="logo" className="logo" /></li>
        </a>
        <li><a href="/recipes">{t("Recetas")}</a></li>
        <li><a href="/desserts">{t("Postres")}</a></li>
        <LanguageSelector />
      </ul>
    </header>
  )
}

export default Header