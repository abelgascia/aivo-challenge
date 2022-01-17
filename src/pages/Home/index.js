import React, { useEffect, useState } from "react";

import getMovies from "../../utils/api";
import List from "./components/List";
import LogoutButton from "./components/LogoutButton";

export default function Index() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getMovies().then((res) => {
      let seriesArr = [];
      let moviesArr = [];

      res.entries.map((element) => {
        console.log(element);
        if (element.programType === "series") {
          seriesArr.push(element);
        } else {
          moviesArr.push(element);
        }
      });

      setSeries(seriesArr);
      setMovies(moviesArr);

      console.log(res);
    });
  }, []);

  return (
    <div className="container-fluid bg-dark px-5">
      <div className="row">
        <div className="col-12 d-flex flex-row justify-content-between">
          <h1 className="text-white text-center my-3 fw-bold fs-1">Aivoflix</h1>
          <LogoutButton />
        </div>
      </div>

      <div className="row mt-4">
        <List title="Peliculas" items={movies} />
      </div>
      <div className="row mt-4">
        <List title="Series" items={series} />
      </div>
    </div>
  );
}
