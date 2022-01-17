import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

export default function List({ items, title }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(items);
  }, [items]);

  function handleFilter(type) {
    if (type === "year") {
      let filtered = yearSorting(list);
      setList(filtered);
    } else {
      let filtered = items.sort((a, b) => a.title.localeCompare(b.title));
      setList(filtered);
    }
  }

  function yearSorting(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
      noSwaps = true;
      for (var j = 0; j < i - 1; j++) {
        if (arr[j].releaseYear > arr[j + 1].releaseYear) {
          var temp = arr[j].releaseYear;
          arr[j].releaseYear = arr[j + 1].releaseYear;
          arr[j + 1].releaseYear = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
    return arr;
  }

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-6">
          <h3 className="text-white">{title}</h3>
        </div>
        <div className="col-6">
          <div className="d-flex flex-row justify-content-end">
            <div>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Buscar por nombre o año..."
                className="mx-2 px-3 bg-dark text-white border border-1 border-white"
              />
            </div>
            <div>
              <div class="btn-group">
                <button
                  className="btn btn-dark border-white dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  Ordenar por
                </button>
                <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => handleFilter("name")}
                    >
                      Nombre
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => handleFilter("year")}
                    >
                      Año
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-row mt-2"
        style={{ overflowX: "scroll", overflowY: "hidden !important" }}
      >
        {list.map((item) => {
          return (
            <ListItem
              poster={item.images["Poster Art"].url}
              title={item.title}
              sinopsis={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
