export default function Experience({experiences}) {
    return (
        <div className="experience">
            {experiences.map((item, index) => (
                <div key={index} className="experience__item">
                    <div className="experience__content">
                        <span className="experience__date text-highlight">{item.year}</span>
                        <h3 className="experience__org">{item.organization}</h3>
                        <p className="experience__title">{item.title}</p>
                        <p className="experience__description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}