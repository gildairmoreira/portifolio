import logo_G from 'assets/icons/Logo.svg'
import logo_BRA from 'assets/icons/BRA.svg'
import seta_baixo from 'assets/icons/arrow_down.svg'
import styles from './cabecalho.module.scss'

export default function Cabecalho()
{
  return (
    <header className={styles.cabecalho}>
      <div>
        <img src={logo_G} alt="letra G" />
        <h3>Portifólio</h3>
      </div>
      <nav className={styles.cabecalho__navegação}>
        <ul>
          <li>Sobre mim</li>
          <li>Skills</li>
          <li>Formação</li>
          <li>Projetos</li>
          <li>Contato</li>
          <li>
            <a href='/#'>
              <img src={logo_BRA} alt="bandeira do brasil" />
              <img src={seta_baixo} alt="abrir menu" />
            </a>
          </li>
        </ul>
        
      </nav>
    </header>
  )
}
