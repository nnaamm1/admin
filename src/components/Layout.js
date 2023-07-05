import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import { routes } from '../App'

const Layout = () => {
  const location = useLocation()
  const currentRouteName = routes.find((route) =>
    location.pathname.includes(route.path)
  )?.name


  return (
    <Flex mx={3} my={5} h={'100vh'}>
      <Box w={'15%'}>
        <Sidebar />
      </Box>
      <Box w='80%'>
        <Heading>{currentRouteName}</Heading>
        <Outlet />
      </Box>
    </Flex>
  )
}

export default Layout
