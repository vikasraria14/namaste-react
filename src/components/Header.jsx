import { Link } from "react-router";
import { Logo } from "../constants";
// import { useContext } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Title = () => {
  return (
    <a href="/">
      <img alt="logo" src={Logo} className="h-20" />
    </a>
  );
};

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between p-2 bg-red-200 shadow-lg mb-4">
      <Title />

      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-2 font-bold">{user}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
