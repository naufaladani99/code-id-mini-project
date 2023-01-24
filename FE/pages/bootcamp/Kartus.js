import react, { useEffect, useState } from "react";
import { Rating } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { doGetReviewRequest } from "../redux-saga/Action/BootcampAction";
import _ from "lodash";
import Pagination from "./komponen/paginationbot";

function Kartus() {
  const dispatch = useDispatch();
  const Listreview = useSelector((state) => state.bootcampStated.listReview);

  useEffect(() => {
    dispatch(doGetReviewRequest());
    console.log(Listreview);
  }, []);

  const reviews = Listreview.map((review) => review);

  //const pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const handlePageChange = (page) => {
    setCurrentPage(1);
    setCurrentPage(page);
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
  };
  console.log(reviews);

  const paginateReview = paginate(reviews, currentPage, pageSize);

  return (
    <div className="flex relative space-x-7 mx-[-50px]  ">
      <div className=" absolute right-[405px] my-[-140px] text-gray-400  underline underline-offset-3 shadow-sm text-[33px] font-arial font-bold ">
        <h1>Testimonial</h1>
      </div>
      {paginateReview &&
        paginateReview.map((cr) => (
          <div
            key={cr.coreProgId}
            className="grid grid-rows-2 gap-2  h-[340px]  p-3 mb-[100px]  bg-white shadow my-[-80px] place-content-center rounded-md"
          >
            <div className="flex flex-col items-center w-[200px] shadow-md rounded-sm ">
              <img
                className="h-48 w-48  "
                src={
                  cr.coreEntity.userPhoto
                    ? cr.coreEntity.userPhoto
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PQMrbU3VcARQ0motrgKR7ykR8j0j8tGUPg&usqp=CAU"
                }
              />
              <div className="mt-3 font-semibold text-center	">
                <span>{cr.coreEntity.userName}</span>
              </div>
              <div>
                <span className="line-clamp-2 text-sm ">{cr.coreReview}</span>
              </div>
            </div>

            <div className="flex mt-[130px]  ">
              <Rating className="">
                {Array(5)
                  .fill(cr.coreRating)
                  .map((el, i) => {
                    return (
                      <Rating.Star key={i} filled={el - i > 0 ? true : false} />
                    );
                  })}
              </Rating>
            </div>
            {/* pagination */}
          </div>
        ))}
      <div className="absolute bottom-[20px] right-[375px] w-5/5  mt-[320px]     ">
        <Pagination
          items={Listreview.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Kartus;
