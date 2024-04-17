import { useEffect } from "react"
import { useState } from "react";


const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ucx3oPDeC3r2EqzMs60v97Rjrfyw5kL4&q=$%7Bcategory%7D&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch (url)
    const {data} = await resp.json()
    const gifs = data.map (img => {
        return {
            id: img.id, 
            title: img.title, 
            url: img.imges.downsized_medium.url
        }
    })

    return gifs
}
export const GifGrid = ({category}) => {

    const [gifs, setGifs, GifItem] = useState([]);
    getGifs (category)

    const fetchGifs = async () => {
        try {
            const gifList = await getGifs(category); 
            console.log(gifList); 
            setGifs(gifList); 
        } catch (error) {
            console.error("Error fetching gifs:", error);
        }
    };

    useEffect (() => {
        fetchGifs();
    }, [category] )

    return (
        <div className="gif-grid">
            <h2>{category}</h2> 
            {gifs.map((gif, index) => (
                <GifItem key={index} gif={gif} /> 
            ))}
        </div>
    )
}

export default GifGrid;
