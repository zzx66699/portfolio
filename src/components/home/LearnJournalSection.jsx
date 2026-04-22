import MiniProjectCard from "../layout/MiniProjectCard"
import { journalData } from "../../data/journalData"
export default function LearnJournalSection() {

    const projectEl = journalData.slice(-3,).map(project => 
        <MiniProjectCard
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
