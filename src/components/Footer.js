import { css } from "@emotion/css";

function Footer() {
  return (
    <div
      className={css`
        width: 100%;
        left: 0;
        bottom: 0;
        padding: 15px;
        background-color: #10ac84;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      `}
    >
      <div>
        <p>
          Code By <b> Rizky Rahman</b>
        </p>
      </div>
      <div>
        <a
          className={css`
            text-decoration: none;
            color: black;
          `}
          href="https://github.com/k1man/pokeman"
        >
          <b>GitHub</b>
        </a>
      </div>
    </div>
  );
}

export default Footer;
