import { useState } from "react";
import { HiArrowNarrowRight, HiMenu } from "react-icons/hi";
import Menu from "./Menu";
function App() {
  const [menuOn, setMenuOn] = useState(false);
  const Toggle = () => {
    setMenuOn((prevMenu) => !prevMenu);
  };
  const marginTopStyle = {
    marginTop: menuOn ? "2.5rem" : "15rem",
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
