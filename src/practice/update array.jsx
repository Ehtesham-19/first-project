import React, { useState } from 'react'

const Update = () => {
    const [data, setData] = useState([
        "ehtesham","sufyan","zain","talib"
    ])
    const handleuser = (name) => {
        data[data.length - 1] = name; // chnage last name in array
        setData([...data])
    }

  return (
    <div>
          <h2>update array in state</h2>
          <input type="text" placeholder='update name in array' onChange={(e)=>handleuser(e.target.value)}/>{
              data.map((item, index) => (
                  <h3 key={index}>{ item}</h3>
              ))
          }
    </div>
  )
}

export default Update;
