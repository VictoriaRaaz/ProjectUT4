import { useEffect, useState, useRef } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./AddRecipes.css"
import addRecipesFirebase from '../../services/addRecipes/addRecipesFirebase';

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const refForm = useRef();

  const getAllRecipes = () => {
    addRecipesFirebase.getAllRecipes()
      .then((items) => {
        let allRecipes = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allRecipes.push({
            key: key,
            title: data.title,
            text: data.text
          });
        });
        setRecipes([...allRecipes]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeRecipe = (key) => {
    addRecipesFirebase.removeRecipe(key).then((res) => {
      getAllRecipes();
    });
  }

  const addRecipe = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const text = e.target.text.value;
    addRecipesFirebase.addRecipe(title, text).then((res) => {
      refForm.current.reset();
      setRecipes(oldValues => [...oldValues, { key: res.key, title, text }])
    })
  }

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <>
      <Header />
      <div className="title-add-recipes">
        <h1>Añade tus recetas</h1>
      </div>
      <div className="added-recipes">
        {recipes.map((recipe) => (
          <div className="list-recipes" key={recipe.key}> {/* Clase vacía se puede eliminar o modificar */}
            <h3>{recipe.title}</h3>
            <p>{recipe.text}</p>
            <button onClick={() => removeRecipe(recipe.key)}>Eliminar</button>
          </div>
        ))}
        <form ref={refForm} onSubmit={addRecipe}>
          <input type="text" name="title" placeholder="Título" required />
          <textarea name="text" placeholder="Escribe tu receta" required />
          <button type="submit">Agregar Receta</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Recipe;