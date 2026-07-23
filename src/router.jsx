import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import HomePage from "../pages/HomePage.jsx"
import AboutPage from "../pages/AboutPage.jsx"
import NotFound from "../pages/NotFound.jsx"
import Characters from "../pages/Characters.jsx"
import CharacterDeetsPage from "../pages/CharacterDeetsPage.jsx"
import FavCharacters from "../pages/FavCharacters.jsx"
import ErrorPage from "../pages/ErrorPage.jsx"

const router = createBrowserRouter(
	[
		{
			path:"/",
			element:<App/>,
			errorElement:<ErrorPage/>,
			
			children: [
				{
					index:true,
					element: <HomePage/>
				},
				{
					path:"about/",
					element:<AboutPage/>
				},
				{
					path:"characters",
					element:<Characters/>
				},
				{
					path:"characters/:charID/",
					element: <CharacterDeetsPage/>
				},
				{
					path:"favorites/",
					element:<FavCharacters/>
				},
				{
					path:"*",
					element:<NotFound/>
				},
				

				
			]
		}
	]
)

export default router;
