import "./about-me.scss"

import { aboutMe, informalEducation, courses, tryhackme } from "./content"

function AboutMe(){

    return(
        <>  
            <section id="about-me" className="about-me">

                <h2 className="about-me-header">About me</h2>

                <div className="about-me-field">
                    {aboutMe}
                </div>

                <h3 className="about-me-subheader">Formal education</h3>

                <div className="about-me-field">
                    <div className="about-me-field-line">
                        <span className="about-me-field-line-text">WSB in Bydgoszcz</span><span className="about-me-field-line-text">Computer science in business  - engineer level degree</span>
                    </div>
                    <div className="about-me-field-line">
                        <span className="about-me-field-line-text sub">2019-now</span><span className="about-me-field-line-text sub">Relevant coursework: database systems, software engineering, networking, InfoSec,
web development, business needs analysis, IT project management</span>
                    </div>
                </div>

                <h3 className="about-me-subheader">Informal education</h3>
                <div className="about-me-field">
                    {informalEducation}
                    <ul>
                        {courses.map(item => <li><a className="about-me-link" href={item[1]}>{item[0]}</a></li>)}
                    </ul>
                    <div>{tryhackme}</div>
                        
                        <a className="tryhackme-link" href="https://tryhackme.com/p/lukaszb">
                            <img src="https://tryhackme-badges.s3.amazonaws.com/lukaszb.png" alt="TryHackMe"/>
                        </a>
                </div>
            </section>
            
        </>
    )   
}


export default AboutMe