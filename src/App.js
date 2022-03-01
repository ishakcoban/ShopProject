import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/Shop";
import { Home } from "./pages/Home";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  document.body.style = 'background: linear-gradient(22deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);height:100%';
  return (
    <div>
      <BrowserRouter>

        {<Navbar></Navbar>}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
