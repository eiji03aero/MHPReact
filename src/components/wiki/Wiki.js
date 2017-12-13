import { Route } from 'react-router-dom'
import WikiList from './ui/list/WikiList.js'
// import WikiShow from './WikiShow.js'
// import WikiEdit from './WikiEdit.js'
import NewWiki from './ui/edit/NewWiki.js'

import './stylesheets/Wiki.scss'

const Wiki = () =>
  <div className="wiki">
    <div className="wikiHeader">
    </div>
    <Route exact path="/wiki" component={ WikiList } />
    {/*<Route path="/wiki/edit/:name" component={ EditWiki } />*/}
    <Route path="/wiki/new" component={ NewWiki } />
  </div>

export default Wiki
