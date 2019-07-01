import { useState, useEffect } from "react";
import axios from "axios";

export const useHttp = (url, dependencies) => {
  const [isLoadingHttp, setIsLoading] = useState(false);
  const [fetchedDataHttp, setFetchedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const promise = axios.get(url);
    promise
      .then(res => {
        setIsLoading(false);
        // console.log("res ==>", res.data.msg);

        setFetchedData(res.data.msg);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });

    return () => {
      console.log("cleaning up ...");
    };
  }, dependencies); //  will be called if the props.something changes

  /// hooks can return anything you need
  return [isLoadingHttp, fetchedDataHttp];
};
