import { Route, Switch, Link } from 'react-router-dom'
import WikiList from './ui/list/WikiList.js'
import NewWiki from './ui/edit/NewWiki.js'
import EditWiki from './ui/edit/EditWiki.js'
import ShowWiki from './ui/show/ShowWiki.js'

import './stylesheets/Wiki.scss'

const Wiki = () =>
  <div className="wiki">
    <Switch>
      <Route exact path="/wiki" component={ WikiList } />
      <Route path="/wiki/new" component={ NewWiki } />
      <Route path="/wiki/edit/:id" component={ EditWiki } />
      <Route path="/wiki/:id" component={ ShowWiki } />
    </Switch>
  </div>

export default Wiki
