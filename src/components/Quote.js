import React, { Component } from 'react'

export class Quote extends Component {
  
  render() {
    return (
      <blockquote>
        <p className='mb-1' id='text'dangerouslySetInnerHTML={{__html: this.props.quote.text}}></p>
        <footer id='author'>{this.props.quote.author}</footer>

      </blockquote>
    )
  }
}

export default Quote
