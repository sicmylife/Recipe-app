import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Pages from './pages/Pages'
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
