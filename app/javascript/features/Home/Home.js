import React, { useState } from "react";
import Navigation from "./Navigation";
import Signup from "./Signup";
import Login from "./Login";

const Home = () => {
  const [tab, setTab] = useState("signup");

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Home</h1>
        <Navigation tab={tab} setTab={setTab} />
        {tab === "signup" ? <Signup /> : <Login />}
      </div>
    </section>
  );
};

export default Home;
