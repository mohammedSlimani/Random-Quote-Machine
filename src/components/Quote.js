import React, { Component } from 'react'

export class Quote extends Component {
  
  render() {
    return (
      <div>
        <div id='text'dangerouslySetInnerHTML={{__html: this.props.quote.text}}></div>
        <div id='author'>{this.props.quote.author}</div>

      </div>
    )
  }
}

export default Quote
