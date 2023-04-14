import React from 'react'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import styles from './Rodape.module.scss'
import { useTranslation } from 'react-i18next';

export default function Rodape()
{
  const { t } = useTranslation()

  const linkDiscord = 'https://discordapp.com/users/946179480576229386';
  const linkWhatsap = 'https://api.whatsapp.com/send?phone=31997831239&text=Olá, vi que você é um programador front-end. Está disponível para projetos? Se sim, envie-me uma mensagem.';

  return (
    <footer className={styles.rodape__container}>
      <div className={styles.rodape__textos}>
        <p>© 2023 - {t('Criado utilizando')} <a href='https://www.figma.com/file/85lALiVeWhxE8RNvxSaKBI/Meu-Portifolio?node-id=0%3A1&t=CU1WuYIPQCZE53lU-1' className={styles.texto__criado} target='_blank' rel="noreferrer" >Figma</a> {t('e')} <a href='https://www.linkedin.com/in/gildair-moreira-420408241/' target='_blank' className={styles.texto__desenvolvido} rel="noreferrer">{t('Desenvolvido')}</a> {t('Por')}  Gildair</p>
      </div>
      <div className={styles.rodape__redes}>
        <ul className={styles[ 'lista__redes-sociais' ]}>
          <li>
            <a href={linkDiscord} target="_blank" rel="noopener noreferrer">
              <BsDiscord className={styles.LogosRodape} />
            </a>
          </li>
          <li>
            <a href="https://github.com/gildairmoreira" rel="noopener noreferrer" target='_blank'>
              <AiFillGithub className={styles.LogosRodape} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gildairmoreira/" rel="noopener noreferrer" target='_blank'>
              <AiFillInstagram className={styles.LogosRodape} />
            </a>
          </li>
          <li>
            <a href={linkWhatsap} rel="noopener noreferrer" target='_blank'>
              <IoLogoWhatsapp className={styles.LogosRodape} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
