'use client'
export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <div className='flex h-screen w-full'>
          <div className='hidden w-64 flex-col bg-gray-900 p-6 text-white lg:flex'>
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
            <nav className='mt-8 space-y-4'>
              <div>
                <h2 className='text-lg font-semibold'>Create Membership</h2>
                <div className='mt-2 space-y-2'>
                  <button className='justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 flex items-center space-x-2'>
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
                      <path d='M5 12h14' />
                      <path d='M12 5v14' />
                    </svg>
                    <span>Create New Membership</span>
                  </button>
                  <div className='space-y-2'>
                    <input
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Name'
                    />
                    <input
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Email'
                      type='email'
                    />
                    <option value=''>Select Membership Type</option>
                    <option value='basic'>Basic</option>
                    <option value='premium'>Premium</option>
                    <option value='elite'>Elite</option>
                    <select
                      aria-hidden='true'
                      tabIndex={-1}
                      style={{
                        position: 'absolute',
                        border: '0px',
                        width: '1px',
                        height: '1px',
                        padding: '0px',
                        margin: '-1px',
                        overflow: 'hidden',
                        clip: 'rect(0px, 0px, 0px, 0px)',
                        whiteSpace: 'nowrap',
                        overflowWrap: 'normal'
                      }}
                    >
                      <option value='' />
                    </select>
                    <input
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Payment Details'
                      type='text'
                    />
                  </div>
                  <div className='flex justify-end'>
                    <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className='text-lg font-semibold'>Users with Membership</h2>
                <div className='mt-2 space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <input
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Search members'
                    />
                    <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'>
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
                        <circle cx='11' cy='11' r='8' />
                        <path d='m21 21-4.3-4.3' />
                      </svg>
                    </button>
                  </div>
                  <div className='space-y-2'>
                    <div className='flex items-center space-x-4'>
                      <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                        <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>JD</span>
                      </span>
                      <div>
                        <p className='font-medium'>John Doe</p>
                        <p className='text-gray-400'>Basic Membership</p>
                      </div>
                      <div className='inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                        Active
                      </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                        <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>JS</span>
                      </span>
                      <div>
                        <p className='font-medium'>Jane Smith</p>
                        <p className='text-gray-400'>Premium Membership</p>
                      </div>
                      <div className='inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                        Active
                      </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                        <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>BJ</span>
                      </span>
                      <div>
                        <p className='font-medium'>Bob Johnson</p>
                        <p className='text-gray-400'>Elite Membership</p>
                      </div>
                      <div className='inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                        Expired
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className='text-lg font-semibold'>Verify Membership</h2>
                <div className='mt-2 space-y-2'>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    placeholder='Enter ID or Scan QR Code'
                  />
                  <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2'>
                    Verify
                  </button>
                  <div className='flex items-center space-x-2'>
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
                      className='h-6 w-6 text-green-500'
                    >
                      <circle cx='12' cy='12' r='10' />
                      <path d='m9 12 2 2 4-4' />
                    </svg>
                    <p>Membership is valid</p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className='flex-1 bg-gray-100 p-6 dark:bg-gray-800'>
            <div className='flex items-center justify-between'>
              <h1 className='text-2xl font-bold'>Gym Manager</h1>
              <div className='flex items-center space-x-4'>
                <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'>
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
                    <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
                    <circle cx='12' cy='12' r='3' />
                  </svg>
                </button>
                <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                  <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>JD</span>
                </span>
              </div>
            </div>
            <div className='mt-8 space-y-8'>
              <div className='grid grid-cols-3 gap-4'>
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
                      <input
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        placeholder='Name'
                      />
                      <input
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        placeholder='Email'
                        type='email'
                      />
                      <option value=''>Select Membership Type</option>
                      <option value='basic'>Basic</option>
                      <option value='premium'>Premium</option>
                      <option value='elite'>Elite</option>
                      <select
                        aria-hidden='true'
                        tabIndex={-1}
                        style={{
                          position: 'absolute',
                          border: '0px',
                          width: '1px',
                          height: '1px',
                          padding: '0px',
                          margin: '-1px',
                          overflow: 'hidden',
                          clip: 'rect(0px, 0px, 0px, 0px)',
                          whiteSpace: 'nowrap',
                          overflowWrap: 'normal'
                        }}
                      >
                        <option value='' />
                      </select>
                      <input
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        placeholder='Payment Details'
                        type='text'
                      />
                    </div>
                    <div className='flex justify-end'>
                      <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2'>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
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
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        placeholder='Enter ID or Scan QR Code'
                      />
                      <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2'>
                        Verify
                      </button>
                      <div className='flex items-center space-x-2'>
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
                          className='h-6 w-6 text-green-500'
                        >
                          <circle cx='12' cy='12' r='10' />
                          <path d='m9 12 2 2 4-4' />
                        </svg>
                        <p>Membership is valid</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow dark:bg-gray-900'>
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
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-4'>
                      <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                        <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>JD</span>
                      </span>
                      <div>
                        <p className='font-medium'>John Doe</p>
                        <p className='text-gray-400'>Basic Membership</p>
                      </div>
                      <div className='inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                        Active
                      </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                        <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>JS</span>
                      </span>
                      <div>
                        <p className='font-medium'>Jane Smith</p>
                        <p className='text-gray-400'>Premium Membership</p>
                      </div>
                      <div className='inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                        Active
                      </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                        <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>BJ</span>
                      </span>
                      <div>
                        <p className='font-medium'>Bob Johnson</p>
                        <p className='text-gray-400'>Elite Membership</p>
                      </div>
                      <div className='inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                        Expired
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
