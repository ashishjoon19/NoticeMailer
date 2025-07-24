import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NoticeForm from './NoticeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NoticeForm />
    </>
  )
}

export default App
