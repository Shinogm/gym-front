'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { toast, Toaster } from 'sonner'
import { motion } from 'framer-motion'
import { deleteClient } from '../../API/delete-client'
import { modifyClient } from '../API/modify'

export const querySchema = z.object({
  email: z.string(),
  clientId: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  membershipId: z.number(),
  expiration: z.string(),
  created: z.string()
})

export type queryType = z.infer<typeof querySchema>

export const ModifyForm = () => {
  const Push = useRouter()
  const [statedeleteClient, setDeleteClient] = useState(false)
  console.log('deleteClient:', deleteClient)
  const [currentUrl, setCurrentUrl] = useState<string | null>(null)
  const [parsedQuery, setParsedQuery] = useState<queryType | null>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setCurrentUrl(window.location.search)

    try {
      const parsedQuery = querySchema.parse({
        email: urlParams.get('email') ?? '',
        clientId: parseInt(urlParams.get('clientid') ?? ''),
        firstName: urlParams.get('name') ?? '',
        lastName: urlParams.get('last-name') ?? '',
        membershipId: parseInt(urlParams.get('memberis') ?? ''),
        expiration: urlParams.get('expiration') ?? '',
        created: urlParams.get('created') ?? ''
      })
      setParsedQuery(parsedQuery)
    } catch (error) {
      console.error('Error al analizar la cadena de consulta:', error)
    }
  }, [currentUrl])

  console.log('parsedQuery:', parsedQuery)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const response = await modifyClient(formData, Number(parsedQuery?.clientId) ?? 0)

    if (response == null) {
      toast('Failed to modify client')
    } else {
      toast('Client modified')
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col space-y-6' onSubmit={handleSubmit}
    >
      <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0077b6] to-[#00b140] px-4 py-8 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
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
                className='h-6 w-6 text-[#f57c00]'
              >
                <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
                <circle cx='12' cy='7' r='4' />
              </svg>
              <h2 className='text-2xl font-bold'>Edit Profile</h2>
            </div>
            <button
              type='button' onClick={() => [
                console.log('delete client'),
                setDeleteClient(true)
              ]} className='flex items-center space-x-3'
            >
              <>
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
                  className='h-5 w-5 text-[#0077b6] relative animate-pulse'
                >
                  <path d='M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z' />
                  <line x1='18' x2='12' y1='9' y2='15' />
                  <line x1='12' x2='18' y1='9' y2='15' />
                </svg>
                <span className='text-sm font-medium text-[#0077b6]'>Client</span>
              </>
            </button>
            {statedeleteClient && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className='flex items-center space-x-3'
              >
                <button
                  onClick={() => {
                    setDeleteClient(false)
                  }} type='button' className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 bg-white text-[#0077b6] hover:bg-[#0077b6] hover:text-white focus:bg-[#0077b6] focus:text-white'
                >
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
                    className='h-5 w-5'
                  >
                    <path d='M18 6 6 18' />
                    <path d='m6 6 12 12' />
                  </svg>
                  <span>Cancel</span>
                </button>
                <Toaster />
                <button
                  onClick={async () => {
                    const response = await deleteClient(Number(parsedQuery?.clientId) ?? 0)
                    Push.push('/')

                    if (response == null) {
                      toast.error('Failed to delete client')
                    } else {
                      toast.success('Delete client succes', {
                        duration: 5000,
                        position: 'bottom-left',
                        style: {
                          backgroundColor: '#00b140',
                          color: '#fff',
                          borderRadius: '8px',
                          padding: '12px',
                          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                        },
                        action: {
                          label: 'return to principal page',
                          onClick: () => {
                            Push.push('/')
                          }
                        }
                      })
                    }
                  }} className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#ff6b6b] text-white hover:bg-[#ff4d4d] focus:bg-[#ff4d4d]'
                >
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
                    className='h-5 w-5'
                  >
                    <path d='M18 6 6 18' />
                    <path d='m6 6 12 12' />
                  </svg>
                  <span>Delete</span>
                </button>
              </motion.section>

            )}
          </div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='firstName'
              >
                First Name
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#f2f2f2] focus:border-[#00b140] focus:ring-[#00b140] text-[#0077b6]'
                id='name'
                placeholder='John'
                name='name'
                defaultValue={parsedQuery?.firstName ?? ''}
                type='text'
              />
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='lastName'
              >
                Last Name
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#f2f2f2] focus:border-[#00b140] focus:ring-[#00b140] text-[#0077b6]'
                id='lastname'
                placeholder='Doe'
                name='lastname'
                defaultValue={parsedQuery?.lastName ?? ''}
                type='text'
              />
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#f2f2f2] focus:border-[#0077b6] focus:ring-[#0077b6] text-[#0077b6]'
                id='email'
                name='email'
                defaultValue={parsedQuery?.email ?? ''}
                placeholder='john@example.com'
                type='email'
              />
            </div>

          </div>
          <div className='flex justify-end space-x-3'>
            <Toaster />

            <button
              onClick={() => {
                Push.push('/')
              }} type='button' className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 bg-white text-[#0077b6] hover:bg-[#0077b6] hover:text-white focus:bg-[#0077b6] focus:text-white'
            >
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
                className='h-5 w-5'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
              <span>Cancel</span>
            </button>
            <Toaster />
            <button type='submit' className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#00b140] text-white hover:bg-[#008c2f] focus:bg-[#008c2f]'>
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
                className='h-5 w-5'
              >
                <path d='M20 6 9 17l-5-5' />
              </svg>
              <span>Modify</span>
            </button>
          </div>
        </div>
      </div>
    </motion.form>
  )
}
