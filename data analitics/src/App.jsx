import { useState } from "react";

function App() {
  return (
    <>
      <div>
        <p>Menu</p> <h1 className="logo">Logo</h1>
      </div>
      <div>
        <main className="main--container">
          <h1 className="main--title">Data Analytics</h1>
          <h2>Making sense of your traffic</h2>
          <button className="go--btn">Go to my stats</button>
        </main>
      </div>
    </>
  );
}

export default App;
