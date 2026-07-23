import "./App.css"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "../pages/HomePage.jsx"
import Heading from "./components/Heading/Heading.jsx"
//import AboutPage from "../pages/AboutPage.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"


function App() {
  
  useEffect(
    ()=>{
      console.log("page mounted")
      return ()=>{console.log("page unmounted")}
    }, []
  )

  const[user, setUser] = useState(null)

  const [favs, setFavs] = useState([])




  useEffect(()=>{
    console.log(user)
  }, [ user ]
)

  return (
    <>
    <Heading/>
    <HomePage/>
    <NavBar/>
    <section>
      <h3>
        <li>Watch the show here!</li>
        <a href="https://www.youtube.com/watch?v=BFTSrbB2wII" target="_blank" rel="nonreferrer"> Click Here!</a>
      </h3>
      <button onClick={()=>setUser("I am User!")}>Change User</button>
      
    </section>
    
    </>
  )
}

export default App
