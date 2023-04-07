import React from 'react'
import styles from './botaoProjetos.module.scss'
import {FiLink,FiGithub} from 'react-icons/fi'


interface BotaoProjetosProps{
    linkRepo:string;
    linkVer:string;
}

export default function BotaoProjetos({ linkRepo, linkVer}:BotaoProjetosProps)
{
    return (
        <div className={styles.projeto__botoes}>
            <a href={linkVer} className={styles.projeto__linkver} target='_blank' rel="noreferrer">
                <span className={styles.icone}><FiLink className={styles.LogoLink} /></span>
                <span className={styles.text}>Visualizar</span>
            </a>
            <a href={linkRepo} className={styles.projeto__linkrepo} target='_blank' rel="noreferrer">
                <span className={styles.icone}><FiGithub className={styles.LogoGitHub} /></span>
                <span className={styles.text}>Repositório</span>
                
            </a>
        </div>
    )
}
