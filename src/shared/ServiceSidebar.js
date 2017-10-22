import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './serviceSidebar.scss'

export default class ServiceSidebar extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="serviceSidebar">
        <div className="sidebarLogoWrap">
          <div className="sidebarLogo"/>
        </div>
        <div className="sidebarMenus">
          <SidebarElem link="/" icon="home" title="Home" />
        </div>
      </div>
    )
  }
}

const SidebarElem = (props) => {
  return (
    <div className="sidebarElem">
      <Link to={props.link}>
        <i className="mdi mdi-onDark mdi-36">{props.icon}</i>
        <p>{props.title}</p>
      </Link>
    </div>
  )
}
