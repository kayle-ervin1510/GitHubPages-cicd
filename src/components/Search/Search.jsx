import axios from "axios"
import SearchContainer from "./SearchContainer"
import SearchForm from "./SearchForm"
import { useEffect, useState } from "react"

export default function Search() {
    const [searchID, setSearchID] = useState("")
    const [searchList, setSearchList] = useState([])

    useEffect (
        ()=> {
            const getStartingCharacter=async ()=>{
                const response = await axios.get("https://rickandmortyapi.com/api/character/183")
                setSearchList([response.data])
            }
        getStartingCharacter();
        }, []

    )

    useEffect(
        ()=>{
            console.log("Search List has changed (or this is the first mount)")
            console.log(searchList)
        }, [searchList]
    )

    const addCharacterData =(data)=>{
        setSearchList([...searchList, data])
    }

    const rmData =(id)=>{
        setSearchList(searchList.filter((character)=>character.id!==id))
    }

    const getSearchData = async () =>{
        const requestURL = "https://rickandmortyapi.com/api/character/${searchID}"
        try {
            let response = await axios.get(requestURL)
            console.log(response)
            addCharacterData(response.data)
        }catch(err){
            console.log(err)
            alert("That ID number does not exist!")
        }finally{
            console.log("that's all folks!")
        }
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        getCharacterData()
        setSearchID("")
    }

    return (
        <>
        <SearchForm handleSubmit={handleSubmit} setSearchID={setSearchID} searchID={searchID}/>
        <SearchContainter
        searchList={searchList}
        rmData={rmData}
        />
        </>
    )
}
