import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /**
     * Funcón que obtiene las imagenes y la actualiza al useState.
     */
    const getImages = async() => {
        const newImages = await getGifs( category );

        setImages(newImages);
        setIsLoading(false);
    } 

    useEffect(() => {
        getImages();    
    }, []);

    return {
        images,
        isLoading
    }
}
