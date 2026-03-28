export default function Section({ title, description, sectionColor, children, id }) {

    return (
        <section className="section-padding" style={{"--section-color": sectionColor}} id={id}>
            <div className="main-container">
                <div className="section__header">
                    <h2 className="section__header-main">{title}</h2>

                    <p className="section__header-sub">{description}</p>
                </div>

                {children}
            </div>
        </section>
    );
}