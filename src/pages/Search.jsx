import React, { useState } from 'react'
import Content from '../Components/UI/Content'
import useApi from "@/hook/useApi.jsx";
import { useEffect } from 'react';
function Search() {
  const [search, setsearch] = useState('')
  const {getData, data} = useApi()
  useEffect(()=>{
    const getResponse = setTimeout(() => {
      if(search != ''){
        getData(`search/multi?query=${search}`)
      }
    }, 2000);
    return ()=> clearTimeout(getResponse)
  },[search])
  return (
    <div className='search container'>
      <input type="text" className="search__inp" onChange={(e)=>setsearch(e.target.value)} value={search}/>
      {
        search && <Content data={data}/>
      }
    
    </div>
  )
}

export default Search