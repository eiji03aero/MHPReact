import React, { Component } from 'react'

export default class ServiceSidebar extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="serviceSidebar">
        { this.renderSidebarElem() }
      </div>
    )
  }
  renderSidebarElem () {
    const Elements = [1,2,3]
    const returnElements = Elements.map((x) => {
      return <SidebarElem name={x} key={x} />
    })
    return returnElements
  }
}

class SidebarElem extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="sidebarElem">
        <a href="/">
          {this.props.name}
        </a>
      </div>
    )
  }
}

