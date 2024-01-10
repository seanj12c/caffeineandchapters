import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";

function AppRoutes() {
  const location = useLocation();

  const navbarHiddenRoutes = ["/", "/signup"];

  const isNavbarHidden = navbarHiddenRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!isNavbarHidden && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
