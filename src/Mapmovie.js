import React from "react";

// const val = <div style={{ color: "white", fontsize: "2rem" }}>Hello world</div>;
function Mapmovie({ movieName: {Year, Poster, Title, Type } }) {
  return (
    <div >
      <div className="movie">
        <div>
          <p>{Year}</p>
          {/* <p> {val}</p> */}
        </div>
        <div>
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
        </div>

        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Mapmovie;