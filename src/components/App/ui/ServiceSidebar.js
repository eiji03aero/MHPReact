import SidebarElem from './SidebarElem.js'

import '../stylesheets/ServiceSidebar.scss'

const ServiceSidebar = () =>
  <div className="serviceSidebar">
    <div className="sidebarLogoWrap">
      <div className="sidebarLogo"/>
    </div>
    <div className="sidebarMenus">
      <SidebarElem link="/"                icon="home"    title="Home"     />
      <SidebarElem link="/comments"        icon="comment" title="Comments" />
      <SidebarElem link="/imagemap"        icon="image"   title="Imagemap" />
      <SidebarElem link="/wiki"            icon="web"     title="Wiki"     />
      <SidebarElem link="/color-organizer" icon="palette" title="Colors"   />
    </div>
  </div>

export default ServiceSidebar
