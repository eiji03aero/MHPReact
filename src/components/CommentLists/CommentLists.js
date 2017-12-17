import React, { Component } from 'react'
import request from 'superagent'

class CommentLists extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: ''
    }
  }

  componentDidMount () {
    request
      .get('/api/comment/index')
      .end((err,res) => {
        if (err) return console.error(err)
        this.setState( {
          comments: res.body.data.comments
        })
      })
  }

  render () {
    if (!this.state.comments) {
      return (
        <div>
          <p>osakabe</p>
          <form method="post" action="/api/comment/create">
            <button type="submit">
              submit
            </button>
          </form>
        </div>

      )
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

export default CommentLists
