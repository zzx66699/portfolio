export default function Nav({href, section, className, hoverColor}) {
    return (
        <li className={className}>
            <a 
                href={href}
                // create a local CSS variable named --hover-color and set its value to whatever inside the hoverColor
                style={{"--hover-color": hoverColor}}
            > 
                {section} 
            </a>
        </li>
    )
}