import Botao from 'assets/common/Botao/botao'
import MinhaFoto from 'assets/componentesImagens/MinhaFoto'
import React from 'react'
import styles from './sobreMim.module.scss'

import { FiDownloadCloud } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'


export default function SobreMim()
{
  return (
    <section className={styles.container} id='sobre'>

      <aside className={styles.container__left}>
        <div className={styles.foto}>
          <div className={styles.borda}></div>
          <MinhaFoto />
        </div>
      </aside>

      <aside className={styles.container__right}>

        <div className={styles.container__textos}>
          <h3>Sobre mim</h3>
          <h4>Minas Gerais, Brasil</h4>
          <p>
            Sou um jovem desenvolvedor front-end autodidata, apaixonado por transformar ideias em realidade com minhas habilidades em React e outras tecnologias.
          </p>
          <p>
            Apesar de não ter experiência formal no mercado, minha dedicação e habilidade de aprendizado me permitiram dominar essas habilidades em apenas 8 meses.

          </p>

          <p>
            Meus projetos mostram minha capacidade de trabalhar de forma independente e minha capacidade de transformar ideias em realidade.
          </p>
          <p>
            Estou ansioso para colaborar com uma equipe dedicada e contribuir para o sucesso de uma empresa, e continuar a aprender e crescer como desenvolvedor
          </p>
        </div>
        <div className={styles.container__botoes}>
          <Botao icon={<FiDownloadCloud className={styles.LogoDownload} />} text='Currículo' gradient='linear-gradient(236deg, rgba(26,35,44,1) 0%, rgba(0,215,255,1) 100%)' url='#curicoloooooooooooooooooooooooooooooo' />
          <Botao icon={<AiOutlineMail className={styles.LogoEmail} />} text='E-mail' gradient='linear-gradient(180deg, #1a232c, #ffffff 100%)' url="mailto:contato.gildair@gmail.com?subject=Interesse%20em%20seus%20servi%C3%A7os%20de%20programador%20Front-End" />
        </div>


      </aside>
    </section>
  )
}