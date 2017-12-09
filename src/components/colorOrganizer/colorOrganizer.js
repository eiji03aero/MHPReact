import { Switch, Route, Link } from 'react-router-dom'
import { Header, List, Show } from './container.js'

import './stylesheets/ColorOrganizer.scss'

const ColorOrganizer = () =>
  <div className="color-organizer-container">
    <Header />
    <Switch>
      <Route path="/color-organizer/:id" component={ Show } />
      <Route component={ List } />
    </Switch>
  </div>

export default ColorOrganizer
