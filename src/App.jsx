import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WatchList from './pages/WatchList'
import NavBar from './pages/NavBar'

function App() {

  return (
    <div>
    <BrowserRouter>
          <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/home' element={<Home/>}> </Route>
        <Route path='/watchlist' element={<WatchList/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
