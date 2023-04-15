import React from 'react'
import styles from './Button.module.scss';

interface BotaoProps
{
    icon: React.ReactNode;
    text: string;
    gradient: string;
    url: string

}


export default function Botao ({ icon, text, gradient, url }:BotaoProps)
{

    const backgroundStyle = {
        backgroundImage: gradient
    }

    return (
        <a
            href={url}
            target='_blank'
            rel="noopener noreferrer"
            className={styles.button}
            style={backgroundStyle}
        >
            <span className={styles.icon}>{icon}</span>
            <span className={styles.text}>{text}</span>
        </a>

    )
}
