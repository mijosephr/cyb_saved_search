import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { logoutUser } from "../user/user";

const Navigation = ({ tab, setTab }) => {
  const dispatch = useDispatch();

  return (
    <div className="tabs is-boxed">
      <ul>
        <li
          className={`${tab === "openings" ? "is-active" : ""}`}
          onClick={(e) => setTab("openings")}
        >
          <a>Openings</a>
        </li>
        <li
          className={`${tab === "savedSearches" ? "is-active" : ""}`}
          onClick={(e) => setTab("savedSearches")}
        >
          <a>Saved Searches</a>
        </li>
        <li onClick={(e) => dispatch(logoutUser())}>
          <a>Log out</a>
        </li>
      </ul>
    </div>
  );
};

Navigation.defaultProps = {
  tab: "openings",
};

Navigation.propTypes = {
  tab: PropTypes.string,
  setTab: PropTypes.func.isRequired,
};

export default Navigation;
