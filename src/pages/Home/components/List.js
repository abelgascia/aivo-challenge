import React from "react";
import ListItem from "./ListItem";

export default function List({ items, title }) {
  return (
    <div className="col-12">
      <div className="col-12">
        <h2 className="text-center">{title}</h2>
      </div>
      <div className="d-flex flex-row overflow-scroll">
        {items.map((item) => {
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
