import React from 'react'
import style from "./skills.module.scss";
import SkillList from './ListaSkill/ListSkill';


export default function Skills()
{
    return (
        <section className={style.skills} id='skills'>
            <h2 className={style.titulo__principal}>SKILLS</h2>
            <SkillList/>
        </section>
    );
};
