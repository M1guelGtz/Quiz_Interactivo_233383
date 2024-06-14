import { useState } from 'react'
import './App.css'
import SectionForm from './Components/Organisms/SectionForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SectionForm text='Cantidad de preguntas' type='number'></SectionForm>
    </>
  )
}

export default App
