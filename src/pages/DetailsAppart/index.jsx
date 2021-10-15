import { Component } from 'react'

class DetailsAppart extends Component {
  render() {
    const { id } = this.props.match.params
    return (
      <div>
        <h1>Appartement : {id}</h1>
      </div>
    )
  }
}

export default DetailsAppart
