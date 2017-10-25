import React, { Component } from 'react'
import WikiList from './WikiList.js'

export default class Wiki extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <WikiList />
        oh yes
      </div>
    )
  }
}
