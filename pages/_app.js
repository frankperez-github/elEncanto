import '../styles/globals.css'
import '../styles/Desk.css'
import Image from 'next/image'
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

    <div className="Footer">
            
        <div className="Networks_column">
        
            <div className="ColumnLink">
                <a href="tel:+17029576836">
                    <Image alt="No Image" className="link" src="/to_call.svg" width="45%" height="50%"></Image>   
                </a>
            </div>

            
            
            <div className="ColumnLink">
                <a href="https://wa.me/+17029576836">
                    <Image alt="No Image" className="link" src="/whatsapp.svg" width="45%" height="50%"></Image>
                </a>
            </div>

            <div className="ColumnLink">
                <a href="https://www.facebook.com/El-Encanto-Liquidation-100615011645519">
                    <Image alt="No Image" className="link" src="/facebook.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="https://www.instagram.com/liquidationelencanto/?hl=en">
                    <Image alt="No Image" className="link" src="/instagram.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            
            
            <div className="ColumnLink">
                <a href="mailto:elencantoliquidation@gmail.com">
                    <Image alt="No Image" className="link" src="/message.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            

        </div>

        <div className="boxes">
            <Image alt="No Image" src="/boxes.svg" width="220%" height="100%"/>
        </div>
    </div>
      
    </ShippingContextProvider>
    </CartContextProvider>
    </UserContextProvider>
  )
}

export default MyApp
