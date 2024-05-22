'use client'
import React from 'react'

interface Props {
  label: string
  id?: string
  type: React.InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  required?: boolean
  name?: string
  capitalize?: boolean
}
const className = {
  isCapitalized: 'capitalize'
}

export const LabeledInput = ({ label, id, placeholder, type, required = false, name, capitalize = false }: Props) => (
  <section>
    <label
      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400'
      htmlFor='first-name'
    >
      <span>
        {label}
      </span>
    </label>
    <input
      className={`flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#1F2937] text-white ${capitalize ? className.isCapitalized : ''}`}
      id={id}
      placeholder={placeholder}
      name={name}
      type={type}
      required={required}
    />
  </section>
)
