import React, {Component} from 'react';
import logo from './logo.svg';
import Quotebox from './Quotebox.js'
import './App.css';

class App extends Component {

    state = {
      loading: true,
      current: 0,
      quote: null,
      author: null
    };

 /* Fetch  quote API */
    async getQuote() {
      let current = this.state.current;

      const url = "https://type.fit/api/quotes";
      const response = await fetch(url);
      const data = await response.json();
      const dataArray = [...data];

      this.setState( {
        quote: dataArray[current].text,
        author: dataArray[current].author, 
        loading: false, 
        current: current + 1} );
        console.log(this.state.current);
  }
  

  async componentDidMount() {
    this.getQuote();
  };


   onClick = () => {
    this.getQuote()
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="quote-box">
            <div className="display-quote">
              <p id="text"><span className="quotemark">&#34;</span> {this.state.quote} <span className="quotemark">&#34;</span></p>
                <span id="author">~ {this.state.author}</span>
            </div>
            <div className="interactions">
              <a href="http://www.twitter.com/intent/tweet" target="_blank" id="tweet-quote"><img className="twitter-icon" src="twitter.png" alt="Twitter Logo" /></a>  
              <button id="new-quote" onClick={this.onClick} >New Quote</button>
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
