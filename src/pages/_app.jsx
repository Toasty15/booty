import React from 'react'
import '@booty/styles/styles.scss'

const BootyApp = ({
  Component, pageProps
}) => {
  return (
    <Component {...pageProps} />
  );
}

// noinspection JSUnusedGlobalSymbols
export default BootyApp
