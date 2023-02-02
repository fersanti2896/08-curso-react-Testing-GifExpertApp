import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {
    const title = 'El gato con Botas GIF';
    const url = 'https://giphy.com/gifs/shrek-peacocktv-TIGP3k4gNAqvza2KJK';
  

    test('Debe hacer match con el snapshot.', () => {
        const { container } = render(<GifGridItem title={ title } url={url} />);

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el title "El gato con Botas GIF".', () => {
        render(<GifGridItem title={title} url={ url }/>);

        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe mostrar la imagen con la URL y el ALT indicado.', () => {
        render(<GifGridItem title={ title } url={ url }/>);
        
        const { src, alt } = screen.getByRole('img');
        
        expect( src ).toContain( url );
        expect( alt ).toContain( title);
    });
});