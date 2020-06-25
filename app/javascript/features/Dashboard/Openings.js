import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOpenings, searchOpenings } from "../openings/openings";

const Openings = () => {
  const dispatch = useDispatch();
  const openings = useSelector(getOpenings);

  useEffect(() => {
    dispatch(searchOpenings());
  }, []);

  return openings.map((opening) => <div>{opening.title}</div>);
};

export default Openings;
