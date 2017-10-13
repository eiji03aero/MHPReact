import React, { Component } from 'react'

export default class ServiceSidebar extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="serviceSidebar">
        { renderSidebarElem }
      </div>
    )
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

const renderSidebarElem = () => {
  const Elements = [1,2,3]
  const returnElements = Elements.map((x) => {
    return <SidebarElem name={x} />
  })
  return returnElements
}
