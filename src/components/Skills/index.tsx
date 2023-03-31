import LogoBootstrap from 'assets/componentesImagens/LogoBootstrap';
import LogoCss from 'assets/componentesImagens/LogoCss';
import LogoGitHub from 'assets/componentesImagens/LogoGitHub';
import LogoHtml from 'assets/componentesImagens/LogoHtml';
import LogoJs from 'assets/componentesImagens/LogoJs';
import LogoNodejs from 'assets/componentesImagens/LogoNode';
import LogoReact from 'assets/componentesImagens/LogoReact';
import LogoSass from 'assets/componentesImagens/LogoSass';
import LogoTs from 'assets/componentesImagens/LogoTs';
import LogoWP from 'assets/componentesImagens/LogoWP';
import React from 'react'
import "./skills.scss";


interface Skill
{
    title: string;
    image: React.ReactElement;
}

const skills: Skill[] = [
    { title: "Skill 1", image: <LogoHtml/> },
    { title: "Skill 2", image: <LogoCss/> },
    { title: "Skill 3", image: <LogoJs/> },
    { title: "Skill 4", image: <LogoReact/> },
    { title: "Skill 5", image: <LogoTs/> },
    { title: "Skill 6", image: <LogoNodejs/> },
    { title: "Skill 7", image: <LogoGitHub/> },
    { title: "Skill 8", image: <LogoSass/> },
    { title: "Skill 9", image: <LogoBootstrap/> },
    { title: "Skill 10", image: <LogoWP /> },
];

const Skills: React.FC = () =>
{
    return (
        <div className="skills">
            <h2 className="titulo__principal">SKILLS</h2>
            <div className="skills__grid">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`skill ${index === 0 ? "first" : ""} 
                                ${index === 4 ? "last-of-first-row" : ""}
                                ${index === 5 ? "first-of-second-row" : ""}
                                ${index === skills.length - 1 ? "last" : ""}
                    `}
                    >

                        <div className="skill__image">
                            {skill.image}
                            <div className="skill__title">{skill.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills; 