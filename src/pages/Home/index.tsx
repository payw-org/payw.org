import React from 'react'
import './Home.scss'
import logo from 'assets/graphics/icons/v2-aligned.svg'

export default function() {
  return (
    <div id="home">
      <div className="hero">
        <img src={logo} alt="payw logo" className="logo" />
        <h1 className="title">PAYW</h1>
        <p className="manifesto">
          We
          <span className="heart" role="img" aria-label="red-heart">
            ❤️
          </span>
          Open Source
        </p>
        <button className="join">
          <a
            href="https://github.com/paywteam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
          </a>
          Join us at GitHub
        </button>
      </div>
    </div>
  )
}
