import { Component } from 'react'

import { dataAppart } from '../../data/dataAppart'

class DetailsAppart extends Component {
  render() {
    const { id } = this.props.match.params
    const result = dataAppart.filter((el) => {
      if (el.id === id) {
        return el
      } else {
        return false
      }
    })

    return <div>{result[0].id}</div>
  }
}

export default DetailsAppart
