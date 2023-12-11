export default function Menu() {
  return (
    <ul className="menu--container">
      {window.innerWidth > 600 ? <li>menu</li> : null}
      <li>my stats</li>
      <li>members</li>
      <li>settings</li>
      <li>help</li>
    </ul>
  );
}
