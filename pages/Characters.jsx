//import CharacterCard from "../components/CharacterCard.jsx"
import axios from "axios"
import { useState, useEffect } from "react"

 function Characters() {
    const [currURL, setCurrURL] = useState("https://rickandmortyapi.com/api/character")
    const [nextURL, setNextURL] = useState(null)
    const [prevURL, setPrevURL] = useState(null)

    const getAllCharacters = async() => {

        try {let url = "https://rickandmortyapi.com/api/character"

        let { data } = await axios.get(url)
        setNextURL=(info.next)
        setPrevURL(info.prev)
        return data.results

    }catch(err) {

        console.log(err)

        alert("Oh No - Something went wrong!")

        return []
    }
    }

    const [characters, setCharacters] = useState([])
    
    useEffect (() =>{
        const setValue = async() => setCharacters(await getAllCharacters())
        setVals()
    }, [ currURL ])



    
    return 
    <>
    <h2>Characters Page</h2>
    <div style={{display:"flex", 
        justifyContent:"space-between"}}>

        <button disabled={prevURL===null}
                onClick={()=> setCurrURL(prevURL)}
        >
        PREV
        </button> 
        
        <button disabled={nextURL===null}
                onClick={()=> setCurrURL(nextURL)}
                >
                NEXT
        </button>

    </div>
    <div style={{display:"flex", flexWrap:"wrap", gap:"2vmin"}}>
    <CharacterCard/>
    </div>
    </>
}
export default Characters

//import axios from "axios"
//import Card from "./react-bootstrap/Card"


// import characters from Rick and Morty API
// https://rickandmortyapi.com/api/character
// Have next and previous buttons to look through characters
// Have link for singular character, to take to single character page
// i.e. CharacterDeetsPage, based upon a link in Characters.jsx