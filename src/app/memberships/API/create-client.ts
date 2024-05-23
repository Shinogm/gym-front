import { z } from 'zod'
import { APIENDPOINTS } from '@/utils/api-call'

const createClientSchema = z.object({
  status: z.literal('success'),
  message: z.string(),
  client: z.object({
    id: z.number(),
    name: z.string(),
    last_name: z.string(),
    email: z.string().nullable().optional()
  })
})

export type CreateClient = z.infer<typeof createClientSchema>

export const createClient = async (form: FormData) => {
  console.log('Form data:', form.get('name'))
  const response = await fetch(`${APIENDPOINTS.postClientPoint}`, {
    method: 'POST',
    body: form
  })

  console.log(response)

  if (!response.ok) {
    throw new Error('Error al crear cliente')
  }

  const data = await response.json()
  const parsedData = createClientSchema.parse(data)
  console.log('Parsed data:', parsedData)
  return { data: parsedData, status: response.status }
}
