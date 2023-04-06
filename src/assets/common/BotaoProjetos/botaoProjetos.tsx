import React from 'react'
import styles from './botaoProjetos.module.scss'
import LogoGitHub from 'assets/componentesImagens/LogoGitHub';
import LogoLink from 'assets/componentesImagens/LogoLink';

interface BotaoProjetosProps{
    linkRepo:string;
    linkVer:string;
    gradienteVer:string;
    gradienteRepo:string;
}

export default function BotaoProjetos({ linkRepo, linkVer, gradienteVer, gradienteRepo }:BotaoProjetosProps)
{
    const BorderStyleVer = {
        background: `${gradienteVer}`
    }
    const BorderStyleRepo = {
        background: `${gradienteRepo}`
    }


    return (
        <div className={styles.projeto__botoes}>
            <a href={linkVer} className={styles.projeto__linkver} style={BorderStyleVer}>
                <span className={styles.icone}><LogoLink/></span>
                <span className={styles.text}>Visualizar</span>
            </a>
            <a href={linkRepo} className={styles.projeto__linkrepo} style={BorderStyleRepo}>
                <span className={styles.icone}><LogoGitHub/></span>
                <span className={styles.text}>Repositório</span>
                
            </a>
        </div>
    )
}
