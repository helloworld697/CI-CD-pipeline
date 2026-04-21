import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/info')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 21: Basic Full Stack App</h1>
      {data ? (
        <div style={{ border: '1px solid green', padding: '20px' }}>
          <p>{data.message}</p>
          <small>App Version: {data.version}</small>
        </div>
      ) : <p>Connecting to backend...</p>}
    </div>
  )
}
export default App