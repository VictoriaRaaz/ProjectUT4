import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import "./PrivacyPolicy.css";

import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="privacy-policy">
        <section className="header">
          <h1>{t("Política de Privacidad")}</h1>
        </section>

        <section className="intro">
          <p>{t("En RecipeShare, valoramos tu privacidad y estamos comprometidos a proteger tu información personal. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tus datos.")}</p>
        </section>

        <section className="data-collection">
          <h2>{t("1. Información que Recopilamos")}</h2>
          <p>{t("Recopilamos información de las siguientes maneras: ")}</p>
          <ul>
            <li><strong>{t("- Información personal: ")}</strong>{t("Cuando te registras en una cuenta, recopilamos tu nombre, correo electrónico y cualquier otra información que nos proporciones.")}</li>
            <li><strong>{t("- Datos de uso: ")}</strong> {t("Recopilamos datos sobre cómo interactúas con nuestro sitio web, como las páginas visitadas y el tiempo que pasas en el sitio.")}</li>
            <li><strong>{t("- Cookies: ")}</strong>{t("Usamos cookies para mejorar tu experiencia en nuestro sitio y para hacer un seguimiento de los patrones de uso.")}</li>
          </ul>
        </section>

        <section className="data-use">
          <h2>{t("2. Cómo Usamos Tu Información")}</h2>
          <p>{t("Usamos la información que recopilamos de las siguientes maneras: ")}</p>
          <ul>
            <li>{t("- Para proporcionar y mejorar nuestros servicios.")}</li>
            <li>{t("- Para comunicarnos contigo, incluyendo el envío de boletines y actualizaciones.")}</li>
            <li>{t("- Para personalizar tu experiencia en nuestra plataforma.")}</li>
          </ul>
        </section>

        <section className="data-sharing">
          <h2>{t("3. Compartir Tu Información")}</h2>
          <p>{t("No venderemos, intercambiaremos ni transferiremos de ninguna otra manera tu información personal a terceros, excepto en los siguientes casos:")}</p>
          <ul>
            <li>{t("- Si es requerido por la ley o en respuesta a un proceso legal.")}</li>
            <li>{t("- Si creemos que es necesario para proteger nuestros derechos o la seguridad de otros.")}</li>
          </ul>
        </section>

        <section className="data-security">
          <h2>{t("4. Seguridad de los Datos")}</h2>
          <p>{t("Tomamos las precauciones razonables para proteger tu información contra el acceso, alteración, divulgación o destrucción no autorizados.")}</p>
        </section>

        <section className="user-rights">
          <h2>{t("5. Tus Derechos")}</h2>
          <p>{t("Tienes derecho a: ")}</p>
          <ul>
            <li>{t("- Solicitar acceso a la información personal que poseemos sobre ti.")}</li>
            <li>{t("- Solicitar la corrección de cualquier dato incorrecto.")}</li>
            <li>{t("- Solicitar la eliminación de tu información personal bajo ciertas circunstancias.")}</li>
          </ul>
        </section>

        <section className="contact">
          <h2>{t("6. Contáctanos")}</h2>
          <p>{t("Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos en")}<strong>{t(" soporte@recipeshare.com")}</strong></p>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
