import style from '../skills.module.scss';
import LogoHtml from 'assets/componentesImagens/skills/LogoHtml';
import LogoCss from 'assets/componentesImagens/skills/LogoCss';
import LogoJs from 'assets/componentesImagens/skills/LogoJs';
import LogoReact from 'assets/componentesImagens/skills/LogoReact';
import LogoTs from 'assets/componentesImagens/skills/LogoTs';
import LogoNodejs from 'assets/componentesImagens/skills/LogoNode';
import LogoGit from 'assets/componentesImagens/skills/LogoGit';
import LogoSass from 'assets/componentesImagens/skills/LogoSass';
import LogoBootstrap from 'assets/componentesImagens/skills/LogoBootstrap';
import LogoWP from 'assets/componentesImagens/skills/LogoWP';

export interface SkillProps
{
    title: string;
    image: React.ReactElement;
}

export const skills: SkillProps[] = [
    { title: "HTML", image: <LogoHtml /> },
    { title: "CSS", image: <LogoCss /> },
    { title: "JavaScript", image: <LogoJs /> },
    { title: "React JS", image: <LogoReact /> },
    { title: "TypeScript", image: <LogoTs /> },
    { title: "Node JS", image: <LogoNodejs /> },
    { title: "GIT", image: <LogoGit /> },
    { title: "Sass", image: <LogoSass /> },
    { title: "Bootstrap", image: <LogoBootstrap /> },
    { title: "WordPress", image: <LogoWP /> },
];

const SkillList: React.FC = () =>
{
    return (
        <div className={style.skills__grid}>
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`${style.skill} ${index === 0 ? style.first : ""} 
                    ${index === skills.length - 1 ? style.last : ""}
                    `}
                    //${index === 4 ? style[ 'last-of-first-row' ] : ""} //Barra azul em Cada Linha de SKILS
                   // ${index === 5 ? style[ 'first-of-second-row' ] : ""}
                    >
                    <div className={style.skill__image}>
                        {skill.image}
                    </div>
                    
                    <div className={style.skill__title}>{skill.title}</div>
                </div>
            ))}
        </div>
    );
};

export default SkillList;