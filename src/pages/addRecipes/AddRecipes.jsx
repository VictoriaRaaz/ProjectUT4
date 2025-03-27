import { useEffect, useState, useRef } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./AddRecipes.css"
import addRecipesFirebase from '../../services/addRecipes/addRecipesFirebase';

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null); // Guarda la receta que se está editando
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

  const addOrUpdateRecipe = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const text = e.target.text.value;

    if (editingRecipe) {
      // Si estamos editando, actualizamos la receta
      addRecipesFirebase.updateRecipe(editingRecipe.key, title, text).then(() => {
        getAllRecipes();
        setEditingRecipe(null); // Salimos del modo edición
        refForm.current.reset();
      });
    } else {
      // Si no hay edición, añadimos una nueva receta
      addRecipesFirebase.addRecipe(title, text).then((res) => {
        refForm.current.reset();
        setRecipes(oldValues => [...oldValues, { key: res.key, title, text }]);
      });
    }
  };

  const startEditing = (recipe) => {
    setEditingRecipe(recipe);
    refForm.current.title.value = recipe.title;
    refForm.current.text.value = recipe.text;
  };


  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <>
      <Header />
      <div className="share-recipes">
        <div className="title-add-recipes">
          <h1>{editingRecipe ? "Editar Receta" : "Añade tus recetas"}</h1>
        </div>
        <div className="added-recipes">
          {recipes.map((recipe) => (
            <div className="list-recipes" key={recipe.key}>
              <h3>{recipe.title}</h3>
              <p>{recipe.text}</p>
              <button onClick={() => startEditing(recipe)}>Editar</button>
              <button onClick={() => removeRecipe(recipe.key)} className="delete-button">Eliminar</button>
            </div>
          ))}
          <form ref={refForm} onSubmit={addOrUpdateRecipe}>
            <input type="text" name="title" placeholder="Título" required />
            <textarea name="text" placeholder="Escribe tu receta" required />
            <button type="submit">{editingRecipe ? "Actualizar Receta" : "Agregar Receta"}</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Recipe;