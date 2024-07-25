import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/Users";
import SingleUser from "./pages/SingleUser";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleUser />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<SingleUser />} />
      </Routes>
    </>
  );
}

export default App;
