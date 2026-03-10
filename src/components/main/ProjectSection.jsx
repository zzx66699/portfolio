import ProjectItem from "./ProjectItem"
import { projectsData } from "../../data/projectsData"
export default function ProjectSection() {

    const projectEl = projectsData.map(project => 
        <ProjectItem
            key={project.projectId}
            projectId={project.projectId}
            src={project.src}
            alt={project.alt}
        />
    )
    return (
        <div className="projects-collection">
            {projectEl}
        </div>

    )
}
