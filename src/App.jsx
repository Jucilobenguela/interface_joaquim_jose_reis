import { useState } from 'react'
import './App.css'

import NavHeader from './componentes/NavHeader'

import imageFundo from './assets/img_fundo.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='section_main'>
      <NavHeader/>
      <main>
        <div className='container_apresentation'>
          <h1>joaquim Jose Reis</h1>
          <h1>Cabelereiso</h1>
          <p>No Salão Joaquim José Reis, cada cliente é tratado como único. Nosso ambiente acolhedor e sofisticado foi pensado para oferecer o máximo de conforto e bem-estar.
             Utilizamos apenas produtos de alta qualidade, garantindo resultados incríveis e duradouros. Aqui, a sua satisfação é a nossa maior prioridade.</p>
        </div>
        <div></div>
        <div></div>
      </main>
    </section>
      
    </>
  )
}

export default App
