import { useState } from 'react'

import './App.css'
import RecordsTable from './Record'

function App() {
  const [count, setCount] = useState(0)

  return (
      <RecordsTable/>
  )
}

export default App
