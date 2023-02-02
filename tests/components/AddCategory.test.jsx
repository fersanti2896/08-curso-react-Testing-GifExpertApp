import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    const category = 'Google';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <AddCategory newCategory={ () => {} }/> );

        expect( container ).toMatchSnapshot();
    });

    test('Debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory newCategory={ () => {} }/> );

        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'Gokú' } } );
        expect( input.value ).toBe('Gokú');
    });
});