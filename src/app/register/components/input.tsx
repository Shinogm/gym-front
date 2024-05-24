'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  label: string
  id?: string
  type: React.InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  required?: boolean
  name?: string
  capitalize?: boolean
  defaultValue?: number
}
const className = {
  isCapitalized: 'capitalize'
}

export const LabeledInputRegister = ({ label, id, placeholder, type, required = false, name, capitalize = false, defaultValue }: Props) => {
  return (
    <section>
      <label
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        htmlFor='name'
      >
        <span>
          {label}
        </span>
      </label>
      <motion.input
        className={`text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 ${capitalize ? className.isCapitalized : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
        id={id}
        placeholder={placeholder}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}

      />
    </section>
  )
}
