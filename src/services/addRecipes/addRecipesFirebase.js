import db from "../firebase-recipes";
import { ref, get, remove, push } from "firebase/database";

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

export default {
  getAllRecipes,
  addRecipe,
  removeRecipe,
};