import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

function Layout(props) {
    
    const {cartItems}  = useContext(CartContext)
    const {user} = useContext(UserContext)

    return(
    <div className="Layout">
        <div className="nav_bar" >
            <div className="logo">
                <Image alt="No Image" className="logo_img" src="/logo.svg" alt="Logo" width="1500%" height="1500%" />
            </div>

            <div className="nav" >
                <Link href="/" className="link_a"> 
                    <div className="link-div">
                    
                        <div className="NavLink-div">
                            <div className="LinkImg">
                                <Image alt="No Image" src="/link_pallets.svg" width="40%" height="40%"/> 
                            </div>

                            <div className="LinkName linkProductsName">
                                Products
                            </div> 
                        </div>
                    
                    </div>
                </Link>

                <Link href="/Categories" className="link_a">
                    <div className="link-div" >
                        
                            <div className="NavLink-div">
                                <div className="LinkImg">
                                    <Image alt="No Image" className="categ" src="/link_products.svg" width="40%" height="40%"/> 
                                </div>

                                <div className="LinkName linkCategoryName">
                                    Categories
                                </div> 
                            </div>
                        
                    </div>
                </Link>
                
                <Link href="/Cart">
                    <div className="link-div">
                    
                        <div className="NavLink-div">
                                <div className="LinkImg">
                                    <Image alt="No Image" src="/link_contact.svg" width="40%" height="40%"/> 
                                </div>

                                <div className="link_name"> 
                                    Cart {cartItems.length>0 && `(${cartItems.length})`}
                                </div>
                            </div>
                    
                    </div>
                </Link>

                <Link href="/User">
                    <div className="link-div">
                    
                        <div className="NavLink-div">


                                <div className="LinkImg">
                                    <Image alt="No Image" src="/user.svg" width="40%" height="40%"/> 
                                </div>

                            
                                <div className="link_name"> 
                                {user.first_name?user.first_name:user.username?user.username:"Login"}
                                </div>

                                
                            </div>
                    
                    </div>
                </Link>
            </div>
        </div>
        
            <main>
                {props.children}
            </main>

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
        
        <div className="" id="FooterMob" >
            <div className="Footer_mob" >

                <div className="Networks" >
                        
                    <div className="networks-link">
                        <a href="https://www.facebook.com/El-Encanto-Liquidation-100615011645519">
                            <Image alt="No Image" className="link_net" src="/facebook.svg" width="45%" height="50%"></Image>
                        </a>
                    </div>
                    
                
                    <div className="networks-link">
                        <a href="https://wa.me/+17029576836">
                            <Image alt="No Image" className="link_net" src="/whatsapp.svg" width="45%" height="50%"></Image>
                        </a>
                    </div>
                    
                    <div className="networks-link">
                        <a href="https://www.instagram.com/liquidationelencanto/?hl=en">
                            <Image alt="No Image" className="link_net" src="/instagram.svg" width="45%" height="50%"></Image>
                        </a>
                    </div>
                    
                    <div className="networks-link">
                        <a href="tel:+17029576836">
                            <Image alt="No Image" className="link_net" src="/to_call.svg" width="45%" height="50%"></Image>   
                        </a>
                    </div>
                    
                    
                    
                    <div className="networks-link">
                        <a href="mailto:elencantoliquidation@gmail.com">
                            <Image alt="No Image" className="link_net" src="/message.svg" width="45%" height="50%"></Image>
                        </a>
                    </div>
                        
                    </div>

                <div className="Boxes" >
                    <Image alt="No Image" src="/boxes.svg" width="270%" height="120%" className="boxes_mob_img"/>
                </div>
            </div>
        </div>

    </div>
    );

    

}export default Layout