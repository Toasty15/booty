import React from 'react'
import Head from 'next/head'
import styles from '@booty/styles/Layout.module.scss'

const Layout = ({
  children,
  title = 'Booty',
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
        <link rel="icon" type="image/png" href={'/static/images/favicon.png'}/>
        <link rel="stylesheet" href={'https://necolas.github.io/normalize.css/latest/normalize.css'}/>
      </Head>


      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>

    </div>
  )
}

export default Layout
