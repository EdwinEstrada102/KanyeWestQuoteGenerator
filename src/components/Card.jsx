import { useState, useEffect } from "react";

const Card = () => {
  const url = "https://api.kanye.rest/";
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => setQuote(data.quote));
  };

  const refreshMemeHandler = async () => {
    fetchQuote();
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="meme" onClick={refreshMemeHandler}>
      <p className="top">Kanye West Once Said, And I Quote:</p>
      <p className="bottom">{quote}</p>
    </div>
  );
};

export default Card;
