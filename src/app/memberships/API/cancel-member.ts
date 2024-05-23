import { APIENDPOINTS } from '@/utils/api-call'

export const cancelMemmership = async (code: number) => {
  const response = await fetch(`${APIENDPOINTS.deleteCancelMembershipPoint(code)}`, {
    method: 'DELETE'
  })

  console.log('Response:', response)

  if (!response.ok) {
    throw new Error('Failed to cancel membership')
  }

  const data = await response.json()

  console.log('Data:', data)
  return { status: response.status, data }
}
