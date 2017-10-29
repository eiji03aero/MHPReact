import React from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

const wikiListUrl ='/api/wiki/show'

export default class WikiList extends React.Component {
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
        { this.renderWikiItems() }
      </div>
    )
  }
  renderWikiItems () {
    const wikiLists = this.state.lists.map((wiki) => {
      return <WikiItem key={wiki._id} name={wiki.name} body={wiki.body} />
    })
    return wikiLists
  }
}

const WikiItem = (props) => {
  return (
    <div className="wikiItem _flx">
      <div className="itemLeft">
        <div className="itemThumbnail _bg_cover" />
      </div>
      <div className="itemMain">
        <div className="itemInfo">
          <h3>{ props.name }</h3>
          <p>{ props.body }</p>
        </div>
        <div className="itemOperational">
          <Link to={`/wiki/edit/${props.name}`}>edit</Link>
          <a href="#">del</a>
        </div>
      </div>
    </div>
  )
}
