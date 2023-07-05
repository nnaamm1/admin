import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

const ControlledInput = ({ label, name, placeholder, control, style, labelStyle, controlStyle, errorStyle}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl isInvalid={!!error} sx={controlStyle}>
          {label && <FormLabel sx={labelStyle}>{label}</FormLabel>}
          <Input {...field} placeholder={placeholder} sx={style}/>
          <FormErrorMessage sx={errorStyle}>{error && error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  )
}

export default ControlledInput
