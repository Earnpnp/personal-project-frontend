import { Route, Routes } from "react-router-dom";
import WelcomePage from "../components/pages/WelcomePage";

import { useAuth } from "../context/AuthContext";

// PRODUCT
import AllProductPage from "../components/pages/AllProductPage";

import EditProfilePage from "../components/pages/user/EditProfilePage";
import AddProductPage from "../components/pages/admin/AddProductPage";
import CartPage from "../components/pages/CartPage";
import PaymentPage from "../components/pages/PaymentPage";
import SuccessPage from "../components/pages/SuccessPage";

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="" element={<WelcomePage />} />
      <Route path="/allproduct" element={<AllProductPage />} />

      <Route path="/editprofile" element={<EditProfilePage />} />
      {user?.role === "Admin" ? (
        <Route path="/addproduct" element={<AddProductPage />} />
      ) : (
        <Route path="/allproduct" element={<AllProductPage />} />
      )}

      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment/:orderId" element={<PaymentPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default Router;
