import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doGetBootcampRequest } from "../redux-saga/Action/BootcampAction";
import Pagination from "./komponen/Pagination";
import _ from "lodash";
import Link from "next/link";

function MainItems() {
  const dispatch = useDispatch();

  //call redux saga
  const listBootCamp = useSelector(
    (state) => state.bootcampStated.ListBootcamp
  );

  useEffect(() => {
    dispatch(doGetBootcampRequest());
    console.log(listBootCamp);
  }, []);

  //fitur search
  const [keyword, setKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewKeyword, setViewKeyword] = useState("");

  //const pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
  };
  //end pagination

  //fitur search
  const handleSearch = () => {
    setCurrentPage(1);
    setSearchTerm(keyword);
  };

  const filteredBootcamp = useMemo(() => {
    if (searchTerm.length > 0) {
      setViewKeyword(searchTerm);
      return listBootCamp.filter((bc) =>
        bc.progTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return listBootCamp;
  }, [searchTerm, listBootCamp]);

  //pagination
  const paginateBootCamp = paginate(filteredBootcamp, currentPage, pageSize);

  return (
    <div>
      <div className=" p-1 mb-2 flex justify-center gap-1 items-center mt-2 w-[90%] ml-[5%] ">
        <input
          className="p-1 border-1  w-fit-content px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          placeholder="Java, Nodejs, Golang, .Net"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="btn-primary " onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4  my-6 p-3 w-[90%] ml-[2%] px-[1px]  ">
        {paginateBootCamp && paginateBootCamp.length > 0 ? (
          paginateBootCamp.map((bc) => (
            <div
              key={bc.progTitle}
              className="ml-[15%]  border rounded-xl shadow-lg w-[300px] p-3 pb-11  relative"
            >
              <Link href={`/bootcamp/simpen/${bc.progTitle}`}>
                <div className="  h-[250px] w-auto  rounded-xl  border shadow-lg my-2 justify-items-center">
                  <img
                    className="mx-auto h-[80%] mt-[24px] "
                    src={
                      bc.progImage
                        ? bc.progImage
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVG8-k0zPmvHb-jQavBj9kY-jyKls8SdTTg&usqp=CAU"
                    }
                  ></img>
                </div>
                <h2 className="text-[20px] font-bold line-clamp-1">
                  {bc.progTitle}
                </h2>
                <ul className="text-[14px] ">
                  <li className="line-clamp-1">{bc.progHeadline}</li>
                  <li>Durasi: 3 Bulan</li>
                  <li>Pembelajaran: {bc.progLearningType}</li>
                </ul>
                <button class="btn-primary p-2 absolute bottom-4 right-4 rounded-full">
                  <p className="text-[10px]">Info Detail </p>
                </button>
              </Link>
            </div>

            // <div>
            //   <h1>{bc.progTitle}</h1>
            // </div>
          ))
        ) : (
          <div className=" col-span-3 font-medium text-[20px] ml-[180px]  flex place-content-center w-full">
            <p>Data Not Found</p>
          </div>
        )}
      </div>
      <div className="w-2/5 mx-auto">
        <Pagination
          items={filteredBootcamp.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default MainItems;
