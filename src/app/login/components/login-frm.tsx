'use client'
import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import { useState } from 'react'
import { LabeledInputRegister } from '@/app/register/components/input'
import Login from '../API/login'

export const LoginForm = () => {
  const pathname = usePathname()
  console.log(pathname)
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)
  console.log(loading, setLoading)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    console.log(form)
    const response = await Login(form)
    console.log(response)
    if (response?.status === 200) {
      toast.success('Usuario registrado correctamente')
      push('/')
    } else {
      console.log('Error:', response)
      toast.error('Error al registrar usuario')
    }
  }

  return (

    <motion.form
      className='w-full py-12 md:py-24 lg:py-32 xl:py-48'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Desbloquea tu Potencia de Fitness
              </h1>
              <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                Únete a nuestro gimnasio y transforma tu cuerpo con nuestros entrenadores expertos y equipos de última generación.
              </p>
            </div>
            <div className='w-full max-w-sm space-y-2'>
              <div className='text-center'>
                <p className='text-lg font-medium text-gray-900 dark:text-gray-50'>Login form!</p>
              </div>
              <section className='space-y-4'>
                <div className='space-y-1'>
                  <LabeledInputRegister
                    label='Email'
                    id='email'
                    placeholder='John Doe'
                    type='email'
                    required
                    name='email'
                  />
                </div>
                <div className='space-y-1'>
                  <LabeledInputRegister
                    label='Password'
                    id='password'
                    placeholder='••••••••'
                    type='password'
                    name='password'
                    required
                  />
                </div>
                <Toaster />
                <div className='flex gap-2'>
                  <button
                    className='inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 flex-1 bg-[#ff6b6b] hover:bg-[#ff4d4d] text-white font-bold py-3 px-6 rounded-md'
                    type='submit'
                  >
                    Join Now
                  </button>
                  <a type='button' className='flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-6 rounded-md' href='/register'>
                    Register
                  </a>
                </div>
              </section>
            </div>
          </div>
          <div className='mx-auto flex h-full w-full items-center justify-center'>
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
              className='h-[400px] w-[400px] text-[#ff6b6b] relative animate-pulse'
            >
              <path d='M14.4 14.4 9.6 9.6' />
              <path d='M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z' />
              <path d='m21.5 21.5-1.4-1.4' />
              <path d='M3.9 3.9 2.5 2.5' />
              <path d='M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z' />
            </svg>
          </div>
        </div>
      </div>
    </motion.form>
  )
}
