// Este es el componente más alto en mi aplicación, aquí se
// definen las rutas

import { Navigate, Route, Routes,Link } from "react-router-dom";
import { HomePage, AboutPage, LoginPage } from "./Pages";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};
