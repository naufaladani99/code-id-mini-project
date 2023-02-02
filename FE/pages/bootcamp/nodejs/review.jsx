import { Rating } from "flowbite-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCoreRequest } from "../../redux-saga/Action/CoreAction";

export default function Review() {
  const dispatch = useDispatch();
  const cores = useSelector((state) => state.coreStated.cores);
  useEffect(() => {
    dispatch(GetCoreRequest());
    console.log(cores);
  }, []);

  return (
    <div className="grid grid-cols-3 pt-2">
      <div className="col-span-2 px-9 py-1">
        <div className=" border border-gray-500/30 shadow-md">
          <h1 className="text-3xl p-3">Review</h1>
          <div className="grid grid-cols-4">
            <div className="col-span-1">
              <img className="w-10 h-10 rounded-full pl-3" src="" alt=""></img>
            </div>
            <div className="col-span-2 px-2">
              {cores.map((cors) => (
                <div key={cors.coreProgId}>
                  <p className="text-2x1">
                    {cors.coreEntity.userFirstName}{" "}
                    {cors.coreEntity.userLastName}
                  </p>
                  <p>{cors.coreReview}</p>
                </div>
              ))}
            </div>
            {cores.map((cors) => (
              <div className="col-span-1" key={cors.coreProgId}>
                <p>{cors.coreRating}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
