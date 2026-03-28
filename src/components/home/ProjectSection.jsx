import ProjectCard from "../layout/ProjectCard"
import { journalData } from "../../data/journalData"
export default function ProjectSection() {

    const projectEl = journalData.slice(0,3).map(project => 
        <ProjectCard
            key={project.header}
            header={project.header}
            src={project.src}
            alt={project.alt}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
            date={project.date}
            description={project.description}
            tags={project.tags}
        />
    )
    return (
        <div className="journal__projects-container">
            {projectEl}
        </div>

    )
}
