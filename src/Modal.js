import React from "react";

function Modal({ show, setShow, data }) {
  console.log("ele", data);

  const generatedColor = data.generatedColor; // Assuming data.generatedColor contains the color value
  const dynamicStyle = {
    backgroundColor: generatedColor,
  };

  return (
    <>
      {show ? (
        <div className="modal-backdrop">
          <div className="absolute modal-movie" style={dynamicStyle}>
            <div className="modal-content">
              <span
                onClick={() => {
                  setShow(false);
                }}
                class="material-symbols-outlined absolute top-2 right-2 text-white cursor-pointer"
              >
                close
              </span>
              <div className="flex gap-4">
                <div className="w-1/3">
                  <img
                    data-modal-target="static-modal"
                    data-modal-toggle="static-modal"
                    type="button"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${data.poster_path}`}
                    alt="poster"
                  />
                </div>
                <div className="p-4 w-8/12 desc-box pr-4">
                  <h1 className="welcome">{data.original_title}</h1>
                  <span className="date">({data.release_date})</span>
                  <p className="desc mt-4">{data.overview}</p>

                  <div className="mt-4 absolute right-10 bottom-6">
                    <svg id="heart" height="0" width="0">
                      <defs>
                        <clipPath id="svgPath">
                          <path d="M20,35.09,4.55,19.64a8.5,8.5,0,0,1-.13-12l.13-.13a8.72,8.72,0,0,1,12.14,0L20,10.79l3.3-3.3a8.09,8.09,0,0,1,5.83-2.58,8.89,8.89,0,0,1,6.31,2.58,8.5,8.5,0,0,1,.13,12l-.13.13Z" />
                        </clipPath>
                      </defs>
                    </svg>

                    <div class="heart-container">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        class="heart-stroke"
                      >
                        <path d="M20,35.07,4.55,19.62a8.5,8.5,0,0,1-.12-12l.12-.12a8.72,8.72,0,0,1,12.14,0L20,10.77l3.3-3.3A8.09,8.09,0,0,1,29.13,4.9a8.89,8.89,0,0,1,6.31,2.58,8.5,8.5,0,0,1,.12,12l-.12.12ZM10.64,7.13A6.44,6.44,0,0,0,6.07,18.19L20,32.06,33.94,18.12A6.44,6.44,0,0,0,34,9l0,0a6.44,6.44,0,0,0-4.77-1.85A6,6,0,0,0,24.83,9L20,13.78,15.21,9A6.44,6.44,0,0,0,10.64,7.13Z" />
                      </svg>

                      <a href="#" className="heart-clip"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal;
