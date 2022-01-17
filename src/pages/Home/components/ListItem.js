import React from "react";

export default function ListItem({ poster, title, year, type, id, sinopsis }) {
  return (
    <div className="col-4 col-md-3 col-lg-3 mb-3 mx-3">
      <div className="card">
        <img src={poster} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}
