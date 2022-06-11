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
    </Routes>
  );
}

export default Router;
