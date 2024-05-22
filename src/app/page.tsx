'use client'

import Other from '../components/other'
import { AllMembersComponent } from './memberships/components/all-members-component'
import { RegisterClientForm } from './memberships/components/create-form'
import { VerifyMember } from './memberships/components/verify-member'

export default function Home () {
  return (
    <Other>
      <div>
        <div className='flex h-screen w-full'>
          <div className='flex-1 bg-gray-100 p-6 dark:bg-gray-800'>
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
              <h1 className='text-2xl font-bold'>Gym Manager</h1>
            </div>
            <div className='mt-8 space-y-8'>
              <div className='grid grid-cols-3 gap-4'>
                <RegisterClientForm />
                <VerifyMember />
              </div>
              <AllMembersComponent />
            </div>
          </div>
        </div>
      </div>
    </Other>
  )
}
