import { Sandpack } from '@codesandbox/sandpack-react'

export function Example1() {
  return (
    <Sandpack
      template="react"
      theme="dark"
      files={{
        '/App.js': `import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}
`,
      }}
    />
  )
}

export function Example2() {
  return (
    <Sandpack
      template="react"
      theme="dark"
      files={{
        '/App.js': `import { useState } from 'react'

export default function Counter() {
  console.log('component rerendered')
  const [count, setCount] = useState(5)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => setCount(5)}>Set count to same value</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}`,
      }}
    />
  )
}

export function Example3() {
  return (
    <Sandpack
      template="react"
      theme="dark"
      files={{
        '/App.js': `import { useState } from 'react'

export default function DelayedCounter() {
  const [count, setCount] = useState(0)
  const increment = async () => {
    await new Promise(resolve => setTimeout(resolve, 500))
    setCount(count + 1)
  }
  return (
    <>
      <div>The count is {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  )
}
`,
      }}
    />
  )
}

export function Example4() {
  return (
    <Sandpack
      template="react"
      theme="dark"
      files={{
        '/App.js': `import { useState } from 'react'

function expensiveComputation() {
  console.log("expensive computation ran")
  return 0
}

export default function Counter() {
  const [count, setCount] = useState(expensiveComputation())
  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}`,
      }}
    />
  )
}

export function Example5() {
  return (
    <Sandpack
      template="react"
      theme="dark"
      files={{
        '/App.js': `import { useState } from 'react'

function expensiveComputation() {
  console.log("expensive computation ran")
  return 0
}

export default function Counter() {
  const [count, setCount] = useState(() => expensiveComputation())
  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}`,
      }}
    />
  )
}
