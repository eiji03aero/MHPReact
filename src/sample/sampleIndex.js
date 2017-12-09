import ReactDOM from 'react-dom'

class SampleParent extends React.Component {
  getChildContext () {
    return {
      test: 'osakabe'
    }
  }

  render () {
    return (
      <div>
        <p>here comes context test</p>
        <SampleChild />
      </div>
    )
  }
}

SampleParent.childContextTypes = {
  test: PropTypes.any
}

class SampleChild extends React.Component {
  render () {
    const { test } = this.context
    return <p>{ test }</p>
  }
}

SampleChild.contextTypes = {
  test: PropTypes.any
}

ReactDOM.render(<SampleParent />, document.getElementById('root'))
