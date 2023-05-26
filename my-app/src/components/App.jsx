import { Route, Routes } from "react-router-dom";
import { Shop } from "../pages/Shop";
import { ShoppingCart } from "../pages/ShoppingCart";
import { SharedLayout } from "./SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="shop" element={<Shop />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
};
