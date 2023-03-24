import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)

    return (
        <div>
            
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando imagenes....</h2>)
            }
            { <div className='card-grid'>
            {
                images.map(obj=>(
                    
                    <GifItem
                        key={obj.id}
                        { ...obj }
                    />
                ))
            }
            </div>}
            
        </div>
    )


}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}