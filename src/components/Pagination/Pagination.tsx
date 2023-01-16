import React from "react";

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: number;
};

const Pagination = ({
  count,
  currentPage,
  updateCurrentPage

}: PaginationProps) => {
  const Previous = <button disabled={currentPage ===1} onClick={()=> (currentPage-1)}>Previous</button>
  const Next = <button disabled={currentPage ===count} onClick={()=> (currentPage+1)}>Next</button>
  const pages = new Array(count).fill(0).map((a,i)=><button onClick={()=>(i+1)} style={{border:"blue"}}>{i+1}</button>)
  return (
    <div data-testid="pagination">
      {Previous}
      {pages}
      {Next}
    </div>
  );
};

export default Pagination;
