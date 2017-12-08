import { HashRouter as Router, Route } from 'react-router-dom'

import ServiceSidebar from './shared/ServiceSidebar.js'
import ServiceHeader from './shared/ServiceHeader.js'
import WelcomePage from './components/welcome/WelcomePage.js'
import CommentLists from './components/comments/CommentLists.js'
import ImageMap from './components/imageMap/ImageMap.js'
import Wiki from './components/wiki/Wiki.js'
import ColorOrganizer from './components/ColorOrganizer/ColorOrganizer.js'

import './basicStyles.scss'
import './admin/utility.scss'
import './admin/font-size.scss'
import './admin/mdi.scss'
import './App.scss'

class App extends React.Component {

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  componentWillMount () {
    this.unsubscribe = this.props.store.subscribe(
      () => this.forceUpdate()
    )
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <Router >
        <div className="serviceField _flx">
          <div className="serviceLeft">
            <ServiceSidebar />
          </div>
          <div className="serviceMain u-flex--col u-flex--1">
            <div className="serviceHeader">
              <ServiceHeader />
            </div>
            <div className="serviceContent u-flex--1">
              <Route exact path="/" component={ WelcomePage } />
              <Route path="/comments" component={ CommentLists } />
              <Route path="/imagemap" component={ ImageMap } />
              <Route path="/wiki" component={ Wiki } />
              <Route path="/color-organizer" component={ ColorOrganizer } />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

App.childContextTypes = {
  store: PropTypes.object.isRequired
}

export default App
