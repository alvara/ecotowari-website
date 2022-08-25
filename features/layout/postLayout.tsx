// Layout for individual blog posts
import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar'
import Footer from './Footer'

export default function PostLayout({children}) {
  return (
    <>
      <Navbar />
      This is the post layout!
      <main>{children}</main>
      <Footer />
    </>
  )
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
