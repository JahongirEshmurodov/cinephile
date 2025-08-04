import React, { useEffect } from 'react'
import Content from '../Components/UI/Content'
import usePopular from '../store/popularStore'
import useApi from '../hook/useApi'
import ReactPaginate from 'react-paginate'

function Movie() {
  const { movie,getPopular } = usePopular()
  const { getData, data, setpage,page } = useApi()
  useEffect(() => {
    if (movie.length === 0 || page >= 1) {
      getData('movie/popular')
    }
  },[page])
  useEffect(() => {
    if (movie.length === 0 || page >= 1) {
      getPopular(data,'movie')
    }
  },[data])
  function changePage({selected}) {
    setpage(selected + 1)
  }
  return (
    <div>
      <Content data={movie} type='movie' />
      <ReactPaginate className='paginate' breakLabel="..." nextLabel="Next" onPageChange={changePage} pageCount={500} previousLabel="Prev" />
      
    </div>
  )
}

export default Movie