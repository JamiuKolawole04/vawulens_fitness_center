
export const SectionHead = ({ icon, title, className }) => {
    return (
        <div className={`section__head d-flex align-items-center  ${className}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
    )
}
