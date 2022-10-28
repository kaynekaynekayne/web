import React from "react";
import Nav from "./components/nav";
import AboutMe from "./pages/aboutMe";
import ContactMe from "./pages/contactMe";
import MyWork from "./pages/myWork";
import { GlobalStyle } from "./style/globalStyle";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutMe />}/> 
        <Route path="/work" element={<MyWork />}/> 
        <Route path="/contact" element={<ContactMe />}/> 
      </Routes>
    </div>
  );
}

export default App;
