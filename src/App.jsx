import "./App.css"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
//import HomePage from "../pages/HomePage.jsx"
import Heading from "./components/Heading/Heading.jsx"
//import AboutPage from "../pages/AboutPage.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"


function App() {

    const[user, setUser] = useState(null)
    const [count, setCount] = useState(0)
    const [favs, setFavs] = useState([])

  
  useEffect(
    ()=>{
      console.log("page mounted")
      return ()=>{console.log("page unmounted")}
    }, []
  )
  
  useEffect(()=>{
    console.log(user)
  }, [user]
  )

  return (
    <>    
    <NavBar/>
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <Heading/>
        <Outlet context={ {favs, setFavs, count, setCount} }/>
        <button onClick={()=>setUser("I am User!")}>Change User</button>
      <h3>
        <li>Watch the show here!</li>
        <a href="https://www.youtube.com/watch?v=BFTSrbB2wII" target="_blank" rel="nonreferrer"> Click Here!</a>
      </h3>
      
      </div>
    </main>
    
    </>
  )
}

export default App
