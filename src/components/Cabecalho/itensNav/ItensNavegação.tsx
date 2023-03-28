import React from 'react'
import LogoBrasil from 'assets/componentesImagens/LogoBrasil'
import SetaDown from 'assets/componentesImagens/SetaDown'

export default function ItensNavegação()
{
    return (
        <>
            <li>Sobre mim</li>
            <li>Skills</li>
            <li>Formação</li>
            <li>Projetos</li>
            <li>Contato</li>
            <li>
                <a href='/#'>
                    <LogoBrasil />
                    <SetaDown />
                </a>
            </li>
        </>
    )
}
