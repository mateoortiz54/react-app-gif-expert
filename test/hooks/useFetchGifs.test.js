import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        // useFetchGifs
        const {result} = renderHook(()=> useFetchGifs('One punch man'))
        // console.log(result)

        const {images, isLoading} = result.current;

        console.log(images, isLoading)
        //una posible prueba
        expect(isLoading).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {


        // Evaluamos los hooks basados en su return o en las acciones que van a tener
        const {result} = renderHook(()=> useFetchGifs('One Punch Man'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy();
    })

})