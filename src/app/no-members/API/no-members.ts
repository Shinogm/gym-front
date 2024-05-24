import { z } from 'zod'

// Define the response schema
const responseSchema = z.object({
  status: z.literal('success'),
  message: z.string(),
  data: z.array(
    z.object({
      id: z.number(),
      created_at: z.string(), // Assuming date format is always string, you can use `z.date()` if it's always a valid date string
      name: z.string(),
      lastname: z.string(), // Assuming 'lastname' is intended as 'last_name'
      email: z.string().nullable().optional(), // Assuming email can be null or a string
      permission_id: z.number()
    }))
})

export type ResponseClientNo = z.infer<typeof responseSchema>

export const noMembers = async () => {
  const response = await fetch('http://localhost:3001/clients/get/no_membership', {
    method: 'GET'
  })

  if (!response.ok) {
    console.log('Error:', response.status)
    return undefined
  }

  const data = await response.json()
  const parsedData = responseSchema.parse(data)
  return { data: parsedData, status: response.status }
}
