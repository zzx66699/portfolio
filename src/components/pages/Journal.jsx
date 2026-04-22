import { journalData } from "../../data/journalData"
import MiniProjectCard from "../layout/MiniProjectCard"

export default function Journal() {

    const projectContainerEl = journalData.map( project => (
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
    ))

    return (
        <main className="journal__main">
            <div className="main-container">
                <h1 className="journal__heading">Learning Journal</h1>
                <p className="journal__description">Here is a collection of mini-projects developed during my studies at Scrimba, focusing on core JavaScript logic, responsive UI, and React. Feel free to explore the source code or view the live demos below. </p>
                <div className="journal__projects-container">
                    {projectContainerEl}
                </div>
            </div>
        </main>
    )
}