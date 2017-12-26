import '../../stylesheets/ShowInfo.scss'

const ShowInfo = ({ color, title }) =>
  <div className="ShowInfo">
    <p className="u-fs--18">{ title }</p>
    <p className="u-fs--12">Color: { color }</p>
  </div>

export default ShowInfo
