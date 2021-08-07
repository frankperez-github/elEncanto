import '../styles/globals.css'
import '../styles/Desk.css'
import '../styles/Mobile.css'
import Layout from '../components/Layout'
import CartContextProvider from '../context/CartContext'
import UserContextProvider from '../context/UserContext'
import ShippingContextProvider from '../context/ShippingContext'

function MyApp({ Component, pageProps }) {
  return(
    <UserContextProvider>
    <CartContextProvider>
      <ShippingContextProvider>
    <Layout>
      
      <Component {...pageProps}/> 
    
    </Layout>
    </ShippingContextProvider>
    </CartContextProvider>
    </UserContextProvider>
  )
}

export default MyApp
