import Image from 'next/image';
import  ContactLink from '../../public/imgs/link_contact.svg';


function NavBar_mob(){

    return(
        
        <div className="navbar_mob">

        
            <div className="Link-div">
                <a href="/Pallets" className="link_nav_mob">
                    <Image src="/../public/imgs/link_pallets.svg" width="30%" height="30%" className="link_nav_img"/>
                    
                    <div className="link_name">
                        Pallets 
                    </div>
                </a>
            </div>

            <div className="Link-div">
                <a href="/Products" className="link_nav_mob">

                    <Image src="/../public/imgs/link_products.svg" width="30%" height="30%" className="link_nav_img"/>
                    
                    <div className="link_name">
                        Products 
                    </div>
                </a>
            </div>

            <div className="Link-div">
                <a href ="/Contact" className="link_nav_mob">
                   <Image src="/../public/imgs/link_contact.svg" width="30%" height="30%" className="link_nav_img"/>
                   
                    <div className="link_name"> 
                        Contact 
                    </div>
                </a>
                
            </div>

            
        </div> 
            

        
    );
}export default NavBar_mob