import React, { useState } from 'react';
import LogoBrasil from 'assets/componentesImagens/LogoBrasil';
import LogoUSA from 'assets/componentesImagens/LogoUSA';
import LogoSPA from 'assets/componentesImagens/LogoSPA';
import styles from './linguagem.module.scss';
import i18n from 'i18n/i18n.js';

interface ILanguageMenuProps
{
    handleLanguageChange: (language: string) => void;
    selectedLanguage: string;
}

interface ISeletorLinguaProps
{
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const LanguageMenu = ({ handleLanguageChange, selectedLanguage }: ILanguageMenuProps) =>
{
    
    return (
        <ul
            className={
                selectedLanguage === 'pt-br'
                    ? `${styles.languageMenu} ${styles.hidden}`
                    : styles.languageMenu
            }
        >
            <li>
                <span
                    
                    onClick={(e) =>
                    {
                        e.preventDefault();
                        handleLanguageChange('pt-br');
                        //aqui sera chamada a função para mudar a lingua para portugues
                    }}
                    aria-label='Selecionar idioma português do Brasil'
                >
                    <LogoBrasil />
                </span>
            </li>
            <li>
                <span
                   
                    onClick={(e) =>
                    {
                        e.preventDefault();
                        handleLanguageChange('en-us');
                        //aqui sera chamada a função para mudar a lingua para ingles
                    }}
                    aria-label='Selecionar idioma inglês'
                >
                    <LogoUSA />
                </span>
            </li>
            <li>
                <span
                    onClick={(e) =>
                    {
                        e.preventDefault();
                        handleLanguageChange('es-es');
                        //aqui sera chamada a função para mudar a lingua para espanhol
                    }}
                    aria-label='Selecionar idioma espanhol'
                >
                    <LogoSPA />
                </span>
            </li>
        </ul>

    );
};




export default function SeletorLingua({ isMenuOpen, setIsMenuOpen }: ISeletorLinguaProps)
{
    const [ selectedLanguage, setSelectedLanguage ] = useState('pt-br');
    const handleLanguageChange = (language: string) =>
    {
        setSelectedLanguage(language);
        setIsMenuOpen(false);
        console.log('Idioma portuguesaaaaassss')
    };

    

    return (
        <ul className={styles.lista__idiomas}>
            <li className={styles.item__idioma}>
                <span onClick={(e) => { e.preventDefault(); setIsMenuOpen(!isMenuOpen); }}>
                    {selectedLanguage === 'pt-br' ? (
                        console.log('Idioma portugues'),
                        <LogoBrasil />

                    ) : selectedLanguage === 'en-us' ? (
                        console.log('Idioma english'),
                        <LogoUSA />
                    ) : (
                        console.log('Idioma espano'),
                        <LogoSPA />
                    )}
                </span>
                {isMenuOpen && (
                    <LanguageMenu
                        handleLanguageChange={handleLanguageChange}
                        selectedLanguage={selectedLanguage}
                    />
                )}
            </li>
        </ul>
    )


};
