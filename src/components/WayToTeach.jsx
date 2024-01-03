export default function WeyToTeach({title, description}){
    return(
        <li>
            <p>
                <strong>{title}</strong>
                {description}
            </p>
        </li>
    )
}