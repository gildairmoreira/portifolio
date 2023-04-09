import React from 'react'
import style from './apresentacao.module.scss';
import ImagemApresentacao from 'assets/componentesImagens/ImagemApresentaçao'
import Botao from 'assets/common/Botao/botao';

import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'

export default function Apresentacao()
{
  return (
    <main className={style.container} id='home'>
      <div className={style.container__left}>

        <div className={style.titulos}>
          <h2>Olá, eu sou</h2>
          <h1 className={style.container__h1}>Gildair moreira</h1>
          <h2>Desenvolvedor Front-end .</h2>
        </div>

        <div className={style.botoes}>
          <Botao icon={<FiLinkedin className={style.LogoLinkedin} />} gradient='linear-gradient(180deg, #1A232C 34.74%, rgba(16, 215, 226, 0) 216.09%)' text='LinkedIn' url='https://www.linkedin.com/in/gildair-moreira-420408241/' />

          <Botao icon={<FiGithub className={style.LogoGitHub} />} gradient='linear-gradient(to bottom right, #22BCDC  , #2A3443 96.09%)' text='GitHub' url='https://github.com/gildairmoreira' />
        </div>

      </div>

      <div className={style.container__right}>
        <ImagemApresentacao />
      </div>
    </main>
  )
}
