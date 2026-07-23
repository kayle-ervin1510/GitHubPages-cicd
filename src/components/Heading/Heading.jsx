import { useEffect, useState } from "react"
import styles from "./heading.module.css"
import Button from "../Button"

export default function Heading() {
    const [heading, setHeading] = useState("Rick and Morty")

    useEffect(()=>{
        console.log("heading changed")
        console.log(heading)
    }, [heading]
)

return (
    <>
    <h1 id="title" className={styles.heading}>{heading}</h1>
    <Button onClick={ ()=>{setHeading("Rick and Morty Rule the World!!")} }>Change Title</Button>
    </>
)
}