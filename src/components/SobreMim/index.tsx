import React from 'react'
import Botao from 'assets/common/Botao/botao'
import MinhaFoto from 'assets/componentesImagens/MinhaFoto'
import styles from './sobreMim.module.scss'

import { FiDownloadCloud } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'


export default function SobreMim()
{
  const { t } = useTranslation()
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
          <h3>{t('Sobre mim')}</h3>

          <h4>{t('Estado')}</h4>
          <p>{t('sobreParagrafo1')}</p>

          <p>{t('sobreParagrafo2')}</p>

          <p>{t('sobreParagrafo3')}</p>
        </div>

        <div className={styles.container__botoes}>
          <Botao icon={<FiDownloadCloud className={styles.LogoDownload} />} text={t('Curriculo')} gradient='linear-gradient(236deg, rgba(26,35,44,1) 0%, rgba(0,215,255,1) 100%)' url='#curicoloooooooooooooooooooooooooooooo' />
          <Botao icon={<AiOutlineMail className={styles.LogoEmail} />} text={t('Email')} gradient='linear-gradient(180deg, #1a232c, #ffffff 100%)' url="mailto:contato.gildair@gmail.com?subject=Interesse%20em%20seus%20servi%C3%A7os%20de%20programador%20Front-End" />
        </div>


      </aside>
    </section>
  )
}