import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LinkIcon from '../../../common/util/LinkIcon/LinkIcon.js'
import convertText from '../../parser/convertText.js'
import { removeWiki } from '../../../../redux/actions/wikis.js'
import { redirectApp } from '../../../../redux/actions/app.js'

import '../../stylesheets/WikiShow.scss'

const propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

const mapStateToProps = ({ wikis }, { match }) =>
  ({
    wiki: wikis.filter(x => x._id === match.params._id)[0],
    match: match
  })

const mapDispatchToProps = dispatch =>
  ({
    onRemove (_id) {
      dispatch(removeWiki(_id))
      dispatch(redirectApp('/wiki'))
    }
  })

const ShowWiki = ({ wiki, match, onRemove }) => {
  const { _id, title, body } = wiki
  const html = convertText(body)

  return (
    <div className="WikiShow u-flex--col">
      <div className="WikiShowHeader u-flex--fs">
        <span className="u-fs--36">{ title }</span>
        <div className="u-optional-right">
          <LinkIcon title='Back' icon='chevron_left' to='/wiki' />
          <LinkIcon title='Edit' icon='create' to={`/wiki/edit/${_id}`} />
          <LinkIcon title='Delete' icon='delete' func={() => onRemove(_id)} />
        </div>
      </div>
      <div className="WikiShowBody u-flex--1">
        { html }
      </div>
    </div>
  )
}

ShowWiki.propTypes = propTypes

export default connect(mapStateToProps, mapDispatchToProps)(ShowWiki)
