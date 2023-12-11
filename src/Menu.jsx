export default function Menu() {
  return (
    <ul className="menu--container">
      {window.innerWidth > 750 ? (
        <li style={{ backgroundColor: "#2485FF" }}>menu</li>
      ) : null}
      <li>my stats</li>
      <li>members</li>
      <li>settings</li>
      <li>help</li>
    </ul>
  );
}
