import React, { ReactElement } from 'react'
import styles from './Projetos.module.scss'
//import './Projetos.scss'
import img1 from 'assets/images/organo.png'
import img2 from 'assets/images/cinetag.png'
import img3 from 'assets/images/site-blog-pesoal.png';
import img4 from 'assets/images/aluraSpace.png';
import img5 from 'assets/images/moni-bank.png';
import img6 from 'assets/images/mochila.png';
import img7 from 'assets/images/numero-secreto.png';
import img8 from 'assets/images/apeperia.png';
import img9 from 'assets/images/frutaefruto.png';
import BotaoProjetos from 'assets/common/BotaoProjetos/botaoProjetos';
import { useTranslation } from 'react-i18next';


interface ProjetoProps
{
  nome: string;
  tecs: string[];
  linkVer: string;
  linkRepo: string;
}

const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9]






export default function Projetos():ReactElement
{
  const {t} = useTranslation()
  const projetos: ProjetoProps[] = [
    {
      nome: t('organo'),
      tecs: [ 'React', 'TypeScript', 'HTML', 'Css' ],
      linkVer: 'https://projeto-orgono-ts.vercel.app/ ',
      linkRepo: 'https://github.com/gildairmoreira/projeto-orgono-ts',
    },
    {
      nome: t('cine tag'),
      tecs: [ 'React', 'HTML', 'Sass', 'JavaScript', 'Json' ],
      linkVer: 'https://projeto-cine-tag.vercel.app/',
      linkRepo: 'https://github.com/gildairmoreira/projeto-cineTag',
    },
    {
      nome: t('blog pessoal'),
      tecs: [ 'React', 'Routes', 'HTML', 'Css', 'JavaScript' ],
      linkVer: 'https://projeto-site-blog-ten.vercel.app/',
      linkRepo: 'https://github.com/gildairmoreira/projeto-site-blog',
    },
    {
      nome: t('alura space'),
      tecs: [ 'React', 'HTML', 'Sass', 'JavaScript' ],
      linkVer: 'https://projeto-alura-space.vercel.app/',
      linkRepo: 'https://github.com/gildairmoreira/projeto-aluraSpace',
    },
    {
      nome: t('moni bank'),
      tecs: [ 'HTML', 'Css', 'JavaScript', 'Api Via cep', 'RegEX' ],
      linkVer: 'https://projeto-monibak-cadastro.vercel.app/',
      linkRepo: 'https://github.com/gildairmoreira/projeto-monibak-cadastro',
    },
    {
      nome: t('mochila de viagem'),
      tecs: [ 'HTML', 'Css', 'JavaScript', 'Local Storage' ],
      linkVer: 'https://projeto-mochila-de-viagem-rouge.vercel.app/',
      linkRepo: 'https://github.com/gildairmoreira/projeto-mochila-de-viagem',
    },
    {
      nome: t('numero secreto'),
      tecs: [ 'HTML', 'Css', 'JS', 'Api de Reconhecer voz' ],
      linkVer: 'https://projeto-numero-secreto-ten.vercel.app/',
      linkRepo: 'https://github.com/gildairmoreira/projeto-numero-secreto',
    },
    {
      nome: t('apeperia'),
      tecs: [ 'HTML', 'Css' ],
      linkVer: 'https://projeto-apeperia-liart.vercel.app/',
      linkRepo: 'https://github.com/gildairmoreira/projeto-apeperia',
    },
    {
      nome: t('fruta & fruto'),
      tecs: [ 'HTML', 'Css', 'JS', 'Bootstrap' ],
      linkVer: 'https://projeto-fruto-fruta-bootstrap.vercel.app/',
      linkRepo: 'https://github.com/gildairmoreira/projeto-fruto-fruta-Bootstrap',
    }
  ]



  
  return (
    <section className={styles.container} id='projetos'>
      <h2 className={styles.projeto__titulo}>{t('Projetos')}</h2>

        <section className={styles.container}>
          <div className={styles.projetos}>
            {projetos.map((projeto, index) => (
              <div className={styles.projeto} key={index}>
                <div className={styles.projeto__imagem}>
                  <img src={images[index]} alt={projeto.nome} />
                </div>
                <div className={styles.projeto__informacoes}>
                  <h3 className={styles.projeto__nome}>{projeto.nome}</h3>
                  <div className={styles.projeto__tecs}>
                    <span className={styles.tecs__tecnologia}>{t('Tecnologias')}</span> <span className={styles.tecs__tecs}>: {projeto.tecs.join(', ')}</span>
                  </div>
                </div>
                <BotaoProjetos textoVisualizar={t('Visualizar')} textoRepositório={t('Repositório')} linkVer={projeto.linkVer} linkRepo={projeto.linkRepo} />
              </div>
            ))}
          </div>
        </section>

     
    </section>
  )
}
