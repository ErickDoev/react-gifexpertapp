import { useFetchGifs } from "../Hooks/UseFetchGifs";

//import React,{useState,useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGift } from '../helpers/getGigfs';

export const GifGrid = ({category}) => {
//FQ8JsFPPo0PskcEDjDqDDf31qVBdtNiB
//api.giphy.com/v1/gifs/search
    /*const [images, setImages] = useState([]);
    
    useEffect(() => {
        getGift(category)
        .then(setImages);
    },[category]);*/
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__delay-1s animate__flash">{category}</h3> 
            {loading && <h3>CARGANDO..</h3>}
                    <div className="card-grid">
                    
                    {

                    /*images.map((img) => (
                                    <GifGridItem 
                                    key = {img.id}
                                    img= {img}/>
                                ))*/
                        images.map(img => (
                            <GifGridItem 
                                key = {img.id} 
                                { ...img }
                            />
                        ))

                    }
            </div>
        </>
    )
}
