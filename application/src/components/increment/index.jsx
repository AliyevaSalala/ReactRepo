import React from 'react'

const Increment = (props) => {
    
  return <>
        <button onClick={() => props.setCount((count) => count + 1)}>Increment</button>
    </>
  
}

export default Increment