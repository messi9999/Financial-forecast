import React, { useState, useEffect } from "react";
import ArticleSection from "./ArticleSection";
import loading from "../assets/loading.webp";

const News = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const itemsPerPage = 4;
  const pagesToShow = 5; // Number of page links to show at a time
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    init();
    console.log(apiUrl);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    if (endPage - startPage + 1 < pagesToShow) {
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentPage === i ? "font-bold" : ""
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    setCurrentData(news.slice(startIndex, startIndex + itemsPerPage));
  }, [news, currentPage]);

  const init = () => {
    fetch(apiUrl + "/news/all")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        // Assuming 'data' has a similar structure to 'jsondata'
        setTotalCount(data.newsData.pagination.count);
        setNews(data.newsData.data);
        setIsLoad(true);
      })
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  };

  return (
    <div>
      <div className="mb-2">
        <p className="mx-auto max-w-5xl pt-10 text-[#FFFFFF]/[.88] text-[25px]">
          Explore News Related USD to JPY.
        </p>
      </div>
      {isLoad ? (
        <div>
          {currentData.map((newItem, index) => (
            <ArticleSection key={index} data={newItem} />
          ))}
          <div className="mx-auto flex justify-center">
            <nav aria-label="Page navigation example" className="p-10">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <button
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {renderPageNumbers()}
                <li>
                  <button
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={
                      currentPage === Math.ceil(totalCount / itemsPerPage)
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div className="flex gap-10 justify-center pt-10">
          <div>
            <img src={loading} width={200} height={200} />
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
