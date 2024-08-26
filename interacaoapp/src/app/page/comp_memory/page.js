"use client"
import {useState} from "react";
import {sculptureList } from "./data";



export default function comp_memory(){ // Componentes de Memoria
    const[index, setIndex] = useState(0); // Destructuring assignment
    const[showMore, setShowMore] = useState(false);
    const hasNext = index <sculptureList.length -1;

    function handleNextClick(){
        if(hasNext){
            setIndex(index +1);
        }else{
            setIndex(0);
        }
    }

    function hanfleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return(
        <>
            <button onClick={handleNextClick}>Next</button>
            <h2>
                <i>{sculpture.name}</i>
                <br /> {sculpture.artist}
            </h2>
            <h3>({index + 1} of {sculpture.length})</h3>
            <button onClick={hanfleMoreClick}>
                {showMore? 'hide': 'show'} details 
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img 
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}