import React, { useEffect, useState } from "react";
import "./memeImage.css";

const RandomImage = (props) => {
  const [meme, setMeme] = useState("");
  let { inputTop: topText, inputBottom: bottomText, randMeme } = props;

  if (topText === "") {
    topText = "TEXT HERE";
  }

  if (bottomText === "") {
    bottomText = "TEXT HERE";
  }

  return (
    <div className="meme">
      <figure>
        <span className="meme__top__text meme__text">
          {topText.toUpperCase()}
        </span>
        <img src={randMeme} alt="img" />
        <span className="meme__bottom__text meme__text">
          {bottomText.toUpperCase()}
        </span>
      </figure>
    </div>
  );
};

export default RandomImage;
