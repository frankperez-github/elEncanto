import Link from 'next/link';
import Image from 'next/image';

function Layout(props) {


    return(
    <div className="Layout">
        <div className=""id="NavBar_mob">
            <div className="navbar_mob" >
                <div className="Link-div">
                    <a href="/" className="link_nav_mob">
                        <Image src="/link_pallets.svg" width="30%" height="30%" className="link_nav_img"/>
                        
                        <div className="link_name">
                           Products
                        </div>
                    </a>
                </div>

                <div className="Link-div">
                    <a href="/Categories" className="link_nav_mob">

                        <Image src="/link_products.svg" width="30%" height="30%" className="link_nav_img"/>
                        
                        <div className="link_name">
                            Categories
                        </div>
                    </a>
                </div>

                <div className="Link-div">
                    <a href ="#" className="link_nav_mob">
                    <Image src="/link_contact.svg" width="30%" height="30%" className="link_nav_img"/>
                    
                        <div className="link_name"> 
                            Contact 
                        </div>
                    </a>
                    
                </div>

                
            </div>
        </div>
        <div className="nav_bar" >
            <div className="logo">
                <Image className="logo_img" src="/logo.svg" alt="Logo" width="150%" height="150%" />
            </div>

            <div className="nav" >

                <div className="link-div">
                    <Link href="/" className="link_a"> 
                        <div className="NavLink-div">
                            <div className="LinkImg">
                                <Image src="/link_pallets.svg" width="40%" height="40%"/> 
                            </div>

                            <div className="LinkName">
                                Pallets
                            </div> 
                        </div>
                    </Link>
                    
                    
                </div>

                <div className="link-div" >
                    <Link href="/Categories" className="link_a">
                        <div className="NavLink-div">
                            <div className="LinkImg">
                                <Image src="/link_products.svg" width="40%" height="40%"/> 
                            </div>

                            <div className="LinkName">
                                Categories
                            </div> 
                        </div>
                    </Link>
                </div>

                <div className="link-div">
                    <Link href="#">
                    <div className="NavLink-div">
                            <div className="LinkImg">
                                <Image src="/link_contact.svg" width="40%" height="40%"/> 
                            </div>

                            <div className="LinkName">
                                Contact
                            </div> 
                        </div>
                    </Link>
                </div>

            </div>
        </div>
        
            <main>
                {props.children}
            </main>

        <div className="Footer">
            
            <div className="Networks_column">
            
                <div className="ColumnLink">
                    <a href="https://www.facebook.com/El-Encanto-Liquidation-100615011645519">
                        <Image className="link" src="/facebook.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
                
                <div className="ColumnLink">
                    <a href="https://wa.me/+17029576836">
                        <Image className="link" src="/whatsapp.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
                <div className="ColumnLink">
                    <a href="https://www.instagram.com/liquidationelencanto/?hl=en">
                        <Image className="link" src="/instagram.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
                <div className="ColumnLink">
                    <a href="tel:+17029576836">
                        <Image className="link" src="/to_call.svg" width="45%" height="50%"></Image>   
                    </a>
                </div>
                
                
                <div className="ColumnLink">
                    <a href="mailto:elencantoliquidation@gmail.com">
                        <Image className="link" src="/message.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                

            </div>

            <div className="boxes">
                <Image src="/boxes.svg" width="220%" height="100%"/>
            </div>
        </div>
        
        <div className="" id="FooterMob" >
            <div className="Footer_mob" >

                <div className="Networks" >
                        
                    <div>
                        <a href="https://www.facebook.com/El-Encanto-Liquidation-100615011645519">
                            <Image className="link_net" src="/facebook.svg" width="45%" height="50%"></Image>
                        </a>
                    </div>
                    
                
                    <div>
                        <a href="https://wa.me/+17029576836">
                            <Image className="link_net" src="/whatsapp.svg" width="45%" height="50%"></Image>
                        </a>
                    </div>
                    
                    <div>
                        <a href="https://www.instagram.com/liquidationelencanto/?hl=en">
                            <Image className="link_net" src="/instagram.svg" width="45%" height="50%"></Image>
                        </a>
                    </div>
                    
                    <div>
                        <a href="tel:+17029576836">
                            <Image className="link_net" src="/to_call.svg" width="45%" height="50%"></Image>   
                        </a>
                    </div>
                    
                    
                    
                    <div>
                        <a href="mailto:elencantoliquidation@gmail.com">
                            <Image className="link_net" src="/message.svg" width="45%" height="50%"></Image>
                        </a>
                    </div>
                        
                    </div>

                <div className="Boxes" >
                    <Image src="/boxes.svg" width="270%" height="120%" className="boxes_mob_img"/>
                </div>
            </div>
        </div>

    </div>
    );

    

}export default Layout