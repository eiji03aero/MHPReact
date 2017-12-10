import React, { Component } from 'react'

class CommentForm extends {
  constructor (props) {
    super(props)
    this.state = {
      comment: ''
    }
  }

  render () {
    return (
    <div>
       <form method="POST" action="">
         <input type="text"
          name="comment"
          value={this.state.comment}
          onChange={this.onChange(e)}/>
        <input type="submit"
          value="Submit">
       </form>
    </div>
    )
  }
}
