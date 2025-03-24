import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import { useTranslation } from "react-i18next";

import dish1 from "../../assets/dish1.png";
import dish2 from "../../assets/dish2.png";
import dish3 from "../../assets/dish3.png";

const Slider = () => {
  const { t } = useTranslation();
  const recipesSlider = [
    {
      img: dish1,
      tittle: t("Ensalada de Lentejas con Espinacas y Zanahorias"),
      description: t("Esta ensalada es una opción saludable y llena de proteínas. Las lentejas se mezclan con espinacas frescas, zanahorias ralladas y un aderezo ligero, ofreciendo un plato nutritivo, lleno de sabor y textura."),
    },
    {
      img: dish2,
      tittle: t("Ensalada de Patata"),
      description: t("Un plato clásico y reconfortante, la ensalada de patata combina papas cocidas con mayonesa, cebolla, huevo duro y un toque de mostaza, creando una mezcla cremosa y deliciosa. Ideal como acompañamiento o plato principal ligero."),
    },
    {
      img: dish3,
      tittle: t("Atún a la Plancha con Pesto de Aguacate y Verduritas"),
      description: t("Un plato ligero y sabroso, el atún a la plancha se sirve con un pesto cremoso de aguacate, acompañado de verduritas salteadas. Es una combinación perfecta de proteínas magras, grasas saludables y vegetales frescos."),
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 15000 }}
      pagination={{ clickable: true }}
      navigation
      className="carrusel-container"
    >
      {recipesSlider.map((recipesSlider, index) => (
        <SwiperSlide key={index} className="carrusel-slide">
          <div className="container-image">
            <img src={recipesSlider.img} alt={recipesSlider.tittle} />
          </div>
          <div className="container-info">
            <h2>{recipesSlider.tittle}</h2>
            <p>{recipesSlider.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider