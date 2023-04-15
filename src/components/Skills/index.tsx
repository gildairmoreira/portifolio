import React from 'react'
import style from "./skills.module.scss";
import SkillList from './ListaSkill/ListSkill';
import { useTranslation } from 'react-i18next';


export default function Skills()
{
    const {t} = useTranslation()
    return (
        <section className={style.skills} id='skills'>
            <h2 className={style.titulo__principal}>{t('Skills')}</h2>
            <SkillList/>
        </section>
    );
};
