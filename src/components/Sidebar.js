import React from 'react'
import { routes } from '../App'
import { Box, Center, Flex } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'

const SidebarItem = ({ path, name, isActive }) => {
  return (
    <NavLink to={path}>
      <Flex
        pl={2}
        alignItems={'center'}
        backgroundColor={isActive ? '#38A169' : ''}
        borderRadius={3}
        h={'50px'}
      >
        {name}
      </Flex>
    </NavLink>
  )
}

const Sidebar = () => {
  const location = useLocation()

  const isActiveRoute = (routePath) => {
    return location.pathname.includes(routePath)
  }

  return (
    <Box mr={5}>
      <Flex direction={'column'}>
        {routes.map((route) => (
          <SidebarItem
            key={route.path}
            path={route.path}
            name={route.name}
            isActive={isActiveRoute(route.path)}
          />
        ))}
      </Flex>
    </Box>
  )
}

export default Sidebar
