import { useState } from "react";
import "./App.css";
import { LargeCards } from "./components/LargeCards";
import { SmallCards } from "./components/SmallCards";
import { ToggleTheme } from "./components/ToggleTheme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="flex justify-between m-[3rem_5rem]">
        <div>
          <h1>Social Media Dashboard</h1>
          <h3>Total Followers: XXXXXX</h3>
        </div>
        <div className="flex gap-x-4">
          <p>Mode</p>
          <ToggleTheme />
        </div>
      </header>

      <section className="flex justify-between m-[3rem_5rem]">
        <LargeCards />
        <LargeCards />
        <LargeCards />
        <LargeCards />
      </section>

      <header className="m-[3rem_5rem]">
        <h2>Overview - Today</h2>
      </header>

      <section className="flex justify-between m-[3rem_5rem]">
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
      </section>
    </>
  );
}

export default App;
