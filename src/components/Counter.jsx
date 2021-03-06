import React, { useState } from "react"


export const Counter = () => {
  const [count, setCount] = useState(0);

  const onCountUp = () => {
    setCount( count + 1);
  }

  const onCountDown = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter: { count } </h1>
      <button
        className="ui primary button"
        onClick={ onCountUp }
      >Increment</button>
      <button
        className="ui red button"
        onClick={ onCountDown }
      >Decrement</button>
    </>
  )
}
