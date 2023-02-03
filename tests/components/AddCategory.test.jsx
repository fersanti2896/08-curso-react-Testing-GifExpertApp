import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    const inputValue = 'Shrek';
    const newCategory = jest.fn();

    test('Debe hacer match con el snapshot.', () => {
        const { container } = render( <AddCategory newCategory={ newCategory }/> );

        expect( container ).toMatchSnapshot();
    });

    test('Debe de cambiar el valor de la caja de texto.', () => { 
        render( <AddCategory newCategory={ () => {} }/> );

        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: inputValue } } );
        expect( input.value ).toBe(inputValue);
    });

    test('Debe de llamar newCategory si el input tiene el valor.', () => {       
        render( <AddCategory newCategory={ newCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( newCategory ).toHaveBeenCalled();
        expect( newCategory ).toHaveBeenCalledTimes(1);
        expect( newCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('No debe de llamar el newCategory si el input está vacío.', () => { 
        const newCategory = jest.fn();
        render( <AddCategory newCategory={ newCategory }/> );

        const form = screen.getByRole('form');
        
        fireEvent.submit( form );
        expect( newCategory ).toHaveBeenCalledTimes(0);
    });
});