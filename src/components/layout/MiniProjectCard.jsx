export default function MiniProjectCard({date, header, src, alt, liveLink, codeLink, description, tags}) {
    return (
        <article className="mini-project-card" >
            <div className="project-card__img-container">
                <img src={src} alt={alt} loading="lazy" className="project-img"></img>
            </div>
            
            <time>{date}</time>

            <div className="project-card__content">
                <h3 className="project-card__title">{header}</h3>
                <p className="project-card__description">{description}</p>
            </div>

            <div className="project-card__tags">
                {
                    tags.map( (tag, index) => (
                        <span key={index} className={`skill-tag ${tag.type}`}>
                            {tag.name}
                        </span>
                    ))
                }
            </div>

            <div className="project-card__actions">
                <a
                    href={codeLink}
                    className="btn btn-med btn-full-width btn-green"
                    target="_blank"
                >
                    <i className="fab fa-github" aria-hidden="true"></i> View Code
                </a>
                <a
                    href={liveLink}
                    className="btn btn-med btn-full-width btn-green"
                    target="_blank"
                    >
                    <i className="fas fa-eye" aria-hidden="true"></i> Live Demo
                </a>

            </div>


        </article>

    )
}