import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useNavigate, useOutlet, useOutletContext } from "react-router-dom"
import { isFileServingAllowed } from "vite"

function CharacterCard({character}){
    const navigate = useNavigate()
    const [isFav, setIsFav] = useState(evalFav)

    const { favs, setFavs } = useOutletContext()

    const addToFavs = (charObj) => {
        if (favs.lenght < 4){
            setFavs([...favs, charObj])
            setFavs(true)
        } else {
            alert("Only 4 can be your Favs!")
        }
        return setFavs(!setFavs)
        
    }

    const removeFromFavs = (charId) =>
    {
        setFavs(
            favs.filter((char) => char.id !== charId))
            setFavs(false)
        }

    const evalFav = () => {
        console.log("Eval trigger")
        let remaining = favorites.filter((char)=>(char.id === character.id))
        return remaining.length
    }

    useEffect (()=>{
        setIsFav(evalFav())
    })

    return (
        <Card>
            <Card.Img>
            <Card.Body>
                <Card.Title>
                    <Card.Text>

                        <Button>
                            Click for Deets
                        </Button>

                        <Button>
                            Add to Favs
                        </Button>

                        <Button>
                            Remove from Favs
                        </Button>

                    </Card.Text>
                </Card.Title>
            </Card.Body>
            </Card.Img>
        </Card>
    )

}
