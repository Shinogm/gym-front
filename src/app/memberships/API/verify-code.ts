
import { APIENDPOINTS } from '@/utils/api-call'
import { z } from 'zod'

const codeMembershipSchema = z.object({
  message: z.string(),
  memberships: z.object({
    id: z.number(),
    created_at: z.string(),
    name: z.string(),
    lastname: z.string(),
    email: z.string().nullable().optional(),
    permission_id: z.number()
  }),
  response: z.object({
    message: z.string()
  })
})

export type VerifyCode = z.infer<typeof codeMembershipSchema>

export const verifyCode = async (code: number) => {
  const response = await fetch(`${APIENDPOINTS.getVerifyCodePoint(code)}`, {
    method: 'GET'
  })

  console.log('Response:', response)

  if (!response.ok) {
    return undefined
  }

  const data = await response.json()
  const parsedData = codeMembershipSchema.parse(data)
  console.log('Data:', data)
  return { data: parsedData, status: response.status }
}
