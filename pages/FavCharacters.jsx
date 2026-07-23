// Functions for Favs
// 1. Add to Favorites => [{},{}] - limit 4
// 2. Remove from Favorites => [{},{}] - limit 0
// 3. Check "is a favorite?" => bool
import { useOutletContext } from "react-router-dom"
const FavCharacters = () => {

    const { favs } = useOuteltContext()
    return (
        <>
        <h1>Your Favorite Characters:
        </h1>
        </>
    )
}

export default FavCharacters