import { Button } from '@chakra-ui/react'
import React from 'react'
import ControlledInput from '../components/ControlledInput'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ColorPicker from '../components/ColorPicker'
import DateRangePicker from '../components/DateRangePicker'

const Setting = () => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      title: '',
      email: '',
      activeDate: [null, null],
      bgrColor: '#b32aa9'
    },
    resolver: yupResolver(
      yup.object().shape({
        title: yup.string().required('Title is required'),
        email: yup.string().required('Email is required').email('Email invalid')
      })
    )
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput
        label={'Title'}
        name='title'
        control={control}
        style={{ width: '40%' }}
      />
      <ControlledInput
        label={'Email'}
        name='email'
        control={control}
        style={{ width: '40%' }}
      />
      <ColorPicker
        label={'Background Color'}
        name='bgrColor'
        control={control}
        style={{ width: '40%' }}
      />
      <DateRangePicker
        label={'Active Date'}
        name='activeDate'
        control={control}
        style={{ width: '40%' }}
      />

      <Button
        type='submit'
        colorScheme='green'
        mt={'20px'}
        hidden={!formState.isDirty}
      >
        Search
      </Button>
    </form>
  )
}

export default Setting
