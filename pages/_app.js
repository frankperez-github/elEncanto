import '../styles/globals.css'
import '../styles/Desk.css'
import '../styles/Mobile.css'
import Layout from '../components/Layout'
import CartContextProvider from '../context/CartContext'
import UserContextProvider from '../context/UserContext'

function MyApp({ Component, pageProps }) {
  return(
    <UserContextProvider>
    <CartContextProvider>
    <Layout>
      
      <Component {...pageProps}/> 
    
    </Layout>
    </CartContextProvider>
    </UserContextProvider>
  )
}

export default MyApp
