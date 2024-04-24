import logo from "../../foodlogo.png";
import { useState } from "react";

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
            <a className="btn btn-outline-light" href="#" role="button">
              Home
            </a>
          </li>
          <li>
            <a className="btn btn-outline-light" href="#" role="button">
              About
            </a>
          </li>
          <li>
            <a className="btn btn-outline-light" href="#" role="button">
              Contact Us
            </a>
          </li>
          <li>
            <a className="btn btn-outline-light" href="#" role="button">
              Cart
            </a>
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
