import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeView from './views/Home/HomeView'
import { LoginView } from './views/Login/LoginView'
import { UserProvider } from './context/UserContext/UserState'
import RegisterView from './views/Register/RegisterView'
import ProfileView from './views/Profile/ProfileView'
import ProductsView from './views/Products/ProductsView'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import CartView from './views/Cart/CartView'


function App() {

  return (
    <>
    <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
      <Header />
        <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/register' element={<RegisterView />} />
        <Route path='/login' element={<LoginView />} />
        <Route path='/profile' element={<ProfileView />} />
        <Route path='/products' element={<ProductsView />} />
        <Route path='/cart' element={<CartView />} />
        </Routes>
        </ProductsProvider>
      </UserProvider>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
