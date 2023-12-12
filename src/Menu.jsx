import { HiArrowNarrowLeft } from "react-icons/hi";

export default function Menu({ setMenuOn }) {
  const goBack = () => {
    setMenuOn(false);
  };
  return (
    <ul className="menu--container">
      {window.innerWidth <= 1000 ? (
        <button onClick={goBack} className="back--btn">
          <HiArrowNarrowLeft />
        </button>
      ) : null}

      <li style={{ backgroundColor: "#2485FF" }}>menu</li>

      <li>my stats</li>
      <li>members</li>
      <li>settings</li>
      <li>help</li>
    </ul>
  );
}
