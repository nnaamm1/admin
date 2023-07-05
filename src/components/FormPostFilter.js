import React from 'react'
import { useForm } from 'react-hook-form'
import ControlledInput from './ControlledInput'
import { Box, Button, Flex } from '@chakra-ui/react'

const FormPostFilter = ({ setFilter }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      userId: '',
      postTitle: ''
    }
  })

  const onSubmit = (data) => {
    setFilter(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        my={'20px'}
        border={'1px solid gray'}
        borderRadius={'5px'}
        px={'20px'}
        py='10px'
      >
        <ControlledInput
          label={'User Id'}
          name='userId'
          control={control}
          style={{ width: '10%' }}
        />
        <ControlledInput
          label={'Title'}
          name='postTitle'
          control={control}
          style={{ width: '40%' }}
        />
        <Button type='submit' colorScheme='green' mt={'20px'}>
          Search
        </Button>
      </Box>
    </form>
  )
}

export default FormPostFilter
