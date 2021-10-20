import { Component } from 'react'

import './rate.css'

import star_grey from '../../assets/star-grey.svg'

class Rate extends Component {
  render() {
    return (
      <div>
        <ul className="stars-container">
          <li>
            <p>
              <img src={star_grey} alt="" />
            </p>
          </li>
          <li>
            <p>
              <img src={star_grey} alt="" />
            </p>
          </li>
          <li>
            <p>
              <img src={star_grey} alt="" />
            </p>
          </li>
          <li>
            <p>
              <img src={star_grey} alt="" />
            </p>
          </li>
          <li>
            <p>
              <img src={star_grey} alt="" />
            </p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Rate
