import './style.scss'

import React, { useEffect, useState } from 'react'

import Logo from 'assets/graphics/icons/v2-aligned.svg'
import classnames from 'classnames'

export default function () {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false)

  useEffect(() => {
    const documentFonts = (document as any).fonts
    if (!documentFonts) {
      setTimeout(() => {
        setIsFontsLoaded(true)
      }, 300)
    } else {
      documentFonts.ready.then(() => {
        setIsFontsLoaded(true)
      })
    }
  }, [])

  return (
    <div
      id="home"
      className={classnames({
        'is-fonts-loaded': isFontsLoaded,
      })}
    >
      <div className="hero">
        <img src={Logo} alt="PAYW Logo" className="logo" />

        <section className="header">
          <h1 className="organization-name">
            <span>PAYW</span>
          </h1>

          <h2 className="organization-full-name">
            <span className="splash">Pay</span>{' '}
            <span className="splash">as</span>{' '}
            <span className="splash">You</span>{' '}
            <span className="splash">Want</span>
          </h2>
        </section>

        <section className="manifesto">
          <p className="paragraph">
            Our mission is to give people a great experience through our great
            software which always are and will be open to you. You don’t have to
            pay anything.
          </p>
        </section>

        <a
          href="https://github.com/paywteam"
          className="visit-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button tabIndex={-1} className="visit-github-btn">
            Visit GitHub
          </button>
        </a>
      </div>

      <div className="masterpieces">
        <section className="eodiro"></section>
      </div>
    </div>
  )
}
