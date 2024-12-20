import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Smartphone from "./component/Smartphone";
import Accessories from "./component/Accessories"
import Footer from "./component/footer";

const rootDiv = document.getElementById("root");

ReactDom.createRoot(rootDiv).render(
    <StrictMode>
      <Navbar />
      <Slider />
      <Smartphone />
      <Accessories />
      <Footer />
    </StrictMode>
);

