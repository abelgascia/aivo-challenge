import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

export default function List({ items, title }) {
  const [list, setList] = useState([]);
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    setList(items);
  }, [items]);

  function handleSorting(type) {
    if (type === "year") {
      let filtered = yearSorting(list);
      setList(filtered);
    } else {
      let filtered = nameSorting(list);
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

  function nameSorting(arr) {
    return items.sort((a, b) => a.title.localeCompare(b.title));
  }

  function listFilter(input) {
    let filtered = items.filter(
      (item) =>
        item.title.toLowerCase().includes(input.toLowerCase()) ||
        item.releaseYear.toString().includes(input)
    );
    setList(filtered);
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
                className="mx-2 px-3 bg-dark text-white border border-1 border-white h-100 rounded-3"
                onChange={(e) => listFilter(e.target.value)}
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
                      onClick={() => handleSorting("name")}
                    >
                      Nombre
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => handleSorting("year")}
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
        {list.length > 0 &&
          list.map((item) => {
            return (
              <ListItem
                poster={item.images["Poster Art"].url}
                title={item.title}
                sinopsis={item.description}
              />
            );
          })}

        {list.length === 0 && (
          <h2 className="text-white my-2">No se encontraron resultados...</h2>
        )}
      </div>
    </div>
  );
}
