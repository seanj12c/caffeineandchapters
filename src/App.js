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
import Menu from "./components/Menu";
import Books from "./components/Books";
import Cart from "./components/Cart";
import Account from "./components/Account";

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
        <Route path="/menu" element={<Menu />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
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
