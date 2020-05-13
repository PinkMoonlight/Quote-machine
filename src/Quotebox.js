import React from 'react';
import { render } from '@testing-library/react';
import Quote from './Quote.js'; 


let Quotebox = () => {

    

    render() 
        return (
            <header className="App-header">
                <div id="quote-box">
                    <div className="display-quote">
                        <p id="quote-text"><span className="quotemark">&#34;</span> Quote <span className="quotemark">&#34;</span></p>
                        <span id="quote-author">~ Author</span>
                    </div>
                    <div className="interactions">
                        <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote"><img className="twitter-icon" src="twitter.png" alt="Twitter Logo" /></a>  
                        <button id="new-quote">New Quote</button>
                    </div>
                </div>
            </header>
        )
    
};

export default Quotebox;