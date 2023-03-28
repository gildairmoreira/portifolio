import React from 'react'
import './Button.scss';

interface BotaoProps
{
    icon: React.ReactNode;
    text: string;
    borderColor: string;
    onClick?: () => void;
    url?:string;
}

const Botao: React.FC<BotaoProps> = ({ icon, text, borderColor, onClick, url }) =>
{
    const AoClicado = () => {
        if (url)
        {
            window.open(url, '_blank'); // abre o link em uma nova aba
        }
        if (onClick)
        {
            onClick(); // chama a função de clique fornecida pelo usuário, se houver
        }

    }


    return (
        <button className="button" style={{ borderColor }} onClick={AoClicado} >
            <span className="icon">{icon}</span>
            <span className="text">{text}</span>
        </button>
    )
}

export default Botao
