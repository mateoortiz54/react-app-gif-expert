import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch'])



    const onAddCategory = (newCategory) =>{
        
        if (categories.includes(newCategory)) return;

        
        // Una forma de hacerlo
        setCategories([newCategory, ...categories]);
        // setCategories( cat => [...cat, 'Tokyo Ghoul'])
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input para buscar el gif */}
            <AddCategory onNewCategory={event => onAddCategory(event)}/>

            {/* listado de Gifs */}
            {/* <button onClick={onAddCategory}>Add Category</button> */}

            <ol>
                {categories.map(category => (
                    <GifGrid  category={category} key={category}/>
                ))}
            </ol>
                {/* Gif Item */}


        </>
        
    )
}

