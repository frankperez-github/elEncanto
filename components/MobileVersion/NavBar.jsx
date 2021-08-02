import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const NavBar = () => {

   const {cartItems}  = useContext(CartContext)

    return (
        <div className=""id="NavBar_mob">
        <div className="navbar_mob" >

        <Link href="/" className="link_nav_mob">
            <div className="Link-div">
               
                    <Image src="/link_pallets.svg" width="30%" height="30%" className="link_nav_img"/>
                    
                    <div className="link_name">
                       Products
                    </div>
               
            </div>
            </Link>
            <Link href="/Categories" className="link_nav_mob">
            <div className="Link-div">
                

                    <Image src="/link_products.svg" width="30%" height="30%" className="link_nav_img"/>
                    
                    <div className="link_name">
                        Categories
                    </div>
               
            </div>
            </Link>
            <Link href ="/Cart" className="link_nav_mob">
            <div className="Link-div">
               
                <Image src="/link_contact.svg" width="30%" height="30%" className="link_nav_img"/>
                
                    <div className="link_name"> 
                        Cart {cartItems.length>0 && `(${cartItems.length})`}
                    </div>
                
                
            </div>
            </Link>
            
        </div>
    </div>
    )
}

export default NavBar