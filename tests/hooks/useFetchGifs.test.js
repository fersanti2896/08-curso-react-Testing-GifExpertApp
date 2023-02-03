import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => { 
    test('Debe de regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('Shrek') );
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('Debe de retornar un arreglo de imagenes e isLoading en false.', async() => { 
        const { result } = renderHook( () => useFetchGifs('Shrek') );
        
        /* waitFor hace que espere que el resultado del arreglo de imágenes sea mayor a 0  */
        await waitFor( 
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
});