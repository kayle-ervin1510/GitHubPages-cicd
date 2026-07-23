import SearchCard from "./SearchCard"

export default function SearchContainer({searchList, rmData}) {
    return (
        <div id="container">
        {
            searchList.map(
                (character)=>(
                    <SearchCard
                    character={character}
                    rmData={rmData}
                    key={character.id}
                    />
                )
            )
        }
        </div>
    )
}