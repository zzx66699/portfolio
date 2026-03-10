import { useParams } from "react-router-dom"
import { projectsData } from "../../data/projectsData"
export default function Project() {
    const { projectId } = useParams();

    const currentProject = projectsData.find(project => project.projectId === projectId);

    if (!currentProject) {
        return <h2 className="sec-pad">Project not found</h2>;
    }

    return (
        <main className="sec-pad">
            <div className="main-container">
                <h1>{currentProject.alt}</h1>
                <img 
                    src={currentProject.src} 
                    alt={currentProject.alt} 
                    style={{ width: "100%", borderRadius: "8px" }} 
                />
                <p>
                    Details for: <strong>{currentProject.projectId}</strong>
                </p>
            </div>
        </main>
    )
}