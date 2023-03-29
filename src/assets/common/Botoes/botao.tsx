import React from 'react'
import style from './Button.module.scss';

interface BotaoProps {
    icon: React.ReactNode;
    text: string;
    gradient: string;
    onClick?: () => void;
    url?: string;
}


const Botao: React.FC<BotaoProps> = ({ icon, text, gradient, onClick, url }) =>
{
    const AoClicado = () => {
        if (url) {
            window.open(url, '_blank'); // abre o link em uma nova aba
        }

        if (onClick) {
            onClick(); // chama a função de clique fornecida pelo usuário, se houver
        }
    }
    return (
        <button
            className={style.button}
             
            onClick={AoClicado}
        >
            <span className={style.icon}>{icon}</span>
            <span className="text">{text}</span>
        </button>
    )
}

export default Botao
