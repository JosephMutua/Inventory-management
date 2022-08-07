import React, { useState } from 'react'

function Hooks() {
    const initalState = 0;
    const [count,setCount] = useState(initalState);
  return (
    <div>
        <h1>count : {count}</h1>
        <button onClick={() => setCount (initalState) }>Reset</button>
        <button onClick={()=> setCount (prevCount => prevCount + 1) }>Increament</button>
        <button onClick={()=> setCount (prevCount => prevCount - 1)}>Decreament</button>
    </div>
  )
}

export default Hooks
