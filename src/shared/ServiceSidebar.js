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
        <div className="sideBarLogoWrap">
          <div className="sideBarLogo"/>
        </div>
        <p><Link to="/">Welcome</Link></p>
        <p><Link to="/comments">Comments</Link></p>
        <p><Link to="/imagemap">Image map</Link></p>
        <p><Link to="/wiki">Wiki</Link></p>
      </div>
    )
  }
}

