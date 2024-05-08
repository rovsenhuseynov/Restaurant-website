import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Layout from "./Components/layout/Layout";
import Contacts from "./pages/contacts/Contacts";
import Menu from "./pages/menu/Menu";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />     
        </Route>
      </Routes>
    </div>
  );
};

export default App;
