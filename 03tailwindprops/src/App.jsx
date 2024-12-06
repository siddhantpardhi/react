import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Siddhant",
    age: 22
  }
  return (
    <>
      <h1 className = "bg-purple-400 text-black p-4 rounded-xl mb-8" > Tailwind test</h1>
      <Card username = "Bumrah" sideTxt = "GOAT" number = "#93"/>
      <Card username = "Surya" sideTxt = "Legend" number = "#63"/>
    </>
  )
}

export default App
