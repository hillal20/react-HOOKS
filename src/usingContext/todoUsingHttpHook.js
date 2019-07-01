import React from "react";

import { useHttp } from "./hooks";
const Todo3 = props => {
  const [isLoadingHttp, fetchedDataHttp] = useHttp(
    "http://localhost:4000/otherData",
    [] // array of dependencies
  );

  // console.log("isLoadingHttp ===> ", isLoadingHttp);
  // console.log("fetchedDataHttp===> ", fetchedDataHttp);

  return (
    <div className="todo">
      <h3>using getContext </h3>
      {isLoadingHttp && (
        <div>
          <h3>data is loading ....</h3>
        </div>
      )}
      {fetchedDataHttp.map((el, i) => {
        return (
          <div key={i}>
            <div>{el.text}</div>
            <div>{el.completed.toString()}</div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Todo3); // React.memo works like componentShouldUpdate
