import $$ from 'classnames'
import React, { useEffect, useState } from 'react'
import $ from './home.module.scss'

export default function Home() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false)

  useEffect(() => {
    // const documentFonts = (document as any).fonts
    // if (!documentFonts) {
    //   setTimeout(() => {
    //     setIsFontsLoaded(true)
    //   }, 300)
    // } else {
    //   documentFonts.ready.then(() => {
    //     setIsFontsLoaded(true)
    //   })
    // }

    setTimeout(() => {
      setIsFontsLoaded(true)
    }, 300)
  }, [])

  return (
    <div
      id={$['home']}
      className={$$({
        [$['is-fonts-loaded']]: isFontsLoaded,
      })}
    >
      <div className={$['hero']}>
        <img
          src="/assets/graphics/icons/v2-aligned.svg"
          alt="PAYW Logo"
          className={$['logo']}
        />

        <section className={$['header']}>
          <h1 className={$['organization-name']}>
            <span>PAYW</span>
          </h1>

          <h2 className={$['organization-full-name']}>
            <span className={$['splash']}>Pay</span>{' '}
            <span className={$['splash']}>as</span>{' '}
            <span className={$['splash']}>You</span>{' '}
            <span className={$['splash']}>Want</span>
          </h2>
        </section>

        <section className={$['manifesto']}>
          <p className={$['paragraph']}>
            Our mission is to give people a great experience through our great
            software which always are and will be open to you.
          </p>
        </section>

        <a
          href="https://github.com/payw-org"
          className={$['visit-link']}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button tabIndex={-1} className={$['visit-github-btn']}>
            Visit GitHub
          </button>
        </a>
      </div>

      <div className={$['masterpieces']}>
        <section className={$['payw-pro']}></section>
      </div>
    </div>
  )
}
