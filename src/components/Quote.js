import React, { useState } from 'react';
import './Quote.css';
import Axios from 'axios';

function Quote() {
    const [quote, setQuote] = useState({
        content: "Eye for an eye will make the whole world blind",
        author: "Mahatma Gandhi"
    });

    const getQuote = () => {
        Axios.get("https://api.quotable.io/random").then((response) => {
            // console.log(response.data.author);
            setQuote(response.data);
        });
    };
    return (
        <div className="quote__main">
            <div className="quote__content">
                <div className="quote__quote">
                    <p>{quote.content}</p>
                </div>
                <div className="quote__author">
                    <p>{quote.author}</p>
                </div>
                <div className="quote__button" onClick={getQuote}>Load More
                </div>
            </div>
        </div>
    )
}

export default Quote
