import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeView from './views/Home/HomeView'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
        <Route path='/' element={<HomeView />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
