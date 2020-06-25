import React from "react";
import PropTypes from "prop-types";

const OpeningList = ({ openings }) => {
  return openings.map((opening) => <div key={opening.id}>{opening.title}</div>);
};

OpeningList.propTypes = {
  openings: PropTypes.array.isRequired,
};

export default OpeningList;
