import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Auth";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Регистрация</Link>
            </li>
            <li>
              <Link to="/login">Авторизация</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Добро пожаловать</h2>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
