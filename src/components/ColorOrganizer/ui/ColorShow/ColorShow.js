import { connect } from 'react-redux'
import ShowBackground from './ShowBackground.js'
import ShowInfo from './ShowInfo.js'
import SentenceIcon from '../../../common/util/SentenceIcon/SentenceIcon.js'

import '../../stylesheets/ColorShow.scss'

const mapStateToProps = ({ colors }, { match }) =>
  ({
    color: colors.find(color => color.id === match.params.id)
  })

export const ColorShow = ({ color: { color, title } }) => {
  return (
    <div className="ColorShow u-flex--1">
      <ShowBackground color={ color } />
      <SentenceIcon to='/color-organizer' title='Back to List'/>
      <ShowInfo color={ color } title={ title } />
    </div>
  )
}

export default connect(mapStateToProps, null)(ColorShow)
