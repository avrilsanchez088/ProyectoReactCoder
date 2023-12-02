import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Category from "../pages/Category"
import { ItemDetailContainer } from "../pages";

const MainRoutes = () => {
  return (
    <BrowserRouter> 
      <NavBarComponent/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:categoryId" element={<Category/>}/>
        <Route path="/product/:productId" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
