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
          <SidebarElem link="/comments" icon="comment" title="Comments" />
          <SidebarElem link="/imagemap" icon="image"   title="Imagemap" />
          <SidebarElem link="/wiki"     icon="web"     title="Wiki"     />
        </div>
      </div>
    )
  }
}

const SidebarElem = ({ link, icon, title }) => {
  return (
    <Link to={link}>
      <div className="sidebarElem">
        <i className="mdi mdi-onDark mdi-36">{icon}</i>
        <p>{title}</p>
      </div>
    </Link>
  )
}
