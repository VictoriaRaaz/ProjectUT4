import "./Card.css";
import { useTranslation } from 'react-i18next';

function Card({ name, ingredients, recipe, img }) {
  const { t } = useTranslation();
  return (
    <div className="card">
      <div className="card-header">
        <h2>{name}</h2>
      </div>
      <div className="card-body">
        {img ? (
          <img src={img} alt={name} className="card-image" />
        ) : (
          <div className="card-placeholder-image">Sin imagen</div>
        )}
        <p className="ingredients">
          <strong>{t("Ingredientes: ")}</strong> {ingredients}
        </p>
        <p className="recipe">
          <strong>{t("Preparación: ")}</strong> {recipe}
        </p>
      </div>
    </div>
  );
}

export default Card