import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Desserts from "./pages/desserts/Desserts";
import Recipes from "./pages/recipes/Recipes";
import GlutenFree from "./pages/gluten-free/GlutenFree";
import AddRecipes from "./pages/add-recipes/AddRecipes";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import '../src/components/i18n/i18n'; 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add-recipes" element={<AddRecipes/>}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
        <Route path="/gluten-free" element={<GlutenFree/>}></Route>
        <Route path="/desserts" element={<Desserts/>}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
