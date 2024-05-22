'use client'

import { LabeledInput } from '@/components/input'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const RegisterClientForm = () => {
  const pathname = usePathname()
  console.log(pathname)
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)
  console.log(loading, setLoading)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='col-span-2 rounded-lg bg-white p-6 shadow dark:bg-gray-900'>
      <div className='col-span-2 rounded-lg bg-white p-6 shadow dark:bg-gray-900'>
        <h2 className='text-lg font-semibold'>Create Membership</h2>
        <div className='mt-4 space-y-4'>
          <div className='flex items-center space-x-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-8 w-8 text-blue-500'
            >
              <path d='M14.4 14.4 9.6 9.6' />
              <path d='M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z' />
              <path d='m21.5 21.5-1.4-1.4' />
              <path d='M3.9 3.9 2.5 2.5' />
              <path d='M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z' />
            </svg>
            <h3 className='text-xl font-medium'>New Membership</h3>
          </div>
          <div className='space-y-2'>
            <div className='space-y-2'>
              <LabeledInput
                label='Name'
                id='name'
                placeholder='Jonatan'
                type='text'
                required
                name='name'
                capitalize
              />
            </div>
            <div className='space-y-2'>
              <LabeledInput
                label='Last Name'
                id='last-name'
                placeholder='Perez Garcia'
                type='text'
                required
                name='last_name'
                capitalize
              />
            </div>
            <div className='space-y-2'>
              <LabeledInput
                label='Email'
                id='email'
                placeholder='jonatan.perez@gmail.com'
                type='email'
                name='email'
              />
            </div>
          </div>
          <div className='flex justify-end'>
            <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-slate-600 text-white'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
