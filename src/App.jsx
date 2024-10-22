import Navbar from './components/Navbar'
import Create from './components/Create'
import All from './components/All'
import Update from './components/Update'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {path: '/', element: <><Navbar/><Create/></>},
    {path: '/all', element: <><Navbar/><All/></>},
    {path: '/all/:id', element: <><Navbar/><Update/></>}
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
