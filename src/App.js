import React, {Component} from 'react';
import logo from './logo.svg';
import Quotebox from './Quotebox.js'
import './App.css';

class App extends Component {

    state = {
      loading: true,
      quotes: []
    };
  

  componentDidMount() {
    let quoteAPI;
    /* Fetch  quote API */
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          quoteAPI = Array.from(data);
            console.log(quoteAPI);
            console.log(quoteAPI[0]);
        })
    this.setState({quotes: quoteAPI});
    console.log(this.state.quotes[0]);
  };

  onClick = e => {
    
  };

  
render() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <div className="display-quote">
            <p id="quote-text"><span className="quotemark">&#34;</span> Quote <span className="quotemark">&#34;</span></p>
              <span id="quote-author">~ Author</span>
          </div>
          <div className="interactions">
            <a href="http://www.twitter.com/intent/tweet" target="_blank" id="tweet-quote"><img className="twitter-icon" src="twitter.png" alt="Twitter Logo" /></a>  
            <button id="new-quote">New Quote</button>
          </div>
        </div>
      </header>
      <footer className="footer">
        <p>Built by <a className="name-link" href="#">Kate Fisher</a></p>
      </footer>
    </div>
  );
}

}

export default App;
