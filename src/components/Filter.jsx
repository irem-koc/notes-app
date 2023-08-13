import React, { useState } from 'react'

const Filter = () => {
    const [searchValue, setSearchValue] = useState("")
    console.log(searchValue);
  return (
    <div>
        <input className='filter-area' placeholder='Search...' type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
    </div>
  )
}

export default Filter