import Card from "../../components/card/Card"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";

import dish5 from "../../assets/dish5.png";
import dish6 from "../../assets/dish6.jpg";
import dish7 from "../../assets/dish7.jpg";
import dish8 from "../../assets/dish8.jpg";
import dish9 from "../../assets/dish9.jpg";
import dish12 from "../../assets/dish12.jpg";
import dish13 from "../../assets/dish13.jpg";

import { useTranslation } from "react-i18next";

function Recipes() {
  const { t } = useTranslation();
  const recipes = [
    {
      name: t("Spaghetti Aglio e Olio"),
      ingredients: t("Espaguetis, aceite de oliva, ajo, guindilla, perejil fresco, sal y pimienta"),
      recipe: t("Cocina los espaguetis según las indicaciones del paquete. Mientras tanto, en una sartén grande, calienta aceite de oliva y añade el ajo picado junto con la guindilla. Cocina a fuego medio hasta que el ajo esté dorado. Añade los espaguetis cocidos a la sartén, mezcla bien, agrega perejil picado y ajusta de sal y pimienta. Sirve caliente y disfruta."),
      img: dish5
    }, {
      name: t("Tacos de Pollo al Pastor"),
      ingredients: t("Pechuga de pollo, piña, achiote, ajo, cebolla, tortillas de maíz, cilantro, limón, sal y pimienta."),
      recipe: t("Marinar el pollo con achiote, ajo, cebolla, piña, sal y pimienta. Cocinar el pollo en una sartén hasta que esté dorado y cocido por completo. Cortar en tiras y servir en tortillas de maíz calientes. Añadir cilantro fresco y un poco de limón al gusto."),
      img: dish6
    }, {
      name: t("Ensalada Caprese"),
      ingredients: t("Tomates maduros, mozzarella fresca, albahaca, aceite de oliva, vinagre balsámico, sal y pimienta."),
      recipe: t("Corta los tomates y la mozzarella en rodajas. Alterna una rodaja de tomate, una de mozzarella y unas hojas de albahaca en un plato. Rocíalo con aceite de oliva y vinagre balsámico. Salpica con sal y pimienta al gusto."),
      img: dish7
    }, {
      name: t("Pollo Asado con Limón y Tomillo"),
      ingredients: t("Muslos de pollo (o pechugas), limón, tomillo fresco, aceite de oliva, ajo picado, sal, pimienta, papas (opcional)."),
      recipe: t("Precalienta el horno a 200°C. Coloca los muslos de pollo en una bandeja para hornear y rocíalos con el aceite de oliva. Exprime el jugo del limón sobre el pollo y coloca las rodajas de limón encima. Añade el tomillo y el ajo picado. Sazona con sal y pimienta. Si deseas, añade papas cortadas en trozos a la bandeja. Hornea durante 40-45 minutos hasta que el pollo esté dorado y cocido por completo. Sirve caliente con las papas."),
      img: dish8
    },{
      name: t("Sopa Fría de Gaspacho"),
      ingredients: t("Tomates maduros, pepino, pimiento verde, cebolla pequeña, diente de ajo, pan (opcional), vinagre de vino blanco, aceite de oliva, sal, pimienta, agua fría (opcional)."),
      recipe: t("Lava y trocea los tomates, pepino (pelado), pimiento, cebolla y ajo. Si deseas, remoja la rebanada de pan en agua. Coloca todos los ingredientes en una batidora y tritura hasta obtener una mezcla homogénea. Añade el vinagre, el aceite de oliva, sal y pimienta. Si la sopa está muy espesa, añade agua fría hasta obtener la consistencia deseada. Refrigera durante 1-2 horas y sirve bien fría. Puedes acompañar con trocitos de pan tostado."),
      img: dish9
    },{
      name: t("Ensalada Mediterránea de Quinoa"),
      ingredients: t("Quinoa, tomates cherry, pepino, cebolla roja, aceitunas negras, queso feta, albahaca fresca, aceite de oliva, vinagre de vino tinto, sal y pimienta."),
      recipe: t("Cocina la quinoa según las indicaciones del paquete. Deja enfriar. Mientras tanto, corta los tomates cherry en mitades, el pepino en cubos pequeños, y la cebolla roja en rodajas finas. Desmenuza el queso feta en trozos pequeños. En un bol grande, mezcla la quinoa cocida con los tomates, pepino, cebolla, aceitunas y queso feta. Añade hojas de albahaca fresca troceadas. En un tazón pequeño, mezcla el aceite de oliva, vinagre de vino tinto, sal y pimienta. Vierte la vinagreta sobre la ensalada, mezcla bien y sirve fresca."),
      img: dish12
    },{
      name: t("Pizza con Base de Coliflor"),
      ingredients: t("Coliflor, huevo, queso rallado (mozzarella o parmesano), ajo en polvo, orégano, sal, pimienta, salsa de tomate, ingredientes para topping (jamón, champiñones, pimientos, etc.)."),
      recipe: t("Precalienta el horno a 200°C. Ralla la coliflor y cocínala al vapor durante 5-7 minutos. Escurre bien para eliminar el exceso de agua. Mezcla la coliflor cocida con el huevo, queso rallado, ajo en polvo, orégano, sal y pimienta. Forma una base sobre una bandeja de horno forrada con papel de hornear. Hornea durante 20-25 minutos hasta que esté dorada. Añade salsa de tomate y tus toppings favoritos. Hornea por 5-10 minutos más hasta que el queso se derrita. Sirve caliente."),
      img: dish13
    }
  ]

  return (
    <>
      <Header />
      <div className="recipes">
        <h1>{t("Recetas")}</h1>
        <div className="recipes-list">
          {recipes.map((recipe, index) => (
            <Card
              key={index}
              name={recipe.name}
              ingredients={recipe.ingredients}
              recipe={recipe.recipe}
              img={recipe.img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Recipes