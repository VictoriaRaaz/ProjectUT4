import Header from "../../components/header/Header"
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import { useTranslation } from 'react-i18next';

import dish5 from "../../assets/dish5.png";
import dish6 from "../../assets/dish6.jpg";
import dish7 from "../../assets/dish7.jpg";
import dish14 from "../../assets/dish14.png";

import dish8 from "../../assets/dish8.jpg";
import dish9 from "../../assets/dish9.jpg";
import dish10 from "../../assets/dish10.png";

import dish11 from "../../assets/dish11.jpg";
import dish12 from "../../assets/dish12.jpg";
import dish13 from "../../assets/dish13.jpg";
import dish15 from "../../assets/dish15.jpg";


function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <h1 className="title">{t("Recetas Fáciles y Rápidas")}</h1>
      <Slider />

      <div className="second-title">
        <h1>{t("Hoy recomendamos:")}</h1>
      </div>
      <div className="recipes-of-the-day">
        <div className="recipe-of-the-day">
          <a href="./recipes">
            <h2>{t("Spaghetti Aglio e Olio")}</h2>
            <img src={dish5} alt="dish5" />
            <p>{t("Un clásico de la cocina italiana, fácil y delicioso. Consiste en espaguetis acompañados de una mezcla de aceite de oliva, ajo y guindilla, creando un sabor simple pero sabroso. Perfecto para una comida rápida y ligera.")}</p>
          </a>
        </div>

        <div className="recipe-of-the-day">
          <a href="./recipes">
            <h2>{t("Tacos de Pollo al Pastor")}</h2>
            <img src={dish6} alt="dish6" />
            <p>{t("Una versión deliciosa de los tradicionales tacos al pastor, pero con pollo marinado en achiote y piña. Se sirve en tortillas de maíz con cilantro fresco y un toque de limón, brindando un sabor vibrante y lleno de frescura.")}</p>
          </a>
        </div>

        <div className="recipe-of-the-day">
          <a href="./recipes">
            <h2>{t("Ensalada Caprese")}</h2>
            <img src={dish7} alt="dish7" />
            <p>{t("Un plato refrescante y ligero de la cocina italiana, que combina tomates frescos, mozzarella de búfala y albahaca, rociados con aceite de oliva y vinagre balsámico. Es ideal como entrada o acompañamiento, con un equilibrio perfecto entre frescura y sabor.")}</p>
          </a>
        </div>

        <div className="recipe-of-the-day">
          <a href="./desserts">
            <h2>{t("Crepes con chocolate y fresones")}</h2>
            <img src={dish14} alt="dish14" />
            <p>{t("Un delicioso postre que combina crepes finas y suaves con un relleno de chocolate derretido, acompañados de fresones frescos y jugosos. Esta mezcla de sabores dulces y frescos crea un plato irresistible, ideal para una merienda especial o para sorprender en cualquier ocasión.")}</p>
          </a>
        </div>
      </div>

      <div className="third-title">
        <h1>{t("Recetas de temporada")}</h1>
      </div>
      <div className="seasonal-recipes">
        <div className="seasonal-recipe">
          <a href="./recipes">
            <h2>{t("Pollo Asado con Limón y Tomillo")}</h2>
            <img src={dish8} alt="dish8" />
            <p>{t("Esta receta simple de pollo asado al horno con limón, tomillo y un toque de aceite de oliva es perfecta para una comida ligera y sabrosa de primavera.")}</p>
          </a>
        </div>

        <div className="seasonal-recipe">
          <a href="./recipes">
            <h2>{t("Sopa Fría de Gaspacho")}</h2>
            <img src={dish9} alt="dish9" />
            <p>{t("Esta sopa tradicional española es ideal para el calor de la primavera y el verano. Se hace con tomates maduros, pepino, pimiento, cebolla, ajo y pan, todo triturado y servido bien frío. Es refrescante y llena de sabor.")}</p>
          </a>
        </div>

        <div className="seasonal-recipe">
          <a href="./desserts">
            <h2>{t("Tarta de Ruibarbo y Fresas")}</h2>
            <img src={dish10} alt="dish10" />
            <p>{t("El ruibarbo es un ingrediente que aparece en primavera, y cuando se combina con fresas en una tarta casera, se crea un postre delicioso, ligeramente ácido y dulce, ideal para los picoteos primaverales.")}</p>
          </a>
        </div>
      </div>

      <div className="fourth-title">
        <h1>{t("Recetas sin glúgen")}</h1>
      </div>
      <div className="gluten-free">
        <div className="gluten-free-recipe">
          <a href="./desserts">
            <h2>{t("Panqueques de Plátano y Avena")}</h2>
            <img src={dish11} alt="dish11" />
            <p>{t("Un desayuno sin gluten, nutritivo y delicioso. Se preparan con plátanos maduros, harina de avena sin gluten, huevo y un toque de canela. Son suaves, esponjosos y perfectos con miel o frutas frescas.")}</p>
          </a>
        </div>

        <div className="gluten-free-recipe">
          <a href="./recipes">
            <h2>{t("Ensalada Mediterránea de Quinoa")}</h2>
            <img src={dish12} alt="dish12" />
            <p>{t("Una opción ligera y saludable que combina quinoa cocida con tomate cherry, pepino, aceitunas, queso feta y aderezo de limón. Es refrescante, saciante y completamente libre de gluten.")}</p>
          </a>
        </div>

        <div className="gluten-free-recipe">
          <a href="./recipes">
            <h2>{t("Pizza con Base de Coliflor")}</h2>
            <img src={dish13} alt="dish13" />
            <p>{t("Para los amantes de la pizza sin gluten, esta versión usa una base hecha con coliflor triturada, queso y huevo. Se hornea hasta quedar crujiente y se cubre con salsa de tomate, queso y tus ingredientes favoritos.")}</p>
          </a>
        </div>

        <div className="gluten-free-recipe">
          <a href="./desserts">
            <h2>{t("Brownie de Chocolate y Almendras")}</h2>
            <img src={dish15} alt="dish15" />
            <p>{t("Un delicioso brownie hecho con cacao puro, almendras molidas y un toque de vainilla. Es denso, húmedo y perfectamente chocolatado, ideal para los amantes del dulce sin gluten.")}</p>
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home