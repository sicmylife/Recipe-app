import Main from "../components/Main";
import { Route, Routes} from "react-router-dom";
import Recipe from "./Recipe";

const Pages = () => {
  return (

<Routes>
  <Route path="/" element={<Main />} />
  <Route path="/recipe/:name" element={<Recipe />} />
</Routes>

  );
};

export default Pages;
