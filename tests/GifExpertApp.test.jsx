import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('Debe hacer match con el snapshot.', () => { 
        const { container } = render( <GifExpertApp /> );

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar en un h1 GifExpertApp como título.', () => {
        render( <GifExpertApp /> );

        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toBe('GifExpertApp');
    });
});