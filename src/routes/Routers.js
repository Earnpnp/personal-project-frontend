import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage";
import SignUpPage from "../components/pages/SignUpPage";
import ForgotPasswordPage from "../components/pages/ForgotPasswordPage";
import WelcomePage from "../components/pages/WelcomePage";
import ContactUsPage from "../components/pages/ContactUsPage";
import { useAuth } from "../context/AuthContext";

// PRODUCT
import AllProductPage from "../components/pages/AllProductPage";

import ProductDetailPage from "../components/pages/ProductDetailPage";
import EditProfilePage from "../components/pages/user/EditProfilePage";
import AddProductPage from "../components/pages/admin/AddProductPage";
import CartPage from "../components/pages/CartPage";
import PaymentPage from "../components/pages/PaymentPage";
import SuccessPage from "../components/pages/SuccessPage";

// PROFILE

// CART

// -------- ADMIN --------

// PRODUCT

// const name = "value"
// const {value} = name

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="*" element={<WelcomePage />} />
      <Route path="/allproduct" element={<AllProductPage />} />

      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/productdetail" element={<ProductDetailPage />} />
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
