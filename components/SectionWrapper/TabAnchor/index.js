const TabAnchor = ({title,children}) => {
    return ( 
            <a href={`#${title}`}>
                {children} {title}
            </a>
    );
}
export default TabAnchor;