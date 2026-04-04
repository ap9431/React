
import './App.css'
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(15);

  const inc = () => {
    setCounter(counter + 1);
     setCounter(counter + 1);
      setCounter(counter + 1);
       setCounter(counter + 1);
        setCounter(counter + 1);

    setCounter((prevCounter) => prevCounter + 1);
     setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
       setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounter) => prevCounter + 1);

        // Direct values (setCounter(counter + 1)) use the closure value captured when the function was created
        // Callbacks (setCounter(prev => prev + 1)) get the actual current state at processing time
    
    
        console.log(counter);
  }

  const dec = () => {
    setCounter(counter - 1);
  }

  return (
    <>
     <h1>Chai or React</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={inc}>Increment - {counter}</button>
     <br />
     <button onClick={dec}>Decrement - {counter}</button>
     <br />
     <h1>{counter}</h1>
    </>
  )
}

export default App
