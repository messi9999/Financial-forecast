import React, { useState } from "react";

const ArticleSection = ({data}) => {
  return (
    <article className="p-6 mx-auto  border-b w-[70%] border-gray-600 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
        {data.title}
      </h2>
      <div className="flex gap-6 items-center ">
      <h1 className="mb-2 text-xl  tracking-tight text-white dark:text-white">
       <span className="text-[#c23c3c] text-lg">From:</span> {data.source}
      </h1>
      <div className="flex items-center gap-2 overflow-hidden">
      {
        data.tags &&    // Checks if data.tags is truthy (i.e., not null or undefined)
        data.tags.slice(0,9).map((item, index) => ( // Maps over each item in data.tags array
          <span className ="rounded-2xl px-2 bg-[#c23c3c] text-white" key={index}>{item.slice(0,10)}</span> // Renders each item as a <span> element with a unique key
        ))
      }
      </div>
      </div>
      <p className="mb-5 font-light  text-white/[0.8] dark:text-gray-400">
        {data.description}
      </p>
      <div className="flex justify-end items-center">

        <a
        target="_blank" rel="noopener noreferrer"
          href={data.url}
          className="inline-flex items-center text-white font-medium text-primary-600 dark:text-primary-500 hover:underline"
          // onClick={()=>setShowModal(true)}
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      {/* {showModal &&
  <div
    id="default-modal"
    tabIndex="-1"
    aria-hidden="true"
    className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 transition-opacity duration-300"
  >
    <div className="relative rounded-lg shadowbg-gray-700 bg-slate-800 max-w-4xl w-full">
      <div className="flex items-center justify-between p-8 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="default-modal"
          onClick={() => setShowModal(false)}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="p-4 md:p-5 space-y-4 text-white/[0.6]">
        {content}
        
      </div>
    </div>
  
  </div>
} */}

    </article>
  );
};

export default ArticleSection;
