import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage";
import SignUpPage from "../components/pages/SignUpPage";
import ForgotPasswordPage from "../components/pages/ForgotPasswordPage";
import WelcomePage from "../components/pages/WelcomePage";
import ContactUsPage from "../components/pages/ContactUsPage";

// PRODUCT
import AllProductPage from "../components/pages/AllProductPage";
import DeckPage from "../components/pages/DeckPage";
import TruckPage from "../components/pages/TruckPage";
import WheelPage from "../components/pages/WheelPage";
import BearingPage from "../components/pages/BearingPage";
import GipTapPage from "../components/pages/GipTapePage";
import HardwarePage from "../components/pages/HardwarePage";
import ProductDetailPage from "../components/pages/ProductDetailPage";
import EditProfilePage from "../components/pages/user/EditProfilePage";
import AddProductPage from "../components/pages/admin/AddProductPage";
import CartPage from "../components/pages/CartPage";
import AddAddressPage from "../components/pages/user/AddAddressPage";
// PROFILE

// CART

// -------- ADMIN --------

// PRODUCT

// ORDER

// CUSTOMER

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="*" element={<WelcomePage />} />
      <Route path="/allproduct" element={<AllProductPage />}></Route>
      <Route path="/deck" element={<DeckPage />} />
      <Route path="/truck" element={<TruckPage />} />
      <Route path="/wheel" element={<WheelPage />} />
      <Route path="/bearing" element={<BearingPage />} />
      <Route path="/giptape" element={<GipTapPage />} />
      <Route path="/hardware" element={<HardwarePage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/productdetail" element={<ProductDetailPage />} />
      <Route path="/addaddress" element={<AddAddressPage />} />
      <Route path="/editprofile" element={<EditProfilePage />} />
      <Route path="/addproduct" element={<AddProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default Router;
