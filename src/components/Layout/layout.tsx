import React from 'react'
import { LayoutProps } from './layout.props'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { Box } from '@mui/system'

const Layout = ({children}:LayoutProps): JSX.Element => {
  return (
    <>
    <Navbar />
    <Box minHeight={"90vh"}>{children}</Box>
    <Footer />
    </>
  )
}

export default Layout