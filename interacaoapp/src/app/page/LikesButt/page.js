
"use client"
import { useState } from "react"

export default function LikesButt() {
    const [likes, setLikes] = useState(0)
    
    function handleClick(){
        setLikes(likes + 1);
    }
    
    return (
        <div>
            <button onClick={handleClick}>LIKE({likes})</button>
       </div>
    )
}