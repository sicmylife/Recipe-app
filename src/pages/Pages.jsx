import Main from "../components/Main";
import { Route, Routes,BrowserRouter,Link } from "react-router-dom";
import Recipe from "./Recipe";
import Header from '../components/Header'


const Pages = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
