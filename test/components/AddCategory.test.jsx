import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en AddCategory', () => {

    const inputValue = 'Saitama';

    test('debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={()=>{}} />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, {target: {value: inputValue}})

        //El evento input viene con un atributo value, y no hay que mandarle el target.value
        expect(input.value).toBe('Saitama')
        // screen.debug()

    })
    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        // TODO: ???
        const onNewCategory = jest.fn()
        render( <AddCategory onNewCategory={onNewCategory} />)


        // No hay que enviar necesariamente el input en esta ocasion ya que viene vacio por defecto
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('')    

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);


    })
    test('no se debe de llamar al onNewCategory si el input está vacío', () => {


        const onNewCategory = jest.fn()
        render( <AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: ''}});
        fireEvent.submit(form);
        expect(input.value).toBe('')   

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        // expect(onNewCategory).toHaveBeenCalledWith(inputValue);


    })
})