import { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Video from './components/Video';

function App() {
  //const link = "https://www.youtube.com/watch?v=QBmlIdXpGeU&list=WL&index=94";

  const [link, setLink] = useState("");
  const [minutes, setMinutes] = useState(5);

  const handleInput = e => {
    const target = e.target
    setLink(target.value)
  }

  const handleClick = e => {
    e.target.select()
  }

  const handleNumInput = e => {
    const target = e.target;

    let value = target.value;
    if (value === "") {
      value = 0;
    }

    setMinutes(value);
  }

  const handleNumClick = e => {
    e.target.select()
  }

  const timerDone = () => {
    console.log("timer done");
  }

  return (
    <div className="App">
      <Timer initialMinute={minutes} initialSeconds={minutes} callback={timerDone}/>
      <Video link={link} start={100}></Video>
      <input className="" type="text" onClick={handleClick} onChange={handleInput}></input>
      <input className="" type="number" onClick={handleNumClick} onChange={handleNumInput}></input>
    </div>
  );
}

export default App;
