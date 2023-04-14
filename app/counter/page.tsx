// @ts-nocheck
import { Inter } from 'next/font/google'
import { useState, Suspense } from 'react'
import { Todos } from '~/components/todos'

const inter = Inter({ subsets: ['latin'] })

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((state) => state + 1)
  const decrement = () => setCount((state) => state - 1)

  return (
    <main className={inter.className}>
      <div>{count}</div>
      <hr />
      <div>
        <button type="button" onClick={increment}>
          +1
        </button>
        <button type="button" onClick={decrement}>
          -1
        </button>
        <Suspense fallback={'loading...'}>
          <Todos />
        </Suspense>
      </div>
    </main>
  )
}
