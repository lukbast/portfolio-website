import "./project-tile.scss"

function ProjectTile ({img ,title, description, mobile, toggler}){
    return(
        <div onClick={toggler} className={mobile? "project-tile mobile": "project-tile"}>
            <img src={img} className="project-tile-image" alt="Project preview"/>
            <div className="project-tile-title">{title}</div>
            <div className="project-tile-description">{description}</div>
        </div>
        
    )
}


export default ProjectTile;