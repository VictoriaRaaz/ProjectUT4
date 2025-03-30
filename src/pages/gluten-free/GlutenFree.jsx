import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card"
import dish12 from "../../assets/dish12.jpg";
import dish13 from "../../assets/dish13.jpg";
import dish11 from "../../assets/dish11.jpg";
import dish15 from "../../assets/dish15.jpg";

import { useTranslation } from "react-i18next";

function GlutenFree() {
  const { t } = useTranslation();
  const glutenFree = [
    {
      name: t("Ensalada Mediterránea de Quinoa"),
      ingredients: t("Quinoa, tomates cherry, pepino, cebolla roja, aceitunas negras, queso feta, albahaca fresca, aceite de oliva, vinagre de vino tinto, sal y pimienta."),
      recipe: t("Cocina la quinoa según las indicaciones del paquete. Deja enfriar. Mientras tanto, corta los tomates cherry en mitades, el pepino en cubos pequeños, y la cebolla roja en rodajas finas. Desmenuza el queso feta en trozos pequeños. En un bol grande, mezcla la quinoa cocida con los tomates, pepino, cebolla, aceitunas y queso feta. Añade hojas de albahaca fresca troceadas. En un tazón pequeño, mezcla el aceite de oliva, vinagre de vino tinto, sal y pimienta. Vierte la vinagreta sobre la ensalada, mezcla bien y sirve fresca."),
      img: dish12
    }, {
      name: t("Pizza con Base de Coliflor"),
      ingredients: t("Coliflor, huevo, queso rallado (mozzarella o parmesano), ajo en polvo, orégano, sal, pimienta, salsa de tomate, ingredientes para topping (jamón, champiñones, pimientos, etc.)."),
      recipe: t("Precalienta el horno a 200°C. Ralla la coliflor y cocínala al vapor durante 5-7 minutos. Escurre bien para eliminar el exceso de agua. Mezcla la coliflor cocida con el huevo, queso rallado, ajo en polvo, orégano, sal y pimienta. Forma una base sobre una bandeja de horno forrada con papel de hornear. Hornea durante 20-25 minutos hasta que esté dorada. Añade salsa de tomate y tus toppings favoritos. Hornea por 5-10 minutos más hasta que el queso se derrita. Sirve caliente."),
      img: dish13
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
        <h1>{t("Recetas sin gluten")}</h1>
        <div className="recipes-list">
          {glutenFree.map((glutenFree, index) => (
            <Card
              key={index}
              name={glutenFree.name}
              ingredients={glutenFree.ingredients}
              recipe={glutenFree.recipe}
              img={glutenFree.img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GlutenFree