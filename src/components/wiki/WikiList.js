import React from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'
import WikiItem from './WikiItem.js'

const wikiListUrl ='/api/wiki/show'

class WikiList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lists: []
    }
  }
  componentWillMount () {
    request
      .get(wikiListUrl)
      .end((err,res) => {
        if (err) {
          console.log(err)
          return
        }
        this.setState({
          lists: res.body.data
        })
      })
  }
  render () {
    return (
      <div className="wikiList">
        <p><Link to="/wiki/edit/new">Create new</Link></p>
        { this.state.lists.map((wiki, i) => {
          return <WikiItem key={i} name={wiki.name} body={wiki.body} />
        })}
      </div>
    )
  }
}

export default WikiList
