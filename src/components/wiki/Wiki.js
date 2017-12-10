import { Route } from 'react-router-dom'
import WikiList from './WikiList.js'
import WikiShow from './WikiShow.js'
import WikiEdit from './WikiEdit.js'

import './stylesheets/Wiki.scss'

const Wiki = () =>
  <div className="wiki">
    <div className="wikiHeader">
    </div>
    <Route exact path="/wiki" component={ WikiList } />
    <Route path="/wiki/edit/:name" component={ WikiEdit } />
  </div>

export default Wiki
