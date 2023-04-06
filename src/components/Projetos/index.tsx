import React, { ReactElement } from 'react'
import styles from './Projetos.module.scss'
//import './Projetos.scss'
import img1 from 'assets/images/organo.png'
import BotaoProjetos from 'assets/common/BotaoProjetos/botaoProjetos';


interface ProjetoProps
{
  nome: string;
  tecs: string[];
  linkVer: string;
  linkRepo: string;
}

const images = [ img1 ]

const projetos: ProjetoProps[] = [
  {
    nome: 'organo',
    tecs: [ 'React', 'Node.js', 'MongoDB' ],
    linkVer: 'https://www.example.com/projeto1',
    linkRepo: 'https://www.github.com/projeto1',
  },
  {
    nome: 'Projeto 2',
    tecs: [ 'Angular', 'Firebase' ],
    linkVer: 'https://www.example.com/projeto2',
    linkRepo: 'https://www.github.com/projeto2',
  },
  {
    nome: 'Projeto 2',
    tecs: [ 'Angular', 'Firebase' ],
    linkVer: 'https://www.example.com/projeto2',
    linkRepo: 'https://www.github.com/projeto2',
  },
  {
    nome: 'Projeto 2',
    tecs: [ 'Angular', 'Firebase' ],
    linkVer: 'https://www.example.com/projeto2',
    linkRepo: 'https://www.github.com/projeto2',
  },
  {
    nome: 'Projeto 2',
    tecs: [ 'Angular', 'Firebase' ],
    linkVer: 'https://www.example.com/projeto2',
    linkRepo: 'https://www.github.com/projeto2',
  },
  {
    nome: 'Projeto 2',
    tecs: [ 'Angular', 'Firebase' ],
    linkVer: 'https://www.example.com/projeto2',
    linkRepo: 'https://www.github.com/projeto2',
  },
  {
    nome: 'Projeto 2',
    tecs: [ 'Angular', 'Firebase' ],
    linkVer: 'https://www.example.com/projeto2',
    linkRepo: 'https://www.github.com/projeto2',
  },
  {
    nome: 'Projeto 2',
    tecs: [ 'Angular', 'Firebase' ],
    linkVer: 'https://www.example.com/projeto2',
    linkRepo: 'https://www.github.com/projeto2',
  },
]




export default function Projetos():ReactElement
{
  return (
    <section className={styles.container}>
      <h2 className={styles.projeto__titulo}>Projetos</h2>

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
                    <span className={styles.tecs__tecnologia}>Tecnologias</span> <span className={styles.tecs__tecs}>: {projeto.tecs.join(', ')}</span>
                  </div>
                </div>
                <BotaoProjetos linkVer={projeto.linkVer} linkRepo={projeto.linkRepo} gradienteRepo='yellow, green' gradienteVer='blue, red'/>
              </div>
            ))}
          </div>
        </section>

     
    </section>
  )
}
