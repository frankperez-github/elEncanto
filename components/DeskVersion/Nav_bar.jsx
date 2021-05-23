import Link from 'next/link';
import Image from 'next/image';
import  Logo from '../../public/imgs/Logo_Liquidation.svg';
import  PalletsLink from '../../public/imgs/link_pallets.svg';
import ProductsLink from '../../public/imgs/link_products.svg';
import  ContactLink from '../../public/imgs/link_contact.svg';


function Nav_bar(){

    return(

        <div className="nav_bar">

            <div className="logo">
                <Image className="logo_img" src="/../public/imgs/Logo_Liquidation.svg" alt="Logo" width="150%" height="150%" />
            </div>

            <div className="nav">

                <div className="link-div">
                    <Link href="/Pallets" className="link_a"> 
                        <div className="NavLink-div">
                            <div className="LinkImg">
                                <Image src="/../public/imgs/link_pallets.svg" width="40%" height="40%"/> 
                            </div>

                            <div className="LinkName">
                                Pallets
                            </div> 
                        </div>
                    </Link>
                    
                    
                </div>

                <div className="link-div" >
                    <Link href="/Products" className="link_a">
                        <div className="NavLink-div">
                            <div className="LinkImg">
                                <Image src="/../public/imgs/link_products.svg" width="40%" height="40%"/> 
                            </div>

                            <div className="LinkName">
                                Products
                            </div> 
                        </div>
                    </Link>
                </div>

                <div className="link-div">
                    <Link href="/Contact">
                    <div className="NavLink-div">
                            <div className="LinkImg">
                                <Image src="/../public/imgs/link_contact.svg" width="40%" height="40%"/> 
                            </div>

                            <div className="LinkName">
                                Contact
                            </div> 
                        </div>
                    </Link>
                </div>

            </div>

        </div>
        

    );
}export default Nav_bar