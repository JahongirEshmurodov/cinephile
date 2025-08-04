import React, { useEffect } from 'react'
import usePopular from '../store/popularStore'
import useApi from '../hook/useApi'
import Content from '../Components/UI/Content'
import ReactPaginate from 'react-paginate'

function Tv() {
  const { tv,getPopular } = usePopular()
  const { getData, data,setpage,page } = useApi()
  useEffect(() => {
    if (tv.length === 0 || page >= 1) {
      getData('tv/popular')
    }
  },[page])
  useEffect(() => {
    if (tv.length === 0 || page >= 1) {
      getPopular(data,'tv')
    }
  },[data])
  function changePage({selected}) {
    setpage(selected + 1)
  }
  return (
    <div>
      <Content data={tv} type='tv'/>
      <ReactPaginate className='paginate' breakLabel="..." nextLabel="Next" onPageChange={changePage} pageCount={500} previousLabel="Prev" />
    </div>
  )
}

export default Tv