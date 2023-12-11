import { useState, useEffect } from "react";
import { HiArrowNarrowRight, HiMenu } from "react-icons/hi";
import Menu from "./Menu";
function App() {
  const [menuOn, setMenuOn] = useState(false);
  // const [windowWidth, setWindowWidth] = window.innerWidth;
  const Toggle = () => {
    setMenuOn((prevMenu) => !prevMenu);
  };

  const handleResize = () => {
    window.innerWidth > 600 ? setMenuOn(true) : setMenuOn(false);
  };

  const marginTopStyle = {
    marginTop: menuOn ? "2.5rem" : "15rem",
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
      <div className="container">
        <header className="header">
          {window.innerWidth <= 600 ? (
            <button className="menu--btn" onClick={Toggle} disabled={false}>
              <HiMenu className="header--icon" />
            </button>
          ) : null}

          <h1 className="logo">Logo</h1>
        </header>
        {menuOn ? <Menu /> : null}
        <div>
          <h1 className="main--title" style={marginTopStyle}>
            Data Analytics
          </h1>
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
