import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import React from 'react'
import { HexColorPicker } from 'react-colorful'
import { Controller } from 'react-hook-form'

const ColorPicker = ({
  label,
  name,
  placeholder,
  control,
  style,
  labelStyle,
  controlStyle,
  errorStyle
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl isInvalid={!!error} sx={controlStyle}>
          {label && <FormLabel sx={labelStyle}>{label}</FormLabel>}
          <Input {...field} placeholder={placeholder} sx={style} />
          <FormErrorMessage sx={errorStyle}>
            {error && error.message}
          </FormErrorMessage>
          <Box mt='10px'>
            <HexColorPicker color={field.value} onChange={field.onChange} />
          </Box>
        </FormControl>
      )}
    />
  )
}

export default ColorPicker
