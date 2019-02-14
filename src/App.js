import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes:[],
      quote:{}
    }
    //this.refreshQuote = this.refreshQuote.bind(this);
    this.changeQuote = this.changeQuote.bind(this);
  }
  
  componentDidMount(){
    this.refreshQuote();
    //this.changeQuote();
    console.log(this.state.quotes);
  }

  refreshQuote(){
    fetch("https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20")
    .then(res=>res.json())
    .then((response)=>{
      //JSON.stringify(response);
      //console.log(response);
      //since I will be getting a list of one item.
      response.map(x=>{
        let mQuote = {
          text:x.content,
          author:x.title
        };
        if(this.state.quotes ===[]){
          this.setState({
            quotes:[mQuote],
            quote:mQuote
          });
        }else{
          this.setState({
            quotes:[...this.state.quotes , mQuote],
            quote:mQuote
          });
        }
        return x;
      })
    });
  }

  changeQuote(){
    //this.refreshQuote();
    this.setState({
      quote:this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
    })
  }

  render() {
    return (
      <div id='quote-box' className="App">
        <h1>My App</h1>
        <Quote quote={this.state.quote}/>
        <button id='new-quote' onClick={this.changeQuote}>Refresh</button>
        <a id='tweet-quote' href='twitter/intent/tweet'>Tweet This quote</a>
      </div>
    );
  }
}

export default App;
