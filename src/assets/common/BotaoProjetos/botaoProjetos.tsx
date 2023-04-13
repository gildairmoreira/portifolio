import React from 'react'
import styles from './botaoProjetos.module.scss'
import {FiLink,FiGithub} from 'react-icons/fi'


interface BotaoProjetosProps{
    linkRepo:string;
    linkVer:string;
    textoVisualizar:string;
    textoRepositório:string;
}

export default function BotaoProjetos({ linkRepo, linkVer,textoVisualizar,textoRepositório}:BotaoProjetosProps)
{
    return (
        <div className={styles.projeto__botoes}>
            <a href={linkVer} className={styles.projeto__linkver} target='_blank' rel="noreferrer">
                <span className={styles.icone}><FiLink className={styles.LogoLink} /></span>
                <span className={styles.text}>{textoVisualizar}</span>
            </a>
            <a href={linkRepo} className={styles.projeto__linkrepo} target='_blank' rel="noreferrer">
                <span className={styles.icone}><FiGithub className={styles.LogoGitHub} /></span>
                <span className={styles.text}>{textoRepositório}</span>
                
            </a>
        </div>
    )
}
