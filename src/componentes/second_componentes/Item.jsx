function Item({url, text}) {
    return (
        <ul className="icon">
            <li>
                <a href={url}>{text}</a>
            </li>
        </ul>
    )
}
export default Item