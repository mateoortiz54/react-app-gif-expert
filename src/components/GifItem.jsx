

export const GifItem = (props) => {

    return (
        <div>
            <img src={props.url} alt={props.title} /> 
            <p>{props.title}</p>
        </div>
    )
}

