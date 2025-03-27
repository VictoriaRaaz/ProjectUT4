import db from "../firebase-recipes";
import { ref, get, remove, push, set } from "firebase/database";

const dbRef = ref(db, "/add-recipes");

const getAllRecipes = () => {
  return get(dbRef);
};

const addRecipe = (title, text) => {
  return push(dbRef, {
    title: title,
    text: text
  });
};

const removeRecipe = (key) => {
  const dbRefRecipe = ref(db, `/add-recipes/${key}`);
  return remove(dbRefRecipe);
};

const updateRecipe = (key, title, text) => {
  const dbRefRecipe = ref(db, `/add-recipes/${key}`);
  return set(dbRefRecipe, { title, text }); // Sobreescribe la receta
};

export default {
  getAllRecipes,
  addRecipe,
  removeRecipe,
  updateRecipe,
};