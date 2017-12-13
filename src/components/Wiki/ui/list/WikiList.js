import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ListItem from './ListItem.js'

const propTypes = {
  wikis: PropTypes.array
}

const defaultProps = {
  wikis: []
}

const mapStateToProps = state => ({
  wikis: state.wikis
})

const WikiList = ({ wikis }) => {
  if (wikis.length <= 0) {
    return <p>you aint got any wiki mamma!</p>
  }

  return (
    <div className="wikiList">
      <p><Link to="/wiki/new">Create new</Link></p>
      { wikis.map((wiki, i) => {
        return <ListItem key={i} wiki={wiki} />
      })}
    </div>
  )
}

WikiList.propTypes = propTypes
WikiList.defaultProps = defaultProps

export default connect(mapStateToProps, null)(WikiList)