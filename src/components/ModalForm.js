import React from "react";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/css";

function ModalForm({ name }) {
  const history = useHistory();
  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
      `}
    >
      <div
        className={css`
          background: white;
          border-radius: 5px;
          width: 300px;
          padding: 20px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        `}
      >
        <h2>Success Catch</h2>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push(`/details/${name}`);
          }}
        >
          Catch Again
        </button>
      </div>
    </div>
  );
}

export default ModalForm;
