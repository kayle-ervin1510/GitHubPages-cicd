import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export default function Counter() {
    const {count, setCount} = useOutletContext()

    useEffect (
        ()=>{
            console.log("count has changed")
            const colors = ["lightgreen", "darkgreen", "yellow"]
            const randomIndex = Math.floor(Math.random()*colors.length)
            document.body.style.backgroundColor = colors[randomIndex]
        }, [count]
    )

    const addToCount=()=> {
        setCount(count + 1)
    }

    return (
        <section>
            <h2></h2>
            <p></p>
            <button 
            className="rounded-md bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
            onClick={ addToCount }
            >Do Click!</button>
        </section>
    )
}