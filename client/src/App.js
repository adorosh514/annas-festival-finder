import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/bacon')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <header>
        <p>Hello World Testing!</p>
      </header>
    </div>
  );
}

export default App;
