import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCategories, fetchCategories } from "../categories/categories";
import { getOpenings, searchOpenings } from "../openings/openings";
import OpeningForm from "./OpeningForm";
import OpeningList from "./OpeningList";

const Openings = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const openings = useSelector(getOpenings);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(searchOpenings({ categoryId: 0 }));
  }, []);

  return (
    <>
      <OpeningForm categories={categories} />
      <OpeningList openings={openings} />
    </>
  );
};

export default Openings;
