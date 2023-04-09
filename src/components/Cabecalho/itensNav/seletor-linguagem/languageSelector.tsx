import React, { useState } from 'react';
import LogoBrasil from 'assets/componentesImagens/LogoBrasil';
import LogoUSA from 'assets/componentesImagens/LogoUSA';
import LogoSPA from 'assets/componentesImagens/LogoSPA';
import styles from './linguagem.module.scss';

interface ILanguageMenuProps
{
    handleLanguageChange: (language: string) => void;
    selectedLanguage: string;
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
                <a
                    href='/'
                    onClick={(e) =>
                    {
                        e.preventDefault();
                        handleLanguageChange('pt-br');
                    }}
                    aria-label='Selecionar idioma português do Brasil'
                >
                    <LogoBrasil />
                </a>
            </li>
            <li>
                <a
                    href='/'
                    onClick={(e) =>
                    {
                        e.preventDefault();
                        handleLanguageChange('en-us');
                    }}
                    aria-label='Selecionar idioma inglês'
                >
                    <LogoUSA />
                </a>
            </li>
            <li>
                <a
                    href='/'
                    onClick={(e) =>
                    {
                        e.preventDefault();
                        handleLanguageChange('es-es');
                    }}
                    aria-label='Selecionar idioma espanhol'
                >
                    <LogoSPA />
                </a>
            </li>
        </ul>
    );
};

export default function SeletorLingua () {
    const [ selectedLanguage, setSelectedLanguage ] = useState('pt-br');
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const handleLanguageChange = (language: string) =>
    {
        setSelectedLanguage(language);
        setIsMenuOpen(false);
    };

    const toggleMenu = () =>
    {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <ul className={styles.lista__idiomas}>
            <li className={styles.item__idioma}>
                <a href='/' onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
                    {selectedLanguage === 'pt-br' ? (
                        <LogoBrasil />
                    ) : selectedLanguage === 'en-us' ? (
                        <LogoUSA />
                    ) : (
                        <LogoSPA />
                    )}
                </a>
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
