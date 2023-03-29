import React from 'react'
import style from './apresent.module.scss';
import Botao from 'assets/common/Botoes/botao'
import LogoLinkedin from 'assets/componentesImagens/LogoLinkedin'
import ImagemApresentacao from 'assets/componentesImagens/ImagemApresentaçao'
import LogoGitHub from 'assets/componentesImagens/LogoGitHub'

export default function Apresentacao()
{
  const Clicado = void 0

  return (
    <main className={style.container}>
      <div className={style.container__texts}>

        <h2>Olá, eu sou</h2>
        <h1>Gildair moreira</h1>
        <h3>Desenvolvedor Front-end .</h3>

        <div className="botoes">
          <Botao icon={<LogoLinkedin />} gradient=""  text='LinkedIn' onClick={Clicado} url='#' />


          {/* <Botao icon={<LogoGitHub />} borderImage='#f5f5f5' text='GitHub' onClick={Clicado} url='#' /> */}
        </div>

      </div>
      <div className='container__image'>
        <ImagemApresentacao />
      </div>
    </main>
  )
}
