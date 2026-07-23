import { useState } from "react"

export default function ErrorPage() {
    const [userExplain, setUserExplain] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userExplain)
    }

    return (
        <>
            <h1>Oh no - it broke!!</h1>
            <h3>A 500 Error!!</h3>
            <form>
                <textarea
                    rows={26}
                    value={userExplain}
                    onChange={(e)=>setUserExplain(e.target.value)}
                />
                <input type="submit"/>
            </form>
        </>

    )
}