import React, { Component } from 'react';
var $ = require('jquery')

class CommentLists extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: ''
    }
  }

  componentDidMount () {
    $.ajax({
      url: 'http://localhost:3001/comments',
      type: 'GET',
      dataType: 'json',
    }).done((data) => {
      const data2 = JSON.stringify(data)
      console.log(data2)
      this.setState({ comments: data })
    })
  }

  render () {
    if (!this.state.comments) {
      return <p>osakabe</p>
    } else {
      return (
      <div>
        <p>here are your comments</p>
        { this.renderComments() }
      </div>
      )
    }
  }

  renderComments () {
    const comments = this.state.comments.map((x) => {
      return (
      <div>
         <h3>{x.author}</h3>
         <p>{x.text}</p>
      </div>
      )
    })
    return comments
  }
}

export default CommentLists;
