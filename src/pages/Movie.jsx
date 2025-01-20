import React, { useEffect, useState } from "react";
import { getMovie } from "../services/GetService";

function Movie() {
  const [data, setData] = useState([]);


  const getMovieData = async () => {
    try {
      const res = await getMovie();
      const data = res.data.Search;
      setData(data);
      console.log(data);
    } catch (error) {
      console.log("Error Message", error.message)
      console.log("Error Status", error.status)
      console.log("Error Data", error.response.data)
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="w-full flex items-center justify-center gap-4 flex-wrap min-h-screen bg-slate-900">
      {data.map((data) => (
        <div key={data.imdbID} className="">
          <div className="w-full min-w-[300px] bg-neutral-300 p-3 rounded-[10px] overflow-hidden]">
            <div className="h-[200px] w-full rounded-[5px] overflow-hidden">
              <img src={data.Poster} className="h-full w-full object-contain" />
            </div>
            <div className="text-center mt-2">
              <h1 className="font-semibold text-lg">
                Movie Title: {data.Title}
              </h1>
              <p className="text-base">Released Year: {data.Year}</p>
              <p>Type: {data.Type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movie;
