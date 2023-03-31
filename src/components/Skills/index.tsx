import LogoBootstrap from 'assets/componentesImagens/LogoBootstrap';
import LogoCss from 'assets/componentesImagens/LogoCss';
import LogoHtml from 'assets/componentesImagens/LogoHtml';
import LogoJs from 'assets/componentesImagens/LogoJs';
import LogoNodejs from 'assets/componentesImagens/LogoNode';
import LogoReact from 'assets/componentesImagens/LogoReact';
import LogoSass from 'assets/componentesImagens/LogoSass';
import LogoTs from 'assets/componentesImagens/LogoTs';
import LogoWP from 'assets/componentesImagens/LogoWP';
import LogoGit from 'assets/componentesImagens/LogoGit';
import React from 'react'
import "./skills.scss";


interface Skill
{
    title: string;
    image: React.ReactElement;
}

const skills: Skill[] = [
    { title: "HTML", image: <LogoHtml/> },
    { title: "CSS", image: <LogoCss/> },
    { title: "JavaScript", image: <LogoJs/> },
    { title: "React JS", image: <LogoReact/> },
    { title: "TypeScript", image: <LogoTs/> },
    { title: "Node JS", image: <LogoNodejs/> },
    { title: "GIT", image: <LogoGit/> },
    { title: "Sass", image: <LogoSass/> },
    { title: "Bootstrap", image: <LogoBootstrap/> },
    { title: "WordPress", image: <LogoWP /> },
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