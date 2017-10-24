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
          <SidebarElem link="/"         icon="home"    title="Home"     />
          <SidebarElem link="/comments" icon="comment" title="comments" />
          <SidebarElem link="/imagemap" icon="image"   title="Imagemap" />
          <SidebarElem link="/wiki"     icon="web"     title="Wiki"     />
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
