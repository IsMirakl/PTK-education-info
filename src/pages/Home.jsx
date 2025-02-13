import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Login from "../components/Auth";
import Register from "../components/Register";

import "../styles/home.css";

function Home() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/login">Авторизация</Link>
            </li>
            <li>
              <Link to="/register">Регистрация</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Добро пожаловать на сайт</h1>
      </main>

      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default Home;
