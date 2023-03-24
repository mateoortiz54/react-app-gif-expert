import {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory})=> {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();

        const inputV = inputValue.trim()
        // trim es para limpiar el elemento al final y al principio de espacios
        if (inputV.length <=1 ) return;

        onNewCategory(inputV)
        setInputValue('')
    }

    return (
        // <form onSubmit={(event) => onSubmit(event)}>    
        <form onSubmit={onSubmit} aria-label="form">    
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                // onChange={(event)=>onInputChange(event)}
                onChange={onInputChange} />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
