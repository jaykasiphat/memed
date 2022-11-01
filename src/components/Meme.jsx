import { useEffect, useState } from "react";

function Meme() {
  const [formData, setFormData] = useState({
    topText: "when your code compiles after 253 attempts",
    bottomText: "",
    memeImg: "https://i.imgflip.com/31ca9w.png",
  });
  const [allMemes, setAllMemes] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setFormData((prevFormData) => ({
      ...prevFormData,
      memeImg: url,
    }));
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <input
            type="text"
            name="topText"
            placeholder="top text"
            onChange={handleChange}
            value={formData.topText}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            onChange={handleChange}
            value={formData.bottomText}
          />
          <button>Get a new meme image</button>
          <div className="meme">
            <img src={formData.memeImg} alt="meme image" />
            <h3 className="meme--text top">{formData.topText}</h3>
            <h3 className="meme--text bottom">{formData.bottomText}</h3>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Meme;
