import { useState } from "react"

export default function AboutPage() {

    const [shouldCrash, setShouldCrash]=useState(false)
    if (shoudCrash) {
        throw new Error ("I told you not to press it!! This is an intentional crassh error!")
    }

    return (
        <>
    
        <h1>About Page</h1>
        <p>
            <a href="https://www.imdb.com/title/tt2861424/" target="_blank" rel="nonreferrer" target="_blank" rel="nonreferrer"> Click To Read More!</a>
        </p>
        <button 
        className="rounded-md bg-red-500"
        onClick={()=> setShouldCrash(true)}
        > 
        Don't Press It...
        </button>
        </>
    )
}