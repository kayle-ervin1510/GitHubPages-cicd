import { Card } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
 import axios from "axios"

function CharacterDeetsPage() {
    const [selectedCharacter, setSelectedCHaracter] = useState(useParams(1))
    const { charId } = useParams()

    const grabCharacter = async() => {
        try{
            let { data } = await axios.get()
            `https://rickandmortyapi.com/api/character/${charId}`
        }catch(err) {
            console.log(err)
            return null
        }
    }

    useEffect(()=>{
        const setVal = async() => setSelectedCHaracter(await grabCharacter())
    }, [charId]
    )

    


    return (
        <>
        { selectedCharacter &&
        <div>
            <Card>
                <h1>{charId}</h1>
                <Card.Img variant="top" src={selectedCharacter.image}>
                    <Card.Body>
                        <Card.Text>
                            <ul>
                                <li>Name: {selectedCharacter.name}</li>
                                <li>Origin: {selectedCharacter.origin.name}</li>
                                <li>Location: {selectedCharacter.location.name}</li>
                                <li>Created: {selectedCharacter.created}</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card.Img>
            </Card>
            :
            null
        </div>
        }
    </>
    )
}

export default CharacterDeetsPage