import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ tab, setTab }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        <li
          className={`${tab === "signup" ? "is-active" : ""}`}
          onClick={(e) => setTab("signup")}
        >
          <a>Sign up</a>
        </li>
        <li
          className={`${tab === "login" ? "is-active" : ""}`}
          onClick={(e) => setTab("login")}
        >
          <a>Log in</a>
        </li>
      </ul>
    </div>
  );
};

Navigation.defaultProps = {
  tab: "signup",
};

Navigation.propTypes = {
  tab: PropTypes.string,
  setTab: PropTypes.func.isRequired,
};

export default Navigation;
