import { APIENDPOINTS } from '@/utils/api-call'

export const createMember = async (id: number, months: number) => {
  const response = await fetch(`${APIENDPOINTS.postCreateMembershipPoint(id, months)}`, {
    method: 'POST'
  })

  console.log('Response:', response)

  if (!response.ok) {
    throw new Error('Error al iniciar sesión')
  }

  const data = await response.json()
  console.log('Data:', data)
  return { data, status: response.status }
}
