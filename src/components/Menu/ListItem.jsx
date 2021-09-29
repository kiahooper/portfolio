export default function ListLink(props) {

    const { clickTo, title, setMenuOpen } = props; 
    return (
        <li onClick={()=>setMenuOpen(false)}>
            <a href={clickTo}>{title}</a>
        </li>
    )
}
