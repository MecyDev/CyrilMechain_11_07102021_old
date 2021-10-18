import { Component } from 'react'
import Carrousel from '../../components/Carrousel'
import Tag from '../../components/Tag'

import { dataAppart } from '../../data/dataAppart'

import './detailsAppart.css'

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

    return (
      <main className="detailsAppart">
        <Carrousel pictures={result[0].pictures} title={result[0].title} />
        <div className="container">
          <div className="info_1">
            <h1>{result[0].title}</h1>
            <h2>{result[0].location}</h2>
            <div className="tags"></div>
          </div>
          <div className="info_2">
            {result[0].tags.map((el) => (
              <Tag key={el} value={el} />
            ))}
          </div>
        </div>
      </main>
    )
  }
}

export default DetailsAppart
