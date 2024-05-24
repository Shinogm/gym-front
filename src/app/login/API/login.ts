'use server'

import { APIENDPOINTS } from '@/utils/api-call'

export default async function Login (form: FormData) {
  console.log('form', form)
  // queryparams

  const query = new URLSearchParams()
  query.append('email', form.get('email') as string)
  query.append('password', form.get('password') as string)
  console.log('query', query)
  const response = await fetch(`${APIENDPOINTS.postLoginPoint}?${query.toString()}`, {
    method: 'POST'
  })

  console.log(response)

  if (!response.ok) {
    return undefined
  }

  const data = await response.json()

  return { data, status: response.status }
}
