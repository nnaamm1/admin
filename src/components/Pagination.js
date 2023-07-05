import ReactPaginate from 'react-paginate'

const TOTAL_PAGE = 10

const Pagination = ({ page, setPage, totalItems }) => {
  const handlePageClick = (event) => {
    setPage(event.selected + 1)
  }

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='next >'
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={totalItems !== null ? Math.ceil(totalItems / 10) : TOTAL_PAGE}
      previousLabel='< prev'
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
