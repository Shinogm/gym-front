'use  server'

export const deleteClient = async (id: number) => {
  const response = await fetch(`http://localhost:3001/clients/delete/${id}`, {
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
