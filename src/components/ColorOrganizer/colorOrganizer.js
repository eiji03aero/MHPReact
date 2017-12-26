import { Switch, Route, Link } from 'react-router-dom'
import ColorOrganizerHeader from './ui/ColorOrganizerHeader.js'
import ColorShow from './ui/ColorShow/ColorShow.js'
import ColorList from './ui/ColorList.js'

import './stylesheets/ColorOrganizer.scss'

const ColorOrganizer = () =>
  <div className="color-organizer-container u-flex--col">
    <ColorOrganizerHeader />
    <Switch>
      <Route path="/color-organizer/:id" component={ ColorShow } />
      <Route component={ ColorList } />
    </Switch>
  </div>

export default ColorOrganizer
