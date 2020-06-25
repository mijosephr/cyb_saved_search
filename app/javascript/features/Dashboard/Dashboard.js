import React, { useState } from "react";
import Navigation from "./Navigation";
import Openings from "./Openings";
import SavedSearches from "./SavedSearches";

const Home = () => {
  const [tab, setTab] = useState("openings");

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Dashboard</h1>
        <Navigation tab={tab} setTab={setTab} />
        {tab === "openings" ? <Openings /> : <SavedSearches />}
      </div>
    </section>
  );
};

export default Home;
