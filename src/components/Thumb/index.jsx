import { Component } from 'react'
import { Link } from 'react-router-dom'

import './thumb.css'

class Thumb extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default Thumb
