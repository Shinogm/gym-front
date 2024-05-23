'use client'

import React from 'react'
import { MinicompoenentClient } from './mini-client-component'

interface Props {
  name?: string
  lastName?: string
  email?: string
  membershipId?: number
  expiration?: string
  created?: string
}

export const VerifyMember = ({ name, lastName, email, membershipId, expiration, created }: Props) => {
  return (
    <div className='rounded-lg bg-white p-6 shadow dark:bg-gray-900'>
      <h2 className='text-lg font-semibold'>Verify Membership</h2>
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
            <rect width='5' height='5' x='3' y='3' rx='1' />
            <rect width='5' height='5' x='16' y='3' rx='1' />
            <rect width='5' height='5' x='3' y='16' rx='1' />
            <path d='M21 16h-3a2 2 0 0 0-2 2v3' />
            <path d='M21 21v.01' />
            <path d='M12 7v3a2 2 0 0 1-2 2H7' />
            <path d='M3 12h.01' />
            <path d='M12 3h.01' />
            <path d='M12 16v.01' />
            <path d='M16 12h1' />
            <path d='M21 12v.01' />
            <path d='M12 21v-1' />
          </svg>
          <h3 className='text-xl font-medium'>Membership Verification</h3>
        </div>
        <div className='space-y-2'>
          <input
            className='text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            placeholder='Enter ID or Scan QR Code'
          />
          <button className=' bg-slate-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2'>
            Verify
          </button>
          <div className='flex items-center space-x-2'>

            <section className='flex items-center space-x-2'>
              <MinicompoenentClient
                created='true'
                email='test@test.com'
                expiration='2023-01-01'
                lastName='test'
                name='a'
                membershipId={1}
                sun={2}
              />
            </section>
          </div>
        </div>
      </div>
    </div>

  )
}
