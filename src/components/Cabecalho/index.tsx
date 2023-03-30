import React from 'react';
import LogoLetraG from 'assets/componentesImagens/LogoLetraG'
import styles from './cabecalho.module.scss'
import ItensNavegação from './itensNav/ItensNavegação'


export default function Cabecalho()
{

  return (
    <header className={styles.cabecalho}>
      <div>
        <LogoLetraG />
        <h3>Portifólio</h3>
      </div>
      
      <nav className={styles.cabecalho__navegação}>
          <ItensNavegação/>
      </nav>

    </header>
  )
}
