import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Loginpage from "./pages/Loginpage/Loginpage";
import Registerpage from "./pages/Registerpage/Registerpage";
import Userpage from "./pages/Userpage/Userpage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/userpage" element={<Userpage />} />
        <Route path="*" element={<Navigate to={"/homepage"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
