'use client'

import React, { useEffect, useState } from 'react'
import { ScompoenentClient } from './client-interface'
import { ClientList, getAllClients } from '../API/get-all'

export const AllMembersComponent = () => {
  const [clients, setClients] = useState<ClientList>()

  useEffect(() => {
    getAllClients().then((response) => {
      setClients(response?.data)
      console.log(response?.data)
    }).catch((error) => {
      console.log('Error:', error)
    })
  }, [])

  return (
    <div className='rounded-lg bg-white p-6 shadow dark:bg-gray-900 max-h-96 overflow-y-auto flex flex-col'>
      <h2 className='text-lg font-semibold'>Users with Membership</h2>
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
            <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
            <circle cx='9' cy='7' r='4' />
            <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
            <path d='M16 3.13a4 4 0 0 1 0 7.75' />
          </svg>
          <h3 className='text-xl font-medium'>Member List</h3>
        </div>
        <div className='flex flex-col items-center space-y-2 '>

          <>

            {clients !== undefined && clients?.memberships.length > 0
              ? (
                  clients?.memberships.map((client) => (
                    <ScompoenentClient
                      created={client.client.created_at}
                      membershipId={client.membership.code_membership ?? 0}
                      email={client.client.email ?? ''}
                      expiration={client.membership.expiration_date ?? ''}
                      lastName={client.client.lastname ?? ''}
                      name={client.client.name ?? ''}
                      key={client.client.id}
                      id={client.client.id}
                      sun={2}
                    />
                  ))
                )
              : (
                <div className='flex items-center space-x-2'>
                  <span>No Membership</span>
                </div>
                )}
          </>
        </div>
      </div>
    </div>
  )
}
