import { useState } from "react";
import { HiArrowNarrowRight, HiMenu } from "react-icons/hi";
function App() {
  const Toggle = () => {
    console.log("cili");
  };
  return (
    <>
      <div className="container">
        <header className="header">
          <button className="menu--btn" onClick={Toggle}>
            <HiMenu className="header--icon" />
          </button>

          <h1 className="logo">Logo</h1>
        </header>
        <div>
          <h1 className="main--title">Data Analytics</h1>
          <h2>
            Making sense of <br />
            your traffic
          </h2>

          <button className="go--btn">
            {" "}
            <HiArrowNarrowRight className="icon" /> Go to my stats
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
