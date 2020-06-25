import React from "react";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";

import {
  getCategoryId,
  setCategoryId,
  searchOpenings,
} from "../openings/openings";

const OpeningForm = ({ categories }) => {
  const dispatch = useDispatch();
  const categoryId = useSelector(getCategoryId);

  return (
    <form
      className="mb-3"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(searchOpenings({ categoryId }));
      }}
    >
      <div className="select">
        <select
          value={categoryId}
          onChange={(e) => {
            e.preventDefault();
            dispatch(setCategoryId(e.target.value));
          }}
        >
          <option value="0">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="button is-primary ml-4">
        Filter
      </button>
    </form>
  );
};

OpeningForm.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default OpeningForm;
