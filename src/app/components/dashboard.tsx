'use client'

export default function Dashboard () {
  return (
    <div className='flex h-screen w-full'>
      <div className='flex flex-col bg-[#1E293B] p-6 text-white'>
        <div className='flex flex-col items-center space-y-6'>
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
              className='h-8 w-8 text-[#6EE7B7]'
            >
              <path d='M14.4 14.4 9.6 9.6' />
              <path d='M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z' />
              <path d='m21.5 21.5-1.4-1.4' />
              <path d='M3.9 3.9 2.5 2.5' />
              <path d='M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z' />
            </svg>
            <h2 className='text-2xl font-bold'>Gym Manager</h2>
          </div>
          <div className='flex flex-col items-center space-y-4'>
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
              <span>Create Membership</span>
            </button>
            <div className='flex flex-col items-start space-y-2'>
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
                  className='h-5 w-5'
                >
                  <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
                  <circle cx='12' cy='7' r='4' />
                </svg>
                <span>Users with Membership</span>
              </div>
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
                  className='h-5 w-5'
                >
                  <path d='M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z' />
                  <path d='M13 5v2' />
                  <path d='M13 17v2' />
                  <path d='M13 11v2' />
                </svg>
                <span>Verify Membership</span>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-auto flex flex-col items-center space-y-4'>
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
              className='h-6 w-6 text-[#6EE7B7]'
            >
              <path d='M14.4 14.4 9.6 9.6' />
              <path d='M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z' />
              <path d='m21.5 21.5-1.4-1.4' />
              <path d='M3.9 3.9 2.5 2.5' />
              <path d='M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z' />
            </svg>
            <span className='text-sm'>Gym Equipment</span>
          </div>
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
              className='h-6 w-6 text-[#6EE7B7]'
            >
              <path d='M14.4 14.4 9.6 9.6' />
              <path d='M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z' />
              <path d='m21.5 21.5-1.4-1.4' />
              <path d='M3.9 3.9 2.5 2.5' />
              <path d='M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z' />
            </svg>
            <span className='text-sm'>Weights</span>
          </div>
        </div>
      </div>
      <div className='flex-1 bg-[#F1F5F9] p-8'>
        <div className='flex flex-col space-y-8'>
          <div className='flex flex-col space-y-4'>
            <h2 className='text-2xl font-bold'>Create Membership</h2>
            <form className='flex flex-col space-y-4'>
              <div className='flex items-center space-x-4'>
                <div className='flex flex-col space-y-2'>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='name'
                  >
                    Name
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='name'
                    placeholder='Enter name'
                    type='text'
                  />
                </div>
                <div className='flex flex-col space-y-2'>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='email'
                    placeholder='Enter email'
                    type='email'
                  />
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='flex flex-col space-y-2'>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='membership'
                  >
                    Membership Type
                  </label>
                  <option>Basic</option>
                  <option>Premium</option>
                  <option>Elite</option>
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
                </div>
                <div className='flex flex-col space-y-2'>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='payment'
                  >
                    Payment Method
                  </label>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>PayPal</option>
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
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 self-end'>
                  Create Membership
                </button>
                <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 self-end'>
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
                    <path d='M3 6h18' />
                    <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
                    <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
                  </svg>
                  Delete Membership
                </button>
              </div>
            </form>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold'>Users with Membership</h2>
              <div className='flex items-center space-x-4'>
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-xs'
                  placeholder='Search members'
                  type='text'
                />
                <button
                  className='justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center space-x-2'
                  type='button'
                  id='radix-:rk:'
                  aria-haspopup='menu'
                  aria-expanded='false'
                  data-state='closed'
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
                    <polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' />
                  </svg>
                  <span>Filters</span>
                </button>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6'>
              <div className='flex flex-col items-center space-y-2'>
                <span className='relative flex shrink-0 overflow-hidden rounded-full h-16 w-16'>
                  <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>JD</span>
                </span>
                <div className='flex flex-col items-center space-y-1'>
                  <span className='font-medium'>John Doe</span>
                  <div className='inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                    Active
                  </div>
                  <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 mt-2'>
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
                      <path d='M3 6h18' />
                      <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
                      <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
              <div className='flex flex-col items-center space-y-2'>
                <span className='relative flex shrink-0 overflow-hidden rounded-full h-16 w-16'>
                  <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>JS</span>
                </span>
                <div className='flex flex-col items-center space-y-1'>
                  <span className='font-medium'>Jane Smith</span>
                  <div className='inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                    Pending
                  </div>
                  <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 mt-2'>
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
                      <path d='M3 6h18' />
                      <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
                      <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
              <div className='flex flex-col items-center space-y-2'>
                <span className='relative flex shrink-0 overflow-hidden rounded-full h-16 w-16'>
                  <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>BJ</span>
                </span>
                <div className='flex flex-col items-center space-y-1'>
                  <span className='font-medium'>Bob Johnson</span>
                  <div className='inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                    Expired
                  </div>
                  <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 mt-2'>
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
                      <path d='M3 6h18' />
                      <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
                      <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold'>Verify Membership</h2>
              <div className='flex items-center space-x-4'>
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-xs'
                  placeholder='Enter ID or scan QR code'
                  type='text'
                />
                <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2'>
                  Verify
                </button>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='flex flex-col items-center space-y-2'>
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
                  className='h-12 w-12 text-[#6EE7B7]'
                >
                  <path d='M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z' />
                  <path d='M13 5v2' />
                  <path d='M13 17v2' />
                  <path d='M13 11v2' />
                </svg>
                <span className='text-lg font-medium'>Valid Membership</span>
              </div>
              <div className='flex flex-col items-center space-y-2'>
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
                  className='h-12 w-12 text-[#EF4444]'
                >
                  <path d='M18 6 6 18' />
                  <path d='m6 6 12 12' />
                </svg>
                <span className='text-lg font-medium'>Invalid Membership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
