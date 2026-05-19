import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PageLayout from './component/layout/PageLayout'
import Error from './component/pages/Error'
import Home from './component/pages/Home'
import Recipes from './component/pages/Recipes'
import Categories from './component/pages/Categories'
import MealPaln from './component/pages/MealPaln'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import { gettingData } from './component/api/LoadingRecipe'
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout/>,
      errorElement: <Error/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/recipes",
          element: <Recipes/>,
          loader: gettingData,
        },
        {
          path: "/categories",
          element: <Categories/>
        },
        {
          path: "/mealplan",
          element: <MealPaln/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
      ]
    }
  ])
  return (
  <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
