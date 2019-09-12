import React from 'react'
import './GlobalNav.scss'
import logo from 'assets/graphics/icons/v2-aligned.svg'

export default function Nav() {
  return (
    <nav id="globalnav">
      <div className="hero">
        <img src={logo} alt="" className="logo" />
        <h1 className="title">PAYW</h1>
      </div>
    </nav>
  )
}
