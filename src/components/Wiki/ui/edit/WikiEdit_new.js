import EditHeader from './EditHeader.js'
import EditForm from './EditForm.js'
import EditShow from './EditShow.js'

const WikiEdit = ({ wiki }) => {
  const { title, body } = wiki

  return (
    <div className="wikiEdit">
      <WikiEditHeader name={propName} />
      <div className="wikiEditor u-flex">
        <WikiEditForm body={propBody} />
        <WikiShow body={propBody} />
      </div>
      <div className="wikiEditFooter">
        <button onClick={() => this.save()}>Save</button>
      </div>
    </div>
  )
}
