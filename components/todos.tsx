async function getTodos() {
  await new Promise((r) => setTimeout(r, 3000))
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')

  if (response.ok) {
    try {
      const data = response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export async function Todos() {
  const todos = await getTodos()
  console.log(todos)
  return <div>Todos</div>
}
