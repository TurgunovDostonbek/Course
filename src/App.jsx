import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import HtmlSection from './Components/Main/Course/HtmlSection/HtmlSection';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
