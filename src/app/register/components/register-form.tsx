'use client'
import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import { useState } from 'react'
import { LabeledInputRegister } from './input'
import RegisterAdmin from '../API/register'

export const RegisterForm = () => {
  const pathname = usePathname()
  console.log(pathname)
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)
  console.log(loading, setLoading)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    console.log(form)
    const token = Number(form.get('token'))
    const response = await RegisterAdmin(form, token)
    console.log(response)
    if (response.status === 200) {
      toast.success('Usuario registrado correctamente')
      push('/login')
    } else {
      toast.error('Error al registrar usuario')
    }
  }

  return (

    <motion.div
      className='flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] px-4 py-12 dark:from-[#1a1a1a] dark:to-[#0f0f0f]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}

    >
      <div className='mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-[#1a1a1a]'>
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-bold text-[#1a1a1a] dark:text-white'>Join the Gym</h1>
            <p className='text-gray-500 dark:text-gray-400'>Complete the form to get started.</p>
          </div>
          <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ff9b9b]'>
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
              className='h-8 w-8 text-white'
            >
              <path d='M14.4 14.4 9.6 9.6' />
              <path d='M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z' />
              <path d='m21.5 21.5-1.4-1.4' />
              <path d='M3.9 3.9 2.5 2.5' />
              <path d='M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z' />
            </svg>
          </div>
        </div>
        <motion.form
          className='space-y-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div>
            <LabeledInputRegister
              label='Name'
              id='name'
              placeholder='John Doe'
              type='text'
              required
              name='name'
              capitalize
            />
          </div>
          <div>
            <LabeledInputRegister
              label='Last Name'
              id='last-name'
              placeholder='Perez Garcia'
              type='text'
              required
              name='last_name'
              capitalize
            />
          </div>
          <div>
            <LabeledInputRegister
              label='Email'
              id='email'
              placeholder='jonatan.perez@gmail.com'
              type='email'
              name='email'
            />
          </div>
          <div>
            <LabeledInputRegister
              label='Password'
              id='password'
              placeholder='********'
              type='password'
              name='password'
            />
          </div>
          <div>
            <LabeledInputRegister
              label='Token'
              id='token'
              placeholder='********'
              type='number'
              name='token'
            />
          </div>
          <Toaster />
          <div className='flex justify-between items-center'>
            <button
              className='inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ff9b9b] py-3 px-6 font-bold text-white shadow-lg transition-colors hover:from-[#ff4b4b] hover:to-[#ff8b8b]'
              type='submit'
            >
              Join Now
            </button>
            <button type='button' onClick={() => push('/login')} className='text-[#ff6b6b] font-medium hover:underline'>
              Return to Login
            </button>
          </div>
        </motion.form>
      </div>
      <div className='mt-8 flex items-center justify-center gap-4'>
        <div className='h-16 w-16 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ff9b9b] p-4 shadow-lg'>
          <div
            className='h-full w-full object-contain'
            style={{ aspectRatio: '64 / 64', objectFit: 'cover' }}
          />
        </div>
        <div className='h-16 w-16 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ff9b9b] p-4 shadow-lg'>
          <div
            className='h-full w-full object-contain'
            style={{ aspectRatio: '64 / 64', objectFit: 'cover' }}
          />
        </div>
        <div className='h-16 w-16 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ff9b9b] p-4 shadow-lg'>
          <div
            className='h-full w-full object-contain'
            style={{ aspectRatio: '64 / 64', objectFit: 'cover' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
