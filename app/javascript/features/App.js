import React from "react";
import { useSelector } from "react-redux";

import Home from "../features/Home/Home";
import Dashboard from "../features/Dashboard/Dashboard";
import { getUser } from "../features/user/user";

const App = () => {
  const user = useSelector(getUser);

  if (user.id) {
    return <Dashboard />;
  }

  return <Home />;
};

export default App;
