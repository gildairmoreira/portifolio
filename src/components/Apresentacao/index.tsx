import React from 'react'
import Botao from 'assets/common/Botoes/botao'
import LogoLinkedin from 'assets/componentesImagens/LogoLinkedin'
import ImagemApresentacao from 'assets/componentesImagens/ImagemApresentaçao'

export default function Apresentacao()
{
  const Clicado = void 0

  return (
    <main>
      <div>

        <h2>Olá, eu sou</h2>
        <h1>gildair moreira</h1>
        <h3>Desenvolvedor Front-end .</h3>

        <Botao icon={<LogoLinkedin/>} borderColor='#000000' text='Linkedinho' onClick={Clicado} url='#' />
        <Botao icon={<LogoLinkedin/>} borderColor='#f5f5f5' text='GitHub' onClick={Clicado} url='#' />

      </div>
      <ImagemApresentacao/>
      <div>
        
      </div>
    </main>
  )
}
