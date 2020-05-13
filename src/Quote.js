import React from 'react';
import { render } from '@testing-library/react';

let  Quote = () => {


        fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
            let quotes = Array.from(data);
          console.log(quotes);
        })


    render()
    return (
        <div className="display-quote">
            <p id="quote-text"><span className="quotemark">&#34;</span> Quote <span className="quotemark">&#34;</span></p>
            <span id="quote-author">~ Author</span>
        </div>
    )

}

export default Quote;
