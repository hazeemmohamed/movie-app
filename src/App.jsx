import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WatchList from './pages/WatchList'
import NavBar from './pages/NavBar'
import { WatchListProvider } from './context/WatchListContext'

function App() {

  return (
    <div>

      <WatchListProvider>
    <BrowserRouter>
          <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/home' element={<Home/>}> </Route>
        <Route path='/watchlist' element={<WatchList/>}></Route>
      </Routes>
    </BrowserRouter>
    </WatchListProvider>
    </div>
  )
}

export default App
