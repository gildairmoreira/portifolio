import React from 'react'
import LogoBrasil from '../logos/LogoBrasil'
import SetaDown from '../logos/SetaDown'

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
