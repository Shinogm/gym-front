import { APIENDPOINTS } from '@/utils/api-call'

export const deleteClient = async (id: number) => {
  const response = await fetch(`${APIENDPOINTS.deleteClientPoint(id)}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    console.log('Failed to delete client')
  } else {
    const data = await response.json()
    console.log('Data:', data)
    return { data, status: response.status }
  }
}
