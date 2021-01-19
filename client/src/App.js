import { useState } from 'react';
import './App.css';
import Video from './components/Video';

function App() {
  //const link = "https://www.youtube.com/watch?v=QBmlIdXpGeU&list=WL&index=94";

  const [link, setLink] = useState("");

  const handleInput = e => {
    const target = e.target

    setLink(target.value)
  }

  const handleClick = e => {
    e.target.select()
  }

  return (
    <div className="App">
      <Video link={link} start={1}></Video>
      <input className="" type="text" onClick={handleClick} onChange={handleInput}></input>
    </div>
  );
}

export default App;
