import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { doGetReviewRequest } from "../../redux-saga/Action/BootcampAction";
import { doGetBootcampRequest } from "../../redux-saga/Action/BootcampAction";
import { useEffect, useState } from "react";
import { Rating } from "flowbite-react";

export default function TesLink() {
  const tes = useRouter();
  const { id } = tes.query;

  const dispatch = useDispatch();
  const Listreview = useSelector((state) => state.bootcampStated.listReview);
  const listBootCamp = useSelector(
    (state) => state.bootcampStated.ListBootcamp
  );

  useEffect(() => {
    dispatch(doGetReviewRequest());
    console.log(Listreview);
  }, []);

  useEffect(() => {
    dispatch(doGetBootcampRequest());
    console.log(listBootCamp);
  }, []);
  return (
    <div className="border-4 w-[80%] p-[10px] border-black ml-[200px]">
      {Listreview &&
        Listreview.map((cr) => (
          //   {/* artikel  */}
          <div
            key={cr.coreProgId}
            className="border-4 border-black mt-[20px] p-[20px]"
          >
            {listBootCamp &&
              listBootCamp.map((bc) => (
                <article key={bc.progId}>
                  <div class="flex items-center mb-4 space-x-4">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PQMrbU3VcARQ0motrgKR7ykR8j0j8tGUPg&usqp=CAU"
                      alt=""
                    ></img>
                    <div class="space-y-1 font-medium dark:text-white">
                      <p>{cr.coreEntity.userName}</p>
                    </div>
                  </div>
                  <div class="flex items-center mb-1">
                    <Rating>
                      {Array(5)
                        .fill(cr.coreRating)
                        .map((el, i) => {
                          return (
                            <Rating.Star
                              key={i}
                              filled={el - i > 0 ? true : false}
                            />
                          );
                        })}
                    </Rating>{" "}
                  </div>
                  <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
                    <p>
                      Reviewed in the United Kingdom on : {cr.coreModifiedDate}
                      {/* <time datetime="2017-03-03 19:00">March 3, 2017</time> */}
                    </p>
                  </footer>
                  <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
                    {cr.coreReview}{" "}
                  </p>

                  <aside>
                    <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                      <a
                        href="#"
                        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        Helpful
                      </a>
                      <a
                        href="#"
                        class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Report abuse
                      </a>
                    </div>
                  </aside>
                </article>
              ))}
          </div>
        ))}

      <div>
        <Link href={`/bootcamp`}>
          <button className="btn-primary mt-[10px]">Kembali</button>
        </Link>
      </div>
    </div>
  );
}
