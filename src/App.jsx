import { useState, useCallback, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        setCount(count + 50);
      }
    };
    window.addEventListener("scroll", onscroll);

    return () => window.addEventListener("scroll", onScroll);
  });

  const elements = [];

  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i + 1}</div>);
  }

  return (
    <>
      <main>{elements}</main>
    </>
  );
}

export default App;
