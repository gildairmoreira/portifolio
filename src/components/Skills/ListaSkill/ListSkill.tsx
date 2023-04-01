import style from '../skills.module.scss';
import LogoHtml from 'assets/componentesImagens/LogoHtml';
import LogoCss from 'assets/componentesImagens/LogoCss';
import LogoJs from 'assets/componentesImagens/LogoJs';
import LogoReact from 'assets/componentesImagens/LogoReact';
import LogoTs from 'assets/componentesImagens/LogoTs';
import LogoNodejs from 'assets/componentesImagens/LogoNode';
import LogoGit from 'assets/componentesImagens/LogoGit';
import LogoSass from 'assets/componentesImagens/LogoSass';
import LogoBootstrap from 'assets/componentesImagens/LogoBootstrap';
import LogoWP from 'assets/componentesImagens/LogoWP';

export interface Skill
{
    title: string;
    image: React.ReactElement;
}

export const skills: Skill[] = [
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
              ${index === 4 ? style[ 'last-of-first-row' ] : ""}
              ${index === 5 ? style[ 'first-of-second-row' ] : ""}
              ${index === skills.length - 1 ? style.last : ""}
          `}
                >
                    <div className={style.skill__image}>
                        {skill.image}
                        <div className={style.skill__title}>{skill.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillList;