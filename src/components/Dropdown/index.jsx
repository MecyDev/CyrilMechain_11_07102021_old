import { Component } from 'react'

import './dropdown.css'

class Dropdown extends Component {
  render() {
    return (
      <div className="dropdown">
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default Dropdown
