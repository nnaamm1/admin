import { Box, Flex, Tag } from '@chakra-ui/react'
import { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/admin/dashboard') {
      navigate('/admin/dashboard/subcription')
    }
  }, [location.pathname])

  return (
    <Box>
      <Flex my={4} gap={2}>
        <Tag
          colorScheme={
            location.pathname === '/admin/dashboard/subcription' ? 'green' : ''
          }
          variant={'outline'}
        >
          <NavLink to='subcription'>Subcription</NavLink>
        </Tag>
        <Tag
          variant={'outline'}
          colorScheme={
            location.pathname === '/admin/dashboard/revenue' ? 'green' : ''
          }
        >
          <NavLink to='revenue'>Revenue</NavLink>
        </Tag>
      </Flex>
      <Outlet />
    </Box>
  )
}

export default Dashboard
