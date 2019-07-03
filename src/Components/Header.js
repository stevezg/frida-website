import React, { Component } from 'react'
import photo from '../Photos/home-photo.jpg'
// import HeaderPhoto from '../assets/home-photo.jpg'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenido, a Resturante Frida</h1>
        <img className="header-photo" src={photo} />
      </div>
    )
  }
}
