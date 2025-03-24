import Card from "../../components/card/Card"
import Header from "../../components/header/Header";

import dish14 from "../../assets/dish14.png";
import dish10 from "../../assets/dish10.png";
import dish11 from "../../assets/dish11.jpg";
import dish15 from "../../assets/dish15.jpg";
import Footer from "../../components/footer/Footer";

import { useTranslation } from "react-i18next";

function Desserts() {
  const { t } = useTranslation();
  const desserts = [
    {
      name: t("Crepes con chocolate y fresones"),
      ingredients: t("Harina, huevo, leche, mantequilla, chocolate negro, fresones, azúcar."),
      recipe: t("Mezcla la harina, huevo, leche y mantequilla para hacer la masa de los crepes. Cocina en una sartén con un poco de aceite. Derrite el chocolate y cubre los crepes con él. Añade fresones cortados y espolvorea con azúcar. Sirve caliente."),
      img: dish14
    }, {
      name: t("Tarta de Ruibarbo y Fresas"),
      ingredients: t("Ruibarbo, fresas, azúcar, esencia de vainilla, masa quebrada, huevo."),
      recipe: t("Cocina el ruibarbo con azúcar y vainilla. Agrega las fresas y deja enfriar. Coloca la masa quebrada en un molde y vierte la mezcla. Pincela los bordes con huevo y hornea a 180°C durante 30-35 minutos. Deja enfriar antes de servir."),
      img: dish10
    }, {
      name: t("Panqueques de Plátano y Avena"),
      ingredients: t("Plátano, avena (sin gluten), huevo, leche, canela, esencia de vainilla."),
      recipe: t("Tritura el plátano y mézclalo con la avena, huevo, leche, canela y vainilla. Cocina en una sartén antiadherente hasta dorar por ambos lados. Sirve con miel o frutas."),
      img: dish11
    }, {
      name: t("Brownie de Chocolate y Almendras"),
      ingredients: t("chocolate negro, mantequilla, azúcar, huevo, almendras, cacao en polvo, sal."),
      recipe: t("Derrite el chocolate con mantequilla. Mezcla con azúcar, huevo, almendras, cacao y una pizca de sal. Vierte en un molde y hornea a 180°C durante 20-25 minutos. Deja enfriar y corta en porciones."),
      img: dish15
    }
  ]

  return (
    <>
      <Header />
      <div className="recipes">
        <h1>{t("Postres")}</h1>
        <div className="recipes-list">
          {desserts.map((dessert, index) => (
            <Card
              key={index}
              name={dessert.name}
              ingredients={dessert.ingredients}
              recipe={dessert.recipe}
              img={dessert.img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Desserts