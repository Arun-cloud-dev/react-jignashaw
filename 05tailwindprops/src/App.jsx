import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  let myObj = {
    name :'arun',
    age :28,
    address:{
      city:'chennai',
      state: 'TN',
      country: "IN"
    }
  }


  let newArr = [1,2,3,4,5,6,7,8,9]
  
  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with Tailwind</h1>
    <Card  />
    <Card/>
    </>
  )
}

export default App
