import { APIENDPOINTS } from '@/utils/api-call'
import { z } from 'zod'

const clientSchema = z.object({
  code_membership: z.number(),
  created_at: z.string(),
  client_id: z.number(),
  have_membership_id: z.number(),
  expiration_date: z.string()
})

const clientListSchema = z.object({
  message: z.string(),
  clients: z.array(clientSchema)
})

export type ClientList = z.infer<typeof clientListSchema>

export const getAllClients = async (id: number) => {
  const response = await fetch(`${APIENDPOINTS.getClientWithMembershipPoint(id)}`, {
    method: 'GET'
  })

  console.log('Response:', response)

  if (!response.ok) {
    throw new Error('Error al obtener los clientes')
  }

  const data = await response.json()
  const parsedData = clientListSchema.parse(data)
  console.log('Data:', data)
  return { data: parsedData, status: response.status }
}
