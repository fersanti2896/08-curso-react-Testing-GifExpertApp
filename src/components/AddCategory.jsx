import { PropTypes } from "prop-types";
import { useState } from "react"

export const AddCategory = ( { newCategory } ) => {
    const [inputValue, setInputValue] = useState('');
    
    /**
     * Función que obtiene el valor del input.
     * @param {event} event.target 
     */
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    /**
     * Función que agrega el valor del input al arreglo de categorías.
     * @param {event} event 
     * @returns 
     */
    const onSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1 ) return;

        setInputValue('');
        newCategory(inputValue.trim()); 
    }

    return (
        <>
            <form onSubmit={ (event) => onSubmit(event) } aria-label="form">
                <input type="text"
                    placeholder="Buscar Gifs"
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    newCategory: PropTypes.func.isRequired
}