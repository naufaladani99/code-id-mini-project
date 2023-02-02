import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCorseRequest } from "../../redux-saga/Action/CorseAction";

export default function Description() {
  const dispatch = useDispatch();
  const corses = useSelector((state) => state.corseStated.corses);
  useEffect(() => {
    dispatch(GetCorseRequest());
    console.log(corses);
  }, []);
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 p-9">
        <h1>Description</h1>
        {corses &&
          corses.map((cour) => (
            <p key={cour.corseProgId}>{cour.corseDescription.items}</p>
          ))}
      </div>
    </div>
  );
}
