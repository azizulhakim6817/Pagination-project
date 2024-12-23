import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../assets/css/pagintion.css";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const itemPerPage = 5;

  //Data featching ...............................
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_pag"
      );
      const data = await res.json();
      setPosts(data);
      setpageCount(Math.ceil(data.length / itemPerPage));
      setCurrentPageData(data.slice(0, itemPerPage));
    };

    fetchPosts();
  }, []);

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    const offset = selectedPage * itemPerPage;
    const newPageData = posts.slice(offset, offset + itemPerPage);
    setCurrentPageData(newPageData);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center  fw-info ">Pagination Post</h2>

      <table className="table table-striped table-bordered my-3 shadow">
        <thead className="table table-dark text-center">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {currentPageData.map((post, index) => {
            return (
              <tr key={index}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* pagination............................ */}
      <div className=" d-flex justify-content-center my-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next >"}
          breakLabel={".."}
          onPageChange={handlePageClick}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName={"pagination justify-content-center"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          disabledClassName={"disabled"}
        />
      </div>
    </div>
  );
};

export default Pagination;
