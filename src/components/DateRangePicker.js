import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller } from 'react-hook-form'

const DateRangePicker = ({
  name,
  control,
  controlStyle,
  label,
  labelStyle,
  placeholder,
  style,
  errorStyle
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl isInvalid={!!error} sx={controlStyle}>
          {label && <FormLabel sx={labelStyle}>{label}</FormLabel>}
          <ReactDatePicker
            selectsRange={true}
            startDate={field.value[0]}
            endDate={field.value[1]}
            onChange={(update) => {
              field.onChange(update)
            }}
            customInput={<Input />}
          />
          <FormErrorMessage sx={errorStyle}>
            {error && error.message}
          </FormErrorMessage>
        </FormControl>
      )}
    />
  )
}

export default DateRangePicker
