import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main.js"
import AsideNews from "./Components/Asidenews";
import './App.css'
import Layout from './layout/main-layout'
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Main />
        <AsideNews />
        <Footer />
      </Layout>
    </>

  );
}

export default App;
