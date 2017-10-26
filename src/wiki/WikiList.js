import React from 'react'

import './wiki.scss'

export default class WikiList extends React.Component {
  render () {
    return (
      <div className="wikiList">
        { this.renderWikiItems(3) }
      </div>
    )
  }
  renderWikiItems (num) {
    const items = []
    for (let i=0; i < num; i += 1) {
      items.push(<WikiItem key={i} />)
    }
    return items 
  }
}

const WikiItem = () => {
  return (
    <div className="wikiItem _flx">
      <div className="itemLeft">
        <div className="itemThumbnail _bg_cover" />
      </div>
      <div className="itemMain">
        <div className="itemInfo">
          <h3>here comes title</h3>
          <p>i will describe what is in this one later</p>
        </div>
        <div className="itemOperational">
          <a href="#">edit</a>
          <a href="#">del</a>
        </div>
      </div>
    </div>
  )
}
