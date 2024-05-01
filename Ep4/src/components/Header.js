import logo from "../../foodlogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [LoginText, setLoginText] = useState({
    lg: "Login",
    ps: "btn-outline-light",
  });
  // console.log(LoginText);
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} />
      </div>
      <div className="brand">
        <h1>Shubha Food</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="btn btn-outline-light" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="btn btn-outline-light" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="btn btn-outline-light" to="/contact">
              Contact us
            </Link>
          </li>
          <li>
            <Link className="btn btn-outline-light" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <button
              className={"btn " + LoginText.ps}
              onClick={() => {
                LoginText.lg == "Login"
                  ? setLoginText({
                      lg: "Logout",
                      ps: "btn-outline-danger",
                    })
                  : setLoginText({
                      lg: "Login",
                      ps: "btn-outline-light",
                    });
              }}
            >
              {LoginText.lg}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
