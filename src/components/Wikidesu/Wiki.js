import { Route, Link } from 'react-router-dom'
import WikiList from './ui/list/WikiList.js'
import NewWiki from './ui/edit/NewWiki.js'
import EditWiki from './ui/edit/EditWiki.js'
import ShowWiki from './ui/show/ShowWiki.js'

import './stylesheets/Wiki.scss'

const Wiki = () =>
  <div className="wiki">
    <Route exact path="/wiki" component={ WikiList } />
    <Route path="/wiki/new" component={ NewWiki } />
    <Route path="/wiki/edit/:_id" component={ EditWiki } />
    <Route path="/wiki/show/:_id" component={ ShowWiki } />
  </div>

export default Wiki
