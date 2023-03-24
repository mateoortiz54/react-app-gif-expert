import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GifItem', () => {

    const title = 'saitama'
    const url = 'https://one-punch-man/saitama.jpg'

    test('el titulo y el url deben de ser obligatorios', () => {
        

        const  {container} = render(<GifItem title={title} url={url}/>)

        expect(container).toMatchSnapshot()
        
    })
    test('debe de mostrar la imagen con el url y alt indicado', () => {

        const  {container} = render(<GifItem title={title} url={url}/>)
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)

    });
    test('debe de mostrar el titulo en el componente', () => {

        const  {container} = render(<GifItem title={title} url={url}/>);
        expect(screen.getByAltText(title)).toBeTruthy();
    });
})