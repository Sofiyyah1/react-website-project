import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/home.js";
import Who_We_Are from "./component/pages/who-we-are/who-we-are.js";
import Our_clients from "./component/pages/our-client/our-client.js";
import Contact from "./component/pages/contact/contact.js";
import Carrers from "./component/pages/carrers/carrers.js";
import Nav from "./component/nav/navbar.js";
import Footer from "./component/footer/footer.js";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="who-we-are" element={<Who_We_Are />}></Route>
        <Route path="our-clients" element={<Our_clients />}></Route>
        <Route path="carrers" element={<Carrers />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
