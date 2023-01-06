import React, { useState, useEffect } from 'react';
import { getTodosAPI } from '../../api/todos';

export function Test() {
  const [count, setCount] = useState(0)
 
 useEffect(()=> {
})
const fetchData = async () => {
    const data = getTodosAPI
}
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(`${count}` + " vinh")}>
        Click me
      </button>
    </div>
  );
}