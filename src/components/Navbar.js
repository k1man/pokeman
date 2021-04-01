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
        <button
          className={css`
            background-color: Transparent;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            overflow: hidden;
            outline: none;
          `}
          onClick={(e) => {
            e.preventDefault();
            history.push("/");
          }}
        >
          <img
            className={css`
              width: 120px;
              @media (min-width: 600px) {
                width: 170px;
              }
            `}
            src={logo}
            alt="pokeman"
          />
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            history.push("/pokedex");
          }}
        >
          PokeDex
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
