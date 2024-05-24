'use client'

import React, { useState } from 'react'
import { MinicompoenentClient } from './mini-client-component'
import { VerifyCode, verifyCode } from '../API/verify-code'
import { Toaster, toast } from 'sonner'
import { AnimatePresence, motion } from 'framer-motion'

export const VerifyMember = () => {
  const [loading, setLoading] = useState(false)
  const [client, setClient] = useState<VerifyCode>()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const code = Number(formData.get('code'))
    console.log('Code:', code)
    const response = await verifyCode(code)
    console.log(response)
    try {
      if (response?.status === 200) {
        setLoading(true)
        toast.success('Membership verified successfully')
        setClient(response?.data)
      }
      if (response === undefined) {
        toast.error('Error verifying membership')
      }
    } catch (error) {
      console.log('Error:', error)
      setLoading(false)
      toast.error('Error verifying membership')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
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
            placeholder='Enter Code'
            type='number'
            name='code'
            required
          />
          <Toaster />
          <button type='submit' className=' bg-slate-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2'>
            Verify
          </button>
          <AnimatePresence>
            {loading
              ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className='flex items-center space-x-2'
                >

                  <section className='items-center space-x-2 justify-center'>
                    <MinicompoenentClient
                      id={client?.memberships.id ?? 0}
                      created={client?.memberships.created_at ?? 'no created'}
                      email={client?.memberships.email ?? ''}
                      expiration={client?.response.message ?? 'no expiration'}
                      lastName={client?.memberships.lastname ?? 'no lastname'}
                      name={client?.memberships.name ?? 'no name'}
                      sun={2}
                    />
                  </section>
                </motion.div>
                )
              : (
                <div className='flex items-center space-x-2'>
                  <span>No Membership</span>
                </div>
                )}
          </AnimatePresence>
        </div>
      </div>
    </form>

  )
}
