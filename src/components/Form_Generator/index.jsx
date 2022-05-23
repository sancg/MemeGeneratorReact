import React, { useState, useEffect } from "react";
import RandomImage from "../Random_Image";
import "./form.css";

const Form_generator = () => {
  const [inputTop, setInputTop] = useState("");
  const [inputBottom, setInputBottom] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("memeDB")) || []
  );
  const [randMeme, setRandMeme] = useState("");

  const handleChangeTop = (evt) => {
    setInputTop(evt.target.value);
  };

  const handleChangeBottom = (evt) => {
    setInputBottom(evt.target.value);
  };

  const getData = async () => {
    const api_call = await fetch("https://api.imgflip.com/get_memes");
    const res = await api_call.json();
    const {
      data: { memes: all_data },
    } = res;
    return all_data;
  };

  const getRandomImage = () => {
    const randomUrl = Math.round(Math.random() * data.length - 1 + 1);
    const url = data[randomUrl]?.url;
    if (!url) return;
    setRandMeme(url);
  };

  useEffect(() => {
    let memeDB = localStorage.getItem("memeDB");
    if (!memeDB) {
      getData().then((res) => {
        const rand = Math.round(Math.random() * res.length - 1 + 1);
        setData(res);
        localStorage.setItem("memeDB", JSON.stringify(res));
        setRandMeme(res[rand].url);
      });
    } else {
      getRandomImage();
    }
  }, []);

  return (
    <div>
      <div className="form">
        <input
          type="text"
          placeholder="Text at the top"
          onChange={handleChangeTop}
          value={inputTop}
        />
        <input
          type="text"
          placeholder="Text at the bottom"
          onChange={handleChangeBottom}
          value={inputBottom}
        />
        <button onClick={getRandomImage}>Get a new meme image 🖼</button>
      </div>
      <RandomImage {...{ inputTop, inputBottom, randMeme }} />
    </div>
  );
};

export default Form_generator;
