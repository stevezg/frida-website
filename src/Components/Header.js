import React, { Component } from 'react'
import photo from '../Photos/home-photo.jpg'
// import HeaderPhoto from '../assets/home-photo.jpg'

export default class Header extends Component {
  render() {
    return (
      <div>
        <img className="header-photo" src={photo} />
      </div>
    )
  }
}
