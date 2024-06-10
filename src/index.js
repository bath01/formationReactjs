import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Survey from "./pages/Survey";
import Header from "./components/Header";
// import ClientForm from "./components/CleintForm";
// import FreelanceForm from "./components/FreelanceForm";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import { ThemeProvider } from "./utils/context";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
