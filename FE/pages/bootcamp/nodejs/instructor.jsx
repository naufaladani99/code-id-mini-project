import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetIncoRequest } from "../../redux-saga/Action/IncoAction";

export default function Instructor() {
  const dispatch = useDispatch();
  const incos = useSelector((state) => state.incoStated.incos);
  useEffect(() => {
    dispatch(GetIncoRequest());
    console.log(incos);
  }, []);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 px-9 py-1 grid-rows-4">
        <div className="border border-gray-500/30 shadow-md">
          <div className="row-span-1">
            <h1 className="text-3xl p-3">Instructor</h1>
          </div>
          <div className="grid grid-cols-3 row-span-2">
            <div className="col-span-1">
              <img
                className="rounded-full w-100 h-100 pl-3"
                src=""
                width={100}
                height={100}
              />
            </div>
            <div className="col-span-2">
              {incos.map((incs) => (
                <p key={incs.userEntityId} className="text-2x1">
                  {incs.incoEntity.empEntity.userFirstName}{" "}
                  {incs.incoEntity.empEntity.userLastName}
                </p>
              ))}
            </div>
          </div>
          <div className="row-span-1 flex justify-end">
            <button>
              <svg
                className="w-8 h-8 text-orange-600 fill-current pr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </button>
            <button>
              <Link href="https://www.twitter.com">
                <svg
                  className="w-8 h-8 text-red-600 fill-current pr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-youtube text-orange-600 w-8 h-8 pr-1"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                <rect x="3" y="5" width="18" height="14" rx="4" />{" "}
                <path d="M10 9l5 3l-5 3z" />{" "}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
