import React, { useState } from "react";
import movie from "../src/assets/movie.svg";
import Modal from "./Modal";

function Movie(data) {
  const [hovered, setHovered] = useState(true);

  const [ModalIsOpen, setModalIsOpen] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState({});

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const colorArray = [
    "#beadfa",
    "#d0bfff",
    "#dfccfb",
    "#e6b9de",
    "#e26ee5",
    "#7743db",
  ];

  const getRandomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };

  const handleCardClick = (ele) => {
    setModalIsOpen(true);
    setSelectedMovie(ele);
  };

  return (
    <div className="movie-case">
      {/* {data.data.map((ele) => {
        const randomColor = getRandomColor(); */}
      <>
        {data.data.map((ele) => {
          const randomColor = getRandomColor();

          ele.generatedColor = randomColor;
          return (
            <div
              className="movie"
              style={{ backgroundColor: randomColor }}
              key={ele.id}
              onClick={() => handleCardClick(ele)}
            >
              <div className="movie-card-front">
                {ele.poster_path ? (
                  <img
                    data-modal-target="static-modal"
                    data-modal-toggle="static-modal"
                    type="button"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${ele.poster_path}`}
                    alt="poster"
                  />
                ) : (
                  <img
                    width="185"
                    height="287"
                    src={movie}
                    alt="movie"
                    style={{ backgroundColor: "#fff", opacity: "90%" }}
                  />
                )}
              </div>
              <p className="movie-title mt-2">{ele.original_title}</p>
              <span>({ele.release_date})</span>
            </div>
          );
        })}
        {ModalIsOpen && (
          <Modal
            show={ModalIsOpen}
            setShow={setModalIsOpen}
            data={selectedMovie}
          />
        )}
      </>
    </div>
  );
}

export default Movie;
