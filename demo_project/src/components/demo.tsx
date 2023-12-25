/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'

const Demo: React.FC = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue((prevValue) => prevValue + 1);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [value])

  return (
    <>
      <div>Count : {value}</div>
      <p>Increased by one for every second</p>
    </>
  )
}

export default Demo;