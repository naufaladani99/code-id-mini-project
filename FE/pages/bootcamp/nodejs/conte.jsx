import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCorseRequest } from "../../redux-saga/Action/CorseAction";
import { GetCosmRequest } from "../../redux-saga/Action/CosmAction";

export default function Conte() {
  const dispatch = useDispatch();
  const dispatchs = useDispatch();
  const corses = useSelector((state) => state.corseStated.corses);
  const cosms = useSelector((state) => state.cosmStated.cosms);
  useEffect(() => {
    dispatch(GetCorseRequest());
    dispatchs(GetCosmRequest());
    console.log(corses);
    console.log(cosms);
  }, []);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 pr-9 pt-9 pl-10">
        <div className="border border-gray-500/30 shadow-md p-3">
          <h1 className="text-2xl font-normal leading-normal">
            What youll learn
          </h1>
          <div>
            {corses.map((cour) => (
              // eslint-disable-next-line react/jsx-key
              <ul>
                {cour.corseItemLearning.items.map((item) => {
                  return (
                    <li key={item} className="w-2/5">
                      &#x2713; {item}
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
        <div className="py-9">
          {cosms.map((coss) => (
            <div className="relative overflow-hidden border" key={coss.cosmId}>
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              ></input>
              <div className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 h-12 w-full pl-5 flex items-center">
                <h1 className="text-lg font-semibold text-white">
                  {coss.cosmCose.coseCont.contTitle}
                </h1>
                <p>{coss.cosmCose.coseCont.contTotalMinute}</p>
              </div>
              <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div className="p-4 grid grid-cols-4">
                  <div className="col-span-3 pr-1">
                    <p>{coss.cosmCose.coseTitle}</p>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <p>{coss.cosmCose.coseMinute}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 border border-white shadow-md rounded-lg overflow-hidden -mt-10 mr-5">
        <iframe
          className="w-full object-cover max-h-96"
          src="https://www.youtube.com/embed/sSLJx5t4OJ4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-2 pt-5">
          <div className="flex-col pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 inline-block text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <p className="pl-1 inline-block">Disini Text</p>
          </div>
          <div className="flex-col pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 inline-block text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="pl-1 inline-block">Disini Text</p>
          </div>

          <div className="flex-col pb-2">
            <svg
              className="w-8 h-8 inline-block text-orange-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
            </svg>
            <p className="pl-1 inline-block">Disini Text</p>
          </div>
        </div>
        <div className="pt-5 flex justify-center">
          <button className="border rounded-md bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-md py-2 flex justify-center text-white font-bold">
            <p className="p-1">Apply Regular Bootcamp</p>
          </button>
        </div>
        <div className="p-2">
          <h1>Persyaratan : </h1>
          {corses.map((cour) => (
            // eslint-disable-next-line react/jsx-key
            <ul className="border border-black w-11/12 h-max">
              {cour.corseRequirement.items.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          ))}
          <h1>Benefit</h1>
          {corses &&
            corses.map((cour) => (
              <p
                key={cour.corseProgId}
                className="border border-black w-11/12 h-max"
              >
                {cour.corseTargetLevel.items}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
