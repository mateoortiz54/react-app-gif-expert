import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"
// jest.mock('react')

describe('Pruebas ene le componente GifExpertApp', () => {
    test('debe de mostrar el titulo del componente', () => {

        render(<GifExpertApp/>)
        screen.debug();
        expect(screen.getByText('GifExpertApp')).toBeTruthy();

            
    })
    test('debe de concordar con el snapshoot', () => {
        const {container} = render(<GifExpertApp/>)
        expect(container).toMatchSnapshot();
    })
})