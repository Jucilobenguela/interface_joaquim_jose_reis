import { useState } from 'react'
import '../../App.css'
import Slides from '../../componentes/Slides'
import NavHeader from '../../componentes/NavHeader'



function Home() {

  return (
    <>
    <section className='section_main'>
      <NavHeader/>
      <main className='main'>
        <div className='container_apresentation'>
          <h1>joaquim Jose Reis</h1>
          <h1>Cabelereiros</h1>
          <p>No Salão Joaquim José Reis, cada cliente é tratado como único. Nosso ambiente acolhedor e sofisticado foi pensado para oferecer o máximo de conforto e bem-estar.
             Utilizamos apenas produtos de alta qualidade, garantindo resultados incríveis e duradouros. Aqui, a sua satisfação é a nossa maior prioridade.</p>
        </div>
        <div className='destaque'>
          <Slides/>

        </div>
        <div></div>
      </main>
    </section>
      
    </>
  )
}

export default Home