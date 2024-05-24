'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface DashBoardProps {
  children: React.ReactNode
}

export default function Other ({ children }: DashBoardProps): JSX.Element {
  const { push } = useRouter()
  return (
    <motion.div
      className='flex min-h-screen w-full bg-gradient-to-br from-[#ff6b6b] to-[#ffa500] dark:from-[#ff6b6b]/80 dark:to-[#ffa500]/80'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className='flex flex-col items-start justify-between gap-8 bg-white p-6 shadow-lg dark:bg-gray-950 w-72'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className='flex items-center space-x-2 justify-centers'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-8 w-8 text-[#6EE7B7]'
            onClick={() => push('/login')}
          >
            <path d='M14.4 14.4 9.6 9.6' />
            <path d='M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z' />
            <path d='m21.5 21.5-1.4-1.4' />
            <path d='M3.9 3.9 2.5 2.5' />
            <path d='M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z' />
          </svg>
          <button onClick={() => push('/')} className='text-2xl font-bold'>Gym Manager</button>
        </div>
        <section className='flex flex-col items-center justify-center space-y-4 py-96'>

          <div className='flex items-center space-x-2'>

            <button onClick={() => push('/no-members')} className='flex items-center space-x-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-5 w-5'
              >
                <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
                <circle cx='12' cy='7' r='4' />
              </svg>
              <span>Users with No Membership</span>
            </button>
          </div>
        </section>

      </motion.div>
      <motion.main
        className='flex-1 flex flex-col p-4 md:p-6'
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.main>
    </motion.div>
  )
}
