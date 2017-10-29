import React from 'react'

export const WikiShow = (props) => {
  return (
    <div classname="wikiShow _flx-1">
      <h2>{ props.name }</h2>
      <p>{ props.body}</p>
      <p>iine!</p>
    </div>
  )
}

// export default class WikiShow extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       name: '',
//       body: ''
//     }
//   }
//   componentWillReceiveProps (nextProps) {
//     this.setState({
//       name: nextProps.name,
//       body: nextProps.body
//     })
//   }
//   render () {
//     return (
//       <div className="wikiShow _flx-1">
//         <h2>{ this.state.name }</h2>
//         <p>{ this.state.body }</p>
//       </div>
//     )
//   }
// } 
