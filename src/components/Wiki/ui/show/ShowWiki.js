import { connect } from 'react-redux'
import convertText from '../../parser/convertText.js'

const propTypes = {
  body: PropTypes.string
}

const mapStateToProps = ({ wikis }, { match }) =>
  ({
    wiki: wikis.filter(x => x.id === match.params.id)[0],
    match: match
  })

const ShowWiki = ({ wiki, match }) => {
  console.log(match)
  const { id, title, body } = wiki
  const html = convertText(body)

  return (
    <div className="wikiShow u-flex--1">
      { html }
    </div>
  )
}

ShowWiki.propTypes = propTypes

export default connect(mapStateToProps, null)(ShowWiki)
