import PropTypes from 'prop-types';

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h5>{ category }</h5>
            { isLoading && (<h5>Cargando...</h5>) }

            <div className='card-grid'>
                { 
                    images.map( (image) => ( 
                        <GifGridItem key={ image.id } 
                                     title={ image.title }
                                     url={ image.url } /> 
                    ) ) 
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

GifGrid.defaultProps = {
    category: 'Shrek'
}
