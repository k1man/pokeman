import logo from "../assets/logo.png";
import { css } from "@emotion/css";
import backgroundLogo from "../assets/backgroundLogo.png";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  return (
    <nav
      className="navbar"
      style={{ backgroundImage: `url(${backgroundLogo})` }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            history.push("/");
          }}
        >
          <img
            className={css`
              width: 120px;
              margin: 0 auto;
              @media (min-width: 600px) {
                width: 170px;
              }
            `}
            src={logo}
            alt="pokeman"
          />
        </a>
        <button className="btn btn-primary">PokeList</button>
      </div>
    </nav>
  );
}

export default Navbar;
