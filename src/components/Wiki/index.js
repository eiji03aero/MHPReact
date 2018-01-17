import { Route, Link } from 'react-router-dom'
import WikiList from './ui/WikiList'
import NewWiki from './ui/NewWiki'
import EditWiki from './ui/EditWiki'
import ShowWiki from './ui/ShowWiki'

import './stylesheets/Wiki.scss'

const Wiki = () =>
  <div className="wiki">
    <Route exact path="/wiki" component={ WikiList } />
    <Route path="/wiki/new" component={ NewWiki } />
    <Route path="/wiki/edit/:_id" component={ EditWiki } />
    <Route path="/wiki/show/:_id" component={ ShowWiki } />
  </div>

export default Wiki
