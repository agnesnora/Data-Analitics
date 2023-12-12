import { useState, useEffect } from "react";
import { HiArrowNarrowRight, HiMenu } from "react-icons/hi";

import Menu from "./Menu";
function App() {
  const [menuOn, setMenuOn] = useState(false);
  // const [windowWidth, setWindowWidth] = window.innerWidth;
  const Toggle = () => {
    setMenuOn((prevMenu) => !prevMenu);
    console.log(menuOn);
  };

  const handleResize = () => {
    window.innerWidth > 1000 ? setMenuOn(true) : setMenuOn(false);
  };

  // const marginTopStyle = {
  //   marginTop: menuOn ? "2.5rem" : "15rem",
  // };
  const backGroundStyle = {
    backgroundImage:
      window.innerWidth <= 1000
        ? 'url("/rectangle.png")'
        : ' url("/Rectangle1.png")',
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="container" style={backGroundStyle}>
        {window.innerWidth > 1000 ? <Menu /> : null}
        {window.innerWidth <= 1000 ? (
          <header className="header">
            <button className="menu--btn" onClick={Toggle}>
              <HiMenu className="header--icon" />
            </button>

            <h1 className="logo">Logo</h1>
          </header>
        ) : null}
        <div className="content--container">
          {menuOn && window.innerWidth <= 1000 ? (
            <Menu setMenuOn={setMenuOn} arrow={HiArrowNarrowRight} />
          ) : null}
          <div>
            {window.innerWidth > 1000 ? <h1 className="logo">Logo</h1> : null}
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
      </div>
    </>
  );
}

export default App;
