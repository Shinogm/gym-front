import { z } from 'zod'
import { verifyCode } from './verify-code'

const clientSchema = z.object({
  id: z.number(),
  created_at: z.string(),
  name: z.string(),
  lastname: z.string(),
  email: z.string().nullable().optional(),
  permission_id: z.number()
})

const clientListSchema = z.object({
  message: z.string(),
  memberships: z.array(
    z.object({
      membership: z.object({
        code_membership: z.number(),
        created_at: z.string(),
        client_id: z.number(),
        have_membership_id: z.number(),
        expiration_date: z.string()
      }),
      response: z.object({
        message: z.string()
      }),
      client: clientSchema
    })
  )
})

export type ClientList = z.infer<typeof clientListSchema>

export const getAllClients = async () => {
  const response = await fetch('http://localhost:3001/memberships/membership/check', {
    method: 'GET'
  })

  console.log('Response:', response)

  if (!response.ok) {
    throw new Error('Error al obtener los clientes')
  }

  if (response.status === 200) {
    const data = await response.json()
    const parsedData = clientListSchema.parse(data)
    const res = await verifyCode(parsedData.memberships[0].membership.code_membership)

    console.log('Res:', res)

    console.log('Data:', data)

    return { data: parsedData, status: response.status, user: res }
  }
}
