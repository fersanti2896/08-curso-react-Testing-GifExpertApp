import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ '' ]);
    
    /**
     * Función que agrega una categoría al arreglo de categorías.
     * @param {string} newCategory Ejemplo: Shrek
     */
    const onAddCategory = ( newCategory ) => {
        const cleanCategory = newCategory[0].toUpperCase() + newCategory.substring(1).toLowerCase();

        if (categories.includes(cleanCategory)) return;

        setCategories([ cleanCategory, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory newCategory={ onAddCategory }/>

            { categories.map( cat => ( <GifGrid key={ cat } category={ cat } /> ) )}
            
        </>
    )
}
