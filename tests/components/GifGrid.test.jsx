import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'América CF';

    test('Debe mostrar el loading inicialmente.', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/> );

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    });

    test('Debe de mostrar items cuando se cargan las imágenes mediante useFetchGifs.', () => { 
        const gifs = [ 
            {
                id: 'ABC',
                title: 'Club America',
                url: 'https://localhost/club-america.jpg'
            },
            {
                id: 'DCV',
                title: 'America Campeon',
                url: 'https://localhost/america-campeon.png'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category }/> );
        
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});