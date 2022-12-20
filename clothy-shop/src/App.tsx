import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Error />} path="*" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Login />} path="/login" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Details />} path="/article/:id" />
        <Route element={<Category />} path="/category/:catName" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
