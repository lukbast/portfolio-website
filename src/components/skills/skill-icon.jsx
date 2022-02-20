import "./skills-icon.scss"

function SkillsIcon({ico, text}){
    return(
        <div className="skills-icon">
            <img className="skills-icon-icon" src={ico} alt={text + "icon"} />
            <div className="skills-icon-title">{text}</div>
        </div>
    )
}

export default SkillsIcon